// Variaveis
// tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Felipe";
let idade: number = 30;
let altura: number = 1.9;

// tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// tipo abrangentes: any, void
let retorno: void;
function executaQuery(): void {}
let retornoView: any;

//objeto - sem previsibilidade
let produto: object = {
  nome: "felipe",
  cidade: "sp",
  idade: 30,
};

//objeto tipado - com previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: "Tenis",
  preco: 89.99,
  unidades: 5,
};

//arrays
let dados: string[] = ["felipe", "aguiar", "ana", "adriana"];
let dados2: Array<string> = ["felipe", "aguiar", "ana", "adriana"];

let infos: (string | number)[] = ["felipe", 30, "ana", 31];

//tuplas 
let boleto:[string, number, number] = ["agua conta", 199.90, 32342342];

//arrays metodos
dados.pop();

//datas
let aniversario:Date = new Date("2022-12-01 05:00")
console.log(aniversario.toString());