//interfaces (type x interface)
//type = para tipar variaveis especificas, exemplo, 
// obejtos e constantes
type robot = {
  readonly id: number | string;
  name: string;
};

//interface geralmente usado ao trbalhar com classes, 
// mas da pra usar no lugar do type
interface robot2 {
  readonly id: number | string;
  name: string;
  sayHello():string;
}

const bot: robot = {
  id: "1",
  name: "megaman",
}

const bot2: robot2 = {
  id: 1,
  name: "megaman",
  sayHello: function (): string {
    return "Hello";
  }
}

// console.log(bot.name = "cutman");
// console.log(bot2.id = 2);
console.log(bot);
console.log(bot2);

class Pessoa implements robot2 {
  id: string | number;
  name: string;
  
  constructor(id: string | number, name: string) {
    this.id = id;
    this.name = name;
  }

  sayHello(): string {
    return `Hello, I'm ${this.name}`;
  }
}

const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());