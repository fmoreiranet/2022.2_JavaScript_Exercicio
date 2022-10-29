let endereco = document.getElementById("saida");

!(function () {
    buscaCEP("23068110");
})();


function buscaCEP(cep) {
    //https://viacep.com.br/ws/23068110/json/    
    // Create an XMLHttpRequest object
    const xhttp = new XMLHttpRequest();

    // Define a callback function
    xhttp.onload = function () {
        // Here you can use the Data
        console.log(this.response);
        endereco.innerHTML = this.response;
    }

    // Send a request
    xhttp.open("GET", "https://viacep.com.br/ws/" + cep + "/json/");
    xhttp.send();
}