/* 
  Os names spaces são uma forma específica do Typescript para organizar código.
  Namespaces são simplesmente objetos JAVASCRIPT nomeados no namespace global.
  Isso torna os namespaces uma construção muito simples de usar.
*/

import { Pessoa1, Pessoa } from "./module";

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());

console.log(Pessoa.Luiz.nome);
console.log(Pessoa.Maria.nome);