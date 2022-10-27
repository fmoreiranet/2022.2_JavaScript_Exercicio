!(function () {
    controllerNumeros();
})()


function controllerNumeros() {
    //let listNumeros = ordenar(contarNumeros());
    let listNumeros = contarNumeros(100).sort();
    let multiplo = 16;
    let listMultiplos = contarMultiplos(listNumeros, multiplo);
    let listRepetidos = verifRepetidos(listNumeros);

    let template = "<div class='row'>";
    template += "<div class='col-12'>";
    template += "   <h3>Lista de Numeros </h3>";
    template += "   <p>" + listNumeros.join(", ") + "</p>";
    template += "</div>";

    template += "<div class='col-6'>";
    template += "    <h3>Lista de Multiplos de " + multiplo + " </h3>";
    template += "    <p>" + listMultiplos.join(", ") + "</p>";
    template += "</div>";

    template += "<div class='col-6'>";
    template += "    <h3>Lista de Repetidos </h3>";
    template += "    <p>" + listRepetidos.join(", ") + "</p>";
    template += "</div>";

    template += "</div>";

    saidaResultado(template);

    document.querySelectorAll("p").forEach(paragrafo => {
        paragrafo.addEventListener("click", event => {
            console.log(event);
        })
    })

    //let p = document.querySelectorAll("p");
    // for (var index = 0; index < p.length; index++) {
    //     p.addEventListener("click", function (event) {
    //         console.log(event);
    //     })
    // }
}

function saidaResultado(texto) {
    document.querySelector("#saidaResultado").innerHTML = texto;
}

function contarNumeros(quantidade = 0, sorteio = false, limiteSorteio = 1000) {
    let listNumeros = [];
    for (var index = 1; index <= quantidade; index++) {
        if (sorteio) {
            listNumeros.push(Math.floor(Math.random() * limiteSorteio));
        } else {
            listNumeros.push(index);
        }
    }
    return listNumeros;
}

function contarMultiplos(listNumeros = [], multiplo = 10) {
    let listMultiplos = [];
    for (var index = 0; index < listNumeros.length; index++) {
        if (listNumeros[index] % multiplo == 0) {
            listMultiplos.push(listNumeros[index]);
        }
    }
    return listMultiplos;
}

function verifRepetidos(listNumeros = []) {
    let listRepetidos = []
    for (var indexA = 0; indexA < listNumeros.length; indexA++) {
        for (var indexB = 0; indexB < listNumeros.length; indexB++) {
            if (indexA != indexB && listNumeros[indexA] == listNumeros[indexB]) {
                listRepetidos.push(listNumeros[indexA]);
            }
        }
    }
    return listRepetidos;
}

function ordenar(listNumeros = []) {
    let temp = 0;
    for (var indexA = 0; indexA < listNumeros.length; indexA++) {
        for (var indexB = 0; indexB < listNumeros.length; indexB++) {
            if (indexA != indexB && listNumeros[indexA] < listNumeros[indexB]) {
                temp = listNumeros[indexA];
                listNumeros[indexA] = listNumeros[indexB];
                listNumeros[indexB] = temp;
            }
        }
    }
    return listNumeros;
}


// //Código original ---------------------------------
// function controllerNumerosOriginal() {
//     let listNumeros = listaNumerosOriginal();
//     saidaResultado("Resultado: " + listNumeros);
// }

// function listaNumerosOriginal() {
//     let listNumeros = "";
//     for (let index = 1; index <= 100; index++) {
//         listNumeros += index + "";
//         if (index % 10 == 0) {
//             listNumeros += "Multiplo";
//         }
//         listNumeros += ", ";
//     }
//     return listNumeros;
// }
//
// function saidaResultado(texto) {
//     document.querySelector("#saidaResultado").innerHTML = texto;
// }
