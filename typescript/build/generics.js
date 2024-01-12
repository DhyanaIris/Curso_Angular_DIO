"use strict";
//generics <T> - deixa em aberto o tipo do retorno,
// que o dev pode declarar depois
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["felipe", "goku"], ["vegeta"]);
console.log(numArray);
console.log(stgArray);
