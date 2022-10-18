
(function () {
    var acertos = 0;
    var tentativas = 6;
    var letraDigitada = "";
    var palavra = sorteioPalavra();
    var letras = contarLetraPalavra(palavra);
    montarLetrasTela(letras);
})();

function sorteioPalavra() {
    var palavras = ["casa", "java", "números", "aluno", "constituição", "vai"]
    var index = Math.floor(Math.random() * palavras.length);
    return palavras[index];
}

function contarLetraPalavra(palavra = "") {
    var contLetras = palavra.length;
    return contLetras;
}

function verfTerminoJogo(quantLetrasPalavra = 0, tentativas = 0, acertos = 0) {
    if (acertos == quantLetrasPalavra) {
        return true;
    } else if (tentativas == 0) {
        return true;
    } else {
        return false;
    }
}

// Visual ----------------------------------------------

function entrarLetra(objeto) {
    var letra = objeto.value;
    objeto.value = "";
    letraDigitada = letra;
}

function montarLetrasTela(quantLetras = 0) {
    var letras = "";
    for (var i = 1; i <= quantLetras; i++) {
        letras += "<div> _ </div>";
    }
    document.getElementById("palavra_sorteada").innerHTML = letras;
}