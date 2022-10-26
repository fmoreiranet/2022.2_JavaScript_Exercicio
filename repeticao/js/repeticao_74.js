!(function () {
    controllerNumeros();
})()


function controllerNumeros() {
    //let listNumeros = ordenar(contarNumeros());
    let listNumeros = contarNumeros().sort();
    let listMultiplos = contarMultiplos(listNumeros);
    let listRepetidos = verifRepetidos(listNumeros);

    let template = "<div class='row'>";
    template += "<div class='col-12'>";
    template += "   <h3>Lista de Numeros </h3>";
    template += "   <p>" + listNumeros.join(", ") + "</p>";
    template += "</div>";

    template += "<div class='col-6'>";
    template += "   <h3>Lista de Multiplos </h3>";
    template += "    <p>" + listMultiplos.join(", ") + "</p>";
    template += "</div>";

    template += "<div class='col-6'>";
    template += "   <h3>Lista de Repetidos </h3>";
    template += "    <p>" + listRepetidos.join(", ") + "</p>";
    template += "</div>";

    template += "</div>";

    saidaResultado(template);

    document.querySelectorAll("p").forEach(paragrafo => {
        paragrafo.addEventListener("click", function (event) {
            console.log(event);
        })
    })

    let p = document.querySelectorAll("p");
    // for (var index = 0; index < p.length; index++) {
    //     p.addEventListener("click", function (event) {
    //         console.log(event);
    //     })
    // }

}

function saidaResultado(texto) {
    document.querySelector("#saidaResultado").innerHTML = texto;
}

function contarNumeros() {
    let listNumeros = [];
    for (var index = 1; index <= 100; index++) {
        //listNumeros.push(index);
        listNumeros.push(Math.floor(Math.random() * 1000));
    }
    return listNumeros;
}

function contarMultiplos(listNumeros = []) {
    let listMultiplos = [];
    for (var index = 0; index < listNumeros.length; index++) {
        if (listNumeros[index] % 10 == 0) {
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
    return listRepetidos
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

