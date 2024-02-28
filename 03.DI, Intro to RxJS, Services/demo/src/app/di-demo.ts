class Wallet {
    balance = 0;
    constructor(balance: number) {
        this.balance = balance;
    }
}
class Car {
    model: string;
    color: string;

    constructor(model: string, color: string) {
        this.model = model;
        this.color = color;
    }
}
//Лош пример е да се използва в констр. "new Wallet"
// Bad way
class Person {
    wallet: Wallet;
    car: Car;
    constructor(balance: number, model: string, color: string) {
        this.wallet = new Wallet(balance);
        this.car = new Car(model, color);
    }
}

const pesho = new Person(2110, "VW", "red");
const ivan = new Person(3200, "BMW", "Black");

console.log("Pesho's balance: ", pesho.wallet.balance);
console.log("Pesho's car: ", pesho.car.color, pesho.car.model);
console.log("Ivan's balance: ", ivan.wallet.balance);
console.log("Ivan's car: ", ivan.car.model);

//Better way
class PersonOptimized {
    wallet: Wallet;
    car: Car;
    constructor(wallet: Wallet, car: Car) {
        this.car = car;
        this.wallet = wallet;
    }
}
const mariaWallet = new Wallet(10000);
const mariaCar = new Car("Toyota", "gray");
const maria = new PersonOptimized(mariaWallet, mariaCar);

console.log(maria);
