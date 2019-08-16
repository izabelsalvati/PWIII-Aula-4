class Aluno {
    
    constructor(public nome:string) {}

    exibir(){
        console.log("nome:"+this.nome)
    }

}




let Salvati = new Aluno("Izabel Salvati")
Salvati.exibir()