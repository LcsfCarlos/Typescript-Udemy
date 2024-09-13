let array1: [string, string, number, boolean] = 
["Luiz Carlos",
    "Teste",
    123,
    false];

let array2: Array<string | number | boolean > = [
    true,
    "Luiz",
    123,
    "Carlos"
];


let obj1: { nome: string; sobrenome: string; idade: number; deuBom: boolean} =
 {  nome: "Luiz",
    sobrenome: "Carlos",
    idade: 30,
    deuBom: true,
};

let obj2: Array<{ nome: string; sobrenome: string; idade: number; deuBom: boolean}> = [
    {  nome: "Luiz",
        sobrenome: "Carlos",
        idade: 123,
        deuBom: true,
    },

    {  nome: "Luiz1",
        sobrenome: "Carlos",
        idade: 456,
        deuBom: false,
    },
    {  nome: "Luiz2",
        sobrenome: "Carlos",
        idade: 789,
        deuBom: false,
    },
];

console.log(array1);
console.log(array2);

console.log(obj1);
console.log(obj2);
