/*
    Os Namespaces são uma forma específica do TypeScript para organizar código.
    Namespaces são simplismente objetos JAVASCRIPT nomeados no namespace global.
    Isso torna os namespaces uma construção muito simples de usar.
*/

export namespace Pessoa {
    export namespace Luiz {
        const data = 1 + 1;

        export let nome = "Luiz";
        export const calc = () => {
            return data;
        };
    }

    export namespace Maria {
        const data = 1 + 1;

        export let nome = "Maria";
        export const calc = () => {
            return data;
        };
    }
}

console.log(Pessoa.Luiz.nome)
console.log(Pessoa.Maria.nome)