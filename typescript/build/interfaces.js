"use strict";
const bot = {
    id: "1",
    name: "megaman",
};
const bot2 = {
    id: 1,
    name: "megaman",
    sayHello: function () {
        return "Hello";
    }
};
// console.log(bot.name = "cutman");
// console.log(bot2.id = 2);
console.log(bot);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello, I'm ${this.name}`;
    }
}
const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
