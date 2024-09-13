/* 
  Os names spaces são uma forma específica do Typescript para organizar código.
  Namespaces são simplesmente objetos JAVASCRIPT nomeados no namespace global.
  Isso torna os namespaces uma construção muito simples de usar.
*/

export namespace Pessoa1 {
    const data= 1 + 1;

    export let nome = "Luiz";
    export const calc = () => {
        return data;
    }
}
