class Transfer {
    constructor(data) {
        this.id = "id";
        this.selectedAccount = document.querySelector(`.${data.selectedAccount.inputTitle}`).value;
        this.accountNr = document.querySelector(`.${data.accountNr.inputTitle}`).value;
        this.receiverAddress = document.querySelector(`.${data.receiverAddress.inputTitle}`).value;
        this.transferValue = document.querySelector(`.${data.transferValue.inputTitle}`).value;
        this.transferTitle = document.querySelector(`.${data.transferTitle.inputTitle}`).value;
        this.isStandingOrder = document.querySelector(`.${data.isStandingOrder.inputTitle}`).value;
        this.standingOrderName = document.querySelector(`.${data.standingOrderName.inputTitle}`).value;
    }
    // getSelectedAccount(selector){
    //     let selectedAccount = document.querySelector(`.${selector}`);
    //     console.log(selectedAccount);
    //     selectedAccount = selectedAccount.options[selectedAccount.selectedIndex].value;
    //     return selectedAccount;
    // }
    // createTransfer(array){

    // }
}
function transfer (id, selectedAccount, accountNr, receiverAddress, transferValue, transferTitle, isStandingOrder, standingOrderName) {
    if (selectedAccount !== "" && accountNr !== (undefined || null) &&  transferValue !== (undefined || null) 
		&& transferTitle !== ""){
            return new Transfer(id, selectedAccount, accountNr, receiverAddress, transferValue, transferTitle, isStandingOrder, standingOrderName);
        }
}
