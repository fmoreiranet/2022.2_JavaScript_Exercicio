class Produto {
    // nome = "";
    // descricao = "";
    // valor = 0;
    // quantidade = 0;
    // categoria = new Categoria();
    // fotos = [];

    // constructor(nome = "", descricao = "", valor = 0) {
    //     this.nome = nome;
    //     this.descricao = descricao;
    //     this.valor = valor;
    //     this.quantidade = 0;
    //     this.categoria = new Categoria();
    //     this.fotos = [];
    // };

    constructor() {
        this.nome = "";
        this.descricao = "";
        this.valor = 0;
        this.quantidade = 0;
        this.categoria = new Categoria();
        this.fotos = [];
    };

    add() {
        console.log(this);
    }

    list() {

    }

    validData() {

    }

};