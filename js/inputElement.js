class TransferInputElement {
    constructor (selector, regexp, id) {
        this.id = id;
        this.selector = document.querySelector(`.${selector}`);
        this.regexp = regexp;
        this.value = "";
        this.shouldSend = false;
    }
    getValue(){
        this.value = this.selector.value;
        return this.value;
    }
    addDynamicValidationListener(functArg) {
        // console.log(this);
		this.selector.addEventListener ("keyup", ()=>{
        functArg(this)
        this.getValue();
        // console.log(this.value)
		})
	}
    pushToSubmitArray(array) {
        array.push(this);
    }
    checkElement(){
        if(this.shouldSend){
            return true;
        }else{
            return false;
        }
    }
}
function inputFormElement (selector, regexp, id) {
    if(selector !== "" && regexp instanceof RegExp){
        return new TransferInputElement(selector,regexp, id);
    }
}