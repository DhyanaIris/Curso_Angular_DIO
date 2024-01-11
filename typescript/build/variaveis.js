"use strict";
// Variaveis
// tipos primitivos: boolean, number, string
let ligado = false;
let nome = "Felipe";
let idade = 30;
let altura = 1.9;
// tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
// tipo abrangentes: any, void
let retorno;
function executaQuery() { }
let retornoView;
//objeto - sem previsibilidade
let produto = {
    nome: "felipe",
    cidade: "sp",
    idade: 30,
};
let meuProduto = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5,
};
//arrays
let dados = ["felipe", "aguiar", "ana", "adriana"];
let dados2 = ["felipe", "aguiar", "ana", "adriana"];
let infos = ["felipe", 30, "ana", 31];
//tuplas 
let boleto = ["agua conta", 199.90, 32342342];
//arrays metodos
dados.pop();
//datas
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
