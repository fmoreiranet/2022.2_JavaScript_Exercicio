
(function () {
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

// ----------------------------------------------

function montarLetrasTela(quantLetras = 0) {
    var letras = "";
    for (var i = 1; i <= quantLetras; i++) {
        letras += "<div> _ <div>";
    }
    document.getElementById("palavra_sorteada").innerHTML = letras;
}