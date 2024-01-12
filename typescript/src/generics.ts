//generics <T> - deixa em aberto o tipo do retorno,
// que o dev pode declarar depois
function concatArray<T>(...itens: T[]):T[] {
  return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const stgArray = concatArray<string[]>(["felipe", "goku"], ["vegeta"]);

console.log(numArray);
console.log(stgArray);