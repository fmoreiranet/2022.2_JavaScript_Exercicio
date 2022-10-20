//Solução 1 ------------------------------------
function controllerCalculo() {
    var valor1 = parseInt(document.getElementById("valor-1").value);
    var valor2 = parseInt(document.getElementById("valor-2").value);
    var operacao = parseInt(document.getElementById("operacao").value);

    var resultado = calculo(valor1, valor2, operacao);

    saidaDados("Resultado: " + resultado);
}

function saidaDados(texto) {
    document.getElementById("saidaTexto").innerHTML = texto;
}

function calculo(valor1 = 0, valor2 = 0, operacao = 0) {
    if (operacao == 1) {
        return valor1 + valor2;
    } else if (operacao == 2) {
        return valor1 - valor2;
    } else if (operacao == 3) {
        return valor1 / valor2;
    } else if (operacao == 4) {
        return valor1 * valor2;
    }
    return null;
}

//Solução 2 ---------------------------------
var valor1 = 0;
var valor2 = 0;

(function () {
    document
        .getElementById("valor-1")
        .addEventListener("change", function () {
            valor1 = parseInt(this.value);
        });

    document
        .getElementById("valor-2")
        .addEventListener("change", function () {
            valor2 = parseInt(this.value);
        });
})();

function adicao() {
    let resultado = valor1 + valor2;
    montarObjeto(valor1, valor2, 1, resultado);
    saidaDados("Resultado2: " + resultado);
}

function subtracao() {
    let resultado = valor1 - valor2;
    montarObjeto(valor1, valor2, 2, resultado)
    saidaDados("Resultado2: " + resultado);
}

function divisao() {
    let resultado = valor1 / valor2;
    montarObjeto(valor1, valor2, 3, resultado)
    saidaDados("Resultado2: " + resultado);
}

function multiplicao() {
    let resultado = valor1 * valor2
    montarObjeto(valor1, valor2, 4, resultado)
    saidaDados("Resultado2: " + resultado);
}

//--------------------------
function montarObjeto(numero1, numero2, opc, result) {
    let obj = {
        valor1: numero1,
        valor2: numero2,
        operacao: opc,
        resultado: result
    }
    salvarDados(obj);
    recuperarDados();
    return obj
}

function salvarDados(obj) {
    let storage = JSON.parse(localStorage.getItem("calculo"))
    if (storage == null) {
        storage = []
    }
    storage.push(obj);

    localStorage.setItem("calculo", JSON.stringify(storage));
}

function recuperarDados() {
    let storage = JSON.parse(localStorage.getItem("calculo"));
    if (storage != null) {
        let texto = "";
        for (var i = 0; i < storage.length; i++) {
            texto += storage[i].valor1 + " - " + storage[i].valor2 + " - " + storage[i].operacao + " - " + storage[i].resultado + "<br>";
        }
        document.getElementById("dados_banco").innerHTML = texto;
    }
}