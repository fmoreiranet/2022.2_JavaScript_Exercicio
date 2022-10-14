
// var global_valor1 = 0;
// document.getElementById("valor1").addEventListener("blur", function () {
//     global_valor1 = parseFloat(this.value);
// });

// var global_envio = document.getElementById("butao");
// global_envio.addEventListener("click", controllerNumeros);
document.getElementById("butao").addEventListener("click", controllerNumeros);

function controllerNumeros() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var numero_maior = verificarNumeroMaior(valor1, valor2);
    //saidaDados("<p> O maior valor é " + numero_maior + "</p>")

    var envio = 2;

    if (numero_maior == null) {
        saidaDados("Numeros iguais!!!");
    } else {
        saidaDados("<p> O maior valor é " + numero_maior + "</p>")
    };
}

function verificarNumeroMaior(numero1, numero2) {
    if (numero1 == numero2) {
        return null;
    } else if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

function saidaDados(texto) {
    document.getElementById("saidaTexto").innerHTML = texto
}
