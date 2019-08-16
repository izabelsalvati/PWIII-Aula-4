class Aluno {
    
    constructor(public nome:string) {}

    exibir(){

        console.log("nome:"+this.nome)
    }

}

export (Aluno as Alu, <outra classe>)
