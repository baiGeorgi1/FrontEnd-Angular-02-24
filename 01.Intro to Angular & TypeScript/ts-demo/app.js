// declare a number
var a = 1;
console.log(a * 2);
// declare text
var text = "Hello!";
console.log(text);
// Declare a boolean
var hasCat = true;
console.log(hasCat);
//Declare a arrays
var numArr = [1, 2, 3, 4];
//or
var stringArr = ["a", "b", "c"];
console.log(numArr);
console.log(stringArr);
stringArr.forEach(function (num) {
    console.log(num);
});
// ***** DON'T USE THIS (any) ******
var x = 1;
x = "test";
x = { name: "Pesho" };
// *********************************
// ***** DON'T USE THIS (unknown) ******
var y = 1;
y = "test";
y = { name: "Pesho" };
var person = { name: "Pesho", age: 24 };
var obj = { dogName: "Max", breed: "Pudel" };
var Person1 = /** @class */ (function () {
    function Person1() {
        // private не може друг да го използва този greeting
        this.greeting = "Hello!";
        this.age = 14;
    }
    // void не връща нищо
    Person1.prototype.greet = function () {
        console.log(this.greeting);
    };
    Person1.prototype.getAge = function () {
        return this.age;
    };
    return Person1;
}());
var p = new Person1();
p.greet();
var age = p.getAge();
console.log(age);
