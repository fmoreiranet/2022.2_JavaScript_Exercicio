var aluno = {
    nota1: 0,
    nota2: 0,
    nota3: 0,
    nota4: 0,
    media: 0,
    resultado: 0
}

// !(function () {
// })()

function controllerNotas() {
    aluno.nota1 = parseFloat(document.getElementById("nota-1").value);
    aluno.nota2 = parseFloat(document.getElementById("nota-2").value);
    aluno.nota3 = parseFloat(document.getElementById("nota-3").value);
    aluno.nota4 = parseFloat(document.getElementById("nota-4").value);
    aluno.media = calculoMedia(aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4);
    aluno.resultado = verificarSituacaoAluno(aluno.media);
    mostrarResultado(aluno.resultado, aluno.media);
    addDadosAluno(aluno);
}

function calculoMedia(avaliacao1 = 0, avaliacao2 = 0, avaliacao3 = 0, avaliacao4 = 0) {
    return (avaliacao1 + avaliacao2 + avaliacao3 + avaliacao4) / 4
}

function verificarSituacaoAluno(media = 0) {
    if (media >= 5) {  //ULA -> unidade logica aritmética  
        return true;
    }
    return false;
}

function mostrarResultado(resultado = false, media = 0) {
    if (resultado) {
        document.querySelector("#saidaResultado").innerHTML = "Aprovado -> media: " + media.toFixed(2);
    } else {
        document.querySelector("#saidaResultado").innerHTML = "Reprovado -> media: " + media.toFixed(2);
    }
}

function addDadosAluno(obj = {}) {
    let jsonObj = JSON.stringify(obj);
    localStorage.setItem("alunos", jsonObj);
}

