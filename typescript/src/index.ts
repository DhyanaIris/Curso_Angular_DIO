type heroi = {
  name: string;
  vulgo: string;
}

function printaObjeto(pessoa: heroi) {
  console.log(pessoa);
}

printaObjeto({
  name: "Diana Prince",
  vulgo: "Mulher Maravilha",
});