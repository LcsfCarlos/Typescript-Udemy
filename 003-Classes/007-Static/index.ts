/*
    A palavra chave static define um método estático para classe.
    Métodos estáticos não  são chamados na intâncias da classe.
    Em vez disso, eles são chamados na propria classe.
    Geralmente, são funções utilitárias, como funçoes para criar ou clonar objetos.
*/

class Utils{
    static cloneObject(object: Array<{}>){
        return JSON.parse(JSON.stringify(Object.assign(object)));
    }
}

class Pessoa {
    public variasPessoas(){
        Utils.cloneObject([...,...,...])
    }
}

const tenis1: { tamanho: number, estoque: boolean } = {
    tamanho: 40,
    estoque: true
}

const tenis2: { tamanho: number, estoque: boolean } = {
    tamanho: 43,
    estoque: false
}

console.log(Utils.cloneObject([tenis1, tenis2]));