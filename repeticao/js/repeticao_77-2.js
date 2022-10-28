let idades = []

!(function () {
    capturaDados();
})();

function capturaDados() {
    document.querySelector("#idade")
        .addEventListener("keypress", (e) => {
            console.log(e); //Mosta o evento no console
            if (e.key == "Enter") {
                if (e.target.value == "0") {
                    controllerIdade();
                } else {
                    addIdade(e.target.value);
                    mostracont(idades.length);
                }
                e.target.value = ""; // limpa os valores;
                e.target.focus = true;
                e.preventDefault(); //cancela o enter de envio do form
            }
        })
}

function controllerIdade() {
    //let idade = document.querySelector("#idade");
    let media = mediaIdade();
    saidaResultado("Media: " + media.toFixed(2));
}

function addIdade(idade) {
    let newIdade = parseInt(idade);
    if (!Number.isNaN(newIdade)) {
        idades.push(newIdade);
    }
}

function mediaIdade() {
    let somatorio = 0;
    let cont = idades.length;
    for (var index = 0; index < cont; index++) {
        somatorio += idades[index];
    }
    return somatorio / cont;
}

//View -----------------
function saidaResultado(texto) {
    document.querySelector("#saidaResultado").innerHTML = texto;
}

function mostracont(cont) {
    document.querySelector("#contador").innerHTML = "<b>" + cont + "</b>"
}