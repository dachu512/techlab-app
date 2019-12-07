document.addEventListener("DOMContentLoaded", function() {
	const transferBtn = document.querySelector(".newPaymentBtn");
	const transferForm = document.querySelector(".transferWrapper");
	(transferBtn.addEventListener("click", function () {
		transferForm.classList.contains('none') && transferForm.classList.remove('none');
		return 0;
	}));

	const customValidator = validatorObject();
	const createInputElement = [];
	const transferHistory = [];

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
	const sendPaymentBtn = document.querySelector('#submitBtn');
	sendPaymentBtn.addEventListener("click", function (e) {
		e.preventDefault();
		const check = customValidator.checkInputs(createInputElement);
		if(check){
			console.log('Wszystko ok');
			let newTransfer = transfer(transferInputTable);
			console.log(newTransfer);
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

	// CLOSING POPUP
	const closeBtn = document.querySelector('.closeIcon');
	closeBtn.addEventListener('click', function () {
		!transferForm.classList.contains('none') && transferForm.classList.add('none');
		return 0;
	})

})