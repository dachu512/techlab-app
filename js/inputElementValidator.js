class Validator {
	constructor(){
        
	}
	getSmsAuthorization (smsCode) {
		let data = smsCode;

	    fetch(`http://localhost:3001/rest/v1/pekao-requests/postSMSToken`, {
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify(data)
	    }).then(response=>{
		    if (response.status === 200) {
				response.json().then(response2 => {
					const smsAuth = response2.tokenOk;
					return smsAuth;
				});
				
			}else if (response.status === 500) {
				return false;
			}
		});
		return true;
	}
	checkInputs(array){
		const check = array.every(element => {
			return element.shouldSend === true;
		})
		return check;
	}
	customValidation (inputElementObj) {
		if(inputElementObj.regexp.test(inputElementObj.selector.value)){
			inputElementObj.selector.classList.contains("color-red") && inputElementObj.selector.classList.remove("color-red"); 
			inputElementObj.selector.classList.add("color-green");
			// console.log("działa")
			inputElementObj.shouldSend = true;
			return true
		}else {
			inputElementObj.selector.classList.contains("color-green") && inputElementObj.selector.classList.remove("color-green") 
			inputElementObj.selector.classList.add("color-red");
			// console.log("nie działa")
			inputElementObj.shouldSend = false;
			return false
		}
	 }
}

function validatorObject () {
	return new Validator ();
}