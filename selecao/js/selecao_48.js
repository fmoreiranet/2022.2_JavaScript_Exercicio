function controllerNumero() {
    let numero = parseInt(document.querySelector("#numero").value);
    let resultado = numeroParImpar(numero);
    saidaDados("Resultado:" + resultado);

    let valor = {
        numerDigitado: numero,
        resultadoEncontrado: resultado
    }

    salvarResultdado(valor);
}

function numeroParImpar(numero = 0) {
    //Modulo
    // 5 / 2 = 2.5 => float
    // 5 / 2 = 2 com resto 1 => int
    // 6 / 2 = 3 com resto 0
    // 7 / 2  = 3 com resto 1
    if (numero % 2 == 0) {
        return "PAR"
    }
    return "IMPAR"
}

function saidaDados(texto_saida) {
    document.getElementById("saidaTexto").innerHTML = texto_saida;
}

//function salvarResultdado(numero, resultado)
function salvarResultdado(obj) {

    localStorage.setItem("numero", obj.numerDigitado);
    localStorage.setItem("resultado", obj.resultadoEncontrado);

    //pegar os dados do local storage e converte para objeto
    let dadosValores = JSON.parse(localStorage.getItem("valores"));
    //verificar se não tem dados
    if (!dadosValores) {
        //criar um vetor(BR) (array)
        dadosValores = [];
    }
    //adicionar o obj a lista que foi resgatada do local storage
    dadosValores.push(obj);

    let json = JSON.stringify(dadosValores);

    localStorage.setItem("valores", json);
}

function listaResultado() {
    let dadosNumero = parseFloat(localStorage.getItem("numero"));
    let dadosResultado = localStorage.getItem("resultado");
    let dadosValores = localStorage.getItem("valores");
    let x = dadosNumero.toString();
}

function carregarValores() {
    listaResultado();
}