/*
    public -       Pode ser acessado tanto pela mesma classe,
                   classes filhas e outras classes.
    ########################################################
    protected:     Pode ser acessado pela mesma classe e classes  filhas
                   não pode ser acessado por outras classes.
    private -      Pode ser acessada somente pela própria classe.
*/

class Pessoa {
    protected nome: string = "";
    protected idade : number = 0;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string){
        return `O ${this.nome} comeu ${comida}`
    }

    public fezAniversario(){
        return `O ${this.nome} fez tantos anos ${++this.idade}`
    }
}

class Luiz extends Pessoa {
    private profissao: string = "Programador"

    constructor(){
        super("Luiz", 30);
    }

    public getprofissao(){
        return `${this.nome} trabalha como ${this.profissao}`;
    }
}
//class Maria extends Pessoa {
//    constructor(){
//        super("Maria", 22);
//    }
//}


const luiz = new Luiz();
console.log(luiz.getprofissao());

//const maria = new Maria();


//console.log(luiz.nome);
//console.log(luiz.idade);
//console.log(luiz.comer("Feijoada"));
//console.log(luiz.fezAniversario());

//console.log(maria.nome);
//console.log(maria.idade);
//console.log(maria.comer("Feijoada"));
//console.log(maria.fezAniversario());