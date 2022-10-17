

function controllerGols() {
    var golsGremio = parseInt(document.getElementById("gol-gremio").value);
    var golsInter = parseInt(document.getElementById("gol-inter").value);

    var error = validaEntrada(golsGremio, golsInter);
    if (error != "") {
        alert(error);
        return;
    }

}

function validaEntrada(golsGremio, golsInter) {
    var error = "";
    if (!golsGremio || typeof golsGremio != 'number') {
        error += "Verifique a quantidade de gols do Grêmio!\n";
    }

    if (!golsInter || typeof golsInter != 'number') {
        error += "Verifique a quantidade de gols do Inter!\n";
    }

    return error;
}