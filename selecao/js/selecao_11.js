

function controllerAcesso() {
    var senha = document.getElementById("senha").value;

    var restornoValidacao = validaAcesso(senha);

    if (restornoValidacao) {
        window.location.href = "http://google.com.br";
    }
    else {
        saidaTexto("Senha invalida!");
    }
}

function validaAcesso(senha = "") {
    var global_senhaValida = "²¹ //vem do banco de dados
    if (senha == global_senhaValida) {
        return true;//"ACESSO PERMITIDO";
    } else {
        return false; //"ACESSO NEGADO";
    }
}

function saidaTexto(texto) {
    document.getElementById("saidaTexto").innerHTML = texto;
}