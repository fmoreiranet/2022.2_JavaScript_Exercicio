!(function () {
    let contagem = contarAte();
    saidaTexto("Lista: " + contagem[0] + "<br>Somatório: " + contagem[1]);
})()

function contarAte() {
    let resp = "";
    let somaPares = 0;
    for (var y = 1; y <= 3; y++) {
        for (var i = 100; i <= 200; i++) {
            //mostrar de 100 a 200
            resp += y + "." + i + ", ";
            //separar os pares
            if (i % 2 == 0) {
                somaPares += i;
            }
        }
    }

    return [resp, somaPares];
}

function saidaTexto(texto) {
    document.getElementById("saidaResultado").innerHTML = texto;
}