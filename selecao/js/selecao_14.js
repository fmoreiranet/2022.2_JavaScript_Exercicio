

function controllerGols() {
    var golsGremio = parseInt(document.getElementById("gol-gremio").value);
    var golsInter = parseInt(document.getElementById("gol-inter").value);

    var error = validaEntrada(golsGremio, golsInter);
    if (error != "") {
        //alert(error);
        saidaDados("Erros: " + error)
        return;
    }

    var resultdado = verfPlacar(golsGremio, golsInter);

    saidaDados("Resultado do jogo: " + resultdado);

}

function validaEntrada(golsGremio, golsInter) {
    var error = "";
    if (!golsGremio || typeof golsGremio != 'number') {
        error += "Verifique a quantidade de gols do Grêmio!\n";
        //error = error + "Verifique a quantidade de gols do Grêmio!\n"
    }

    if (!golsInter || typeof golsInter != 'number') {
        error += "Verifique a quantidade de gols do Inter!\n";
        //error = error + "Verifique a quantidade de gols do Inter!\n";
    }

    return error;
}

function verfPlacar(golsGremio = 0, golsInter = 0) {
    if (golsGremio > golsInter) {
        return "Gremio";
    } else if (golsInter > golsGremio) {
        return "Inter";
    } else {
        return "EMPATE";
    }
}

function saidaDados(texto) {
    document.getElementById("saidaTexto").innerHTML = texto;
}
