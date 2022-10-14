
var global_senhaValida = "1234";

function controllerAcesso() {
    var senha = document.getElementById("senha").value;

    var restornoValidacao = validaAcesso(senha);

    saidaTexto(restornoValidacao);
}

function validaAcesso(senha = "") {
    if (senha == global_senhaValida) {
        return "ACESSO PERMITIDO";
    } else {
        return "ACESSO NEGADO";
    }
}

function saidaTexto(texto) {
    document.getElementById("saidaTexto").innerHTML = texto;
}