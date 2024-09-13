enum EMes{
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março",
}

const pessoa: { nome: string; mesAniversario: string } = {
    nome: "Luiz",
    mesAniversario: EMes.MAR,
};

if (pessoa.mesAniversario === EMes.MAR) {
    console.log(pessoa);
}