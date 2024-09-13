var EMes;
(function (EMes) {
    EMes["JAN"] = "Janeiro";
    EMes["FEV"] = "Fevereiro";
    EMes["MAR"] = "Mar\u00E7o";
})(EMes || (EMes = {}));
var pessoa = {
    nome: "Luiz",
    mesAniversario: EMes.MAR,
};
if (pessoa.mesAniversario === EMes.MAR) {
    console.log(pessoa);
}
