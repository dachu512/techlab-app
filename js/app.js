document.addEventListener("DOMContentLoaded", function() {
	const transferBtn = document.querySelector(".newPaymentBtn");
	const transferForm = document.querySelector(".transferWrapper");
	const successMsg = document.querySelector(".successMsg");
	const firstSectionSelector = document.querySelector('.firstSection');
	(transferBtn.addEventListener("click", function () {
		transferForm.classList.contains('none') && transferForm.classList.remove('none');
		return 0;
	}));
	// let data = {};
	// fetch(`http://localhost:3001/rest/v1/products/123`).then(response => {
	// 	response.json().then(response =>{
	// 		data = response.cards[0];
	// 		console.log(data);
	// 	})
	
    // });


	const newClient = client('');
	const customValidator = validatorObject();
	const apiManagement = apiManagementObject();
	const createInputElement = [];
	const transferHistory = [];
	
	


	// newClient.getClientFromApi();
	// console.log(newClient);

	const test = apiManagement.getClientDataFromApi(newClient.createClient);
	console.log(test);


	const inputTable = [
		{
			inputTitle: "destinationAccountInput",
			inputRegexp: /\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}|\d{26}/
		},
		{
			inputTitle: "transferAddressInput",
			inputRegexp: /^([a-zA-Z0-9-/ .]){3,100}$/
		},
		{
			inputTitle: "transferValueInput",
			inputRegexp: /^[0-9]+(\.[0-9]{1,2})?$/
		},
		{
			inputTitle: "transferTitleInput",
			inputRegexp: /^([a-zA-Z -_]){3,100}$/
		}
	];

	const transferInputTable = {
		"selectedAccount" :
		{
			inputTitle: "outputAccountInput"
		},
		"accountNr" :
		{
			inputTitle: "destinationAccountInput"
		},
		"receiverAddress" :
		{
			inputTitle: "transferAddressInput"
		},
		"transferValue" :
		{
			inputTitle: "transferValueInput"
		},
		"transferTitle" :
		{
			inputTitle: "transferTitleInput"
		},
		"isStandingOrder" :
		{
			inputTitle: "standingOrderInput"
		},
		"standingOrderName" :
		{
			inputTitle: "transferOrderNameInput"
		}
}
// fetch('http://localhost:3001/rest/v1/pekao-requests/init-get').then(response =>{
// 	// console.log(response);
// 		// console.log(response.toString())
// 		// let temp = JSON.stringify(response)
// 		// temp.json().then(response2 => {
// 		// console.log(response2);
// 		// return 0;
// 		response.json().then(response2 => {
// 			console.log(response2);
// 		})
// 	})


	const sendPaymentBtn = document.querySelector('#submitBtn');
	sendPaymentBtn.addEventListener("click", function (e) {
		e.preventDefault();
		const check = customValidator.checkInputs(createInputElement);
		if (check){
			const auth = document.querySelector('.smsAuthorization');
			auth.classList.contains('none') && auth.classList.remove('none');

			const authorizationBtn = document.querySelector('.authorizationBtn');
			authorizationBtn.addEventListener('click', function (e) {
				e.preventDefault();
				const smsCodeInput = document.querySelector('.authorizationInput').value;
				const authResponse = customValidator.getSmsAuthorization(smsCodeInput);
					if(authResponse){
						console.log('Wszystko ok');
						let newTransfer = transfer(transferInputTable);
						const sendTransferResponse = newTransfer.sendTransfer();
						// console.log(sendTransferResponse);
						const successMsg = document.querySelector('.successMsg');
						!firstSectionSelector.classList.contains('none') && firstSectionSelector.classList.add('none');
						successMsg.classList.contains('none') && successMsg.classList.remove('none');
						!transferForm.classList.contains('none') && transferForm.classList.add('none');

					}else{
						console.log('Błąd autoryzacji SMS');
					}
			})
		}else{
			return console.log('Wypełnij poprawnie wymagane pola');
		}

	})

	inputTable.map(inputObject => {
		let element = inputFormElement(inputObject.inputTitle, inputObject.inputRegexp);
		createInputElement.push(element);
	})

	createInputElement.map(element => {
		element.addDynamicValidationListener(customValidator.customValidation);
	})

	// CLOSING POPUPS
	const closeBtn = document.querySelector('.closeIcon');
	closeBtn.addEventListener('click', function () {
		!transferForm.classList.contains('none') && transferForm.classList.add('none');
		return 0;
	})

	const closeBtnMsg = document.querySelector('.exitBtn');
	closeBtnMsg.addEventListener('click', function () {
		!successMsg.classList.contains('none') && successMsg.classList.add('none');
		firstSectionSelector.classList.contains('none') && firstSectionSelector.classList.remove('none');
		return 0;
	})

})