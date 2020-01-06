class Client {
    constructor (data) {
        this.name = data.name;
        this.surname = data.surname;
        this.accountBalance = data.accountBalance;
        this.accountNumber = data.accountNumber;
        this.accountType = data.accountType;
        this.currency = data.currency;
        this.accountHistory = data.accountHistory;
        // this.accountBalance = data.accounts;
    }
    // getClientFromApi(){
    //     fetch('http://localhost:3001/rest/v1/pekao-requests/init-get').then(response =>{
    //         if (response.status === 200) {
    //         response.json().then(response2 => {
    //             const data = response2;
    //             return this.createClient(data);
    //         })
    //         }
    //     })
    // }
    putDataToPage (client) {
        document.querySelector('.username').innerText = client.name;
    }
    createClient (dataFromApi) {
        console.log(dataFromApi);
        const data = {
            name: dataFromApi.name,
            surname: dataFromApi.surname,
            accountBalance: dataFromApi.accounts[0].accBalanse,
            accountNumber: dataFromApi.accounts[0].accNr,
            accountType: dataFromApi.accounts[0].accType,
            currency: dataFromApi.accounts[0].currency,
            accountHistory: dataFromApi.accounts[0].accHistory
        }

        console.log(data);
        const newClient = client(data);
        this.putDataToPage(newClient);
        console.log(newClient);
        return newClient;
    }
}
function client(data){
    return new Client(data);
}
