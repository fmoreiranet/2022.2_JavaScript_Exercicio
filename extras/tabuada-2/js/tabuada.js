function controllerTabuada() {
    let tab1 = parseInt(document.querySelector("#numero1").value);
    let tab2 = parseInt(document.querySelector("#numero2").value);
    let tabuadas = montarTabada(tab1, tab2);
    let resultado = desenharTabela(tabuadas);
    saidaDados(resultado);
}

function saidaDados(texto) {
    document.querySelector("#saidaResultado").innerHTML = texto;
}

function desenharTabela(tabuadas) {
    let tabelaTabuada = "<div class='tabuada'>";
    for (let i = 0; i < tabuadas.length; i++) {
        tabelaTabuada += "<div>";
        tabelaTabuada += tabuadas[i];
        tabelaTabuada += "</div>";
    }
    tabelaTabuada += "</div>";
    return tabelaTabuada;
}

function montarTabada(tab1 = 0, tab2 = 0) { //tab1 = 5 e tab2 = 7
    let tabuadas = [];
    let tabuada = "";
    for (let indexT = tab1; indexT <= tab2; indexT++) {
        for (let index = 0; index <= 10; index++) {
            tabuada += indexT + " X " + index + " = " + (indexT * index) + "<br>";
        }
        tabuadas.push(tabuada);
        tabuada = ""
    }
    return tabuadas;
}
