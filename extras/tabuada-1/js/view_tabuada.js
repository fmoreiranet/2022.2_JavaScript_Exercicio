function controllerTabuada() {
    let numero = parseInt(document.querySelector("#numero").value);
    let resultado = montarTabada(numero);
    saidaDados(resultado);
}

function saidaDados(texto) {
    document.querySelector("#saidaResultado").innerHTML = texto;
}