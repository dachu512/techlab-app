class Validator {
	constructor(){
        
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