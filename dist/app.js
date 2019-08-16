var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
    }
    Aluno.prototype.exibir = function () {
        console.log("nome:" + this.nome);
    };
    return Aluno;
}());
var Salvati = new Aluno("Izabel Salvati");
Salvati.exibir();
