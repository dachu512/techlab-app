class apiManagement {
    constructor () {
    }
    getClientDataFromApi (functArg) {
        fetch('http://localhost:3001/rest/v1/pekao-requests/init-get').then(response =>{
            if (response.status === 200) {
            response.json().then(response2 => {
                const data = response2;
                console.log(data);
                functArg(data);
            })

            }
        })
    }

}
function apiManagementObject(){
    return new apiManagement();
}