// declare a number
const a: number = 1;
console.log(a * 2);

// declare text
let text: string = "Hello!";
console.log(text);

// Declare a boolean
let hasCat = true;
console.log(hasCat);

//Declare a arrays
let numArr: number[] = [1, 2, 3, 4];
//or
let stringArr: Array<string> = ["a", "b", "c"];
console.log(numArr);
console.log(stringArr);

stringArr.forEach((num) => {
    console.log(num);
});

// ***** DON'T USE THIS (any) ******
let x: any = 1;
x = "test";
x = { name: "Pesho" };
// *********************************
// ***** DON'T USE THIS (unknown) ******
let y: unknown = 1;
y = "test";
y = { name: "Pesho" };
// *************************************

// Objects & classes

type Person = {
    name: string;
    age: number;
};
let person: Person = { name: "Pesho", age: 24 };

type Cat = {
    name: string;
    furcolor: string;
};
type Dog = {
    dogName: string;
    breed: string;
};
const obj: Cat | Dog = { dogName: "Max", breed: "Pudel" };

interface Human {
    greeting: string;
    greet: () => void;
}

class Person1 {
    // private не може друг да го използва този greeting
    private greeting: string = "Hello!";
    age: number = 14;

    // void не връща нищо
    public greet(): void {
        console.log(this.greeting);
    }
    getAge(): number {
        return this.age;
    }
}

const p = new Person1();
p.greet();
const age = p.getAge();
console.log(age);

// ***GENERIC

type Dog1<T> = {
    id: T;
    name: string;
};
const dog1: Dog1<number> = { id: 1, name: "Roshko" };
const dog2: Dog1<string> = { id: "ABCD", name: "Pat" };

// ***  ENUMERIC
enum PaymentStatus {
    Successfull,
    Failed,
    Pending,
}
console.log(PaymentStatus.Failed);
