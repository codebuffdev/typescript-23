function f1() {
    console.log("Hello");
}

let f2 = new Function("a", "b", "return a+b");

f1();
console.log(f2(10, 20));

//---

function Print() {
    console.log(`Print Function`);
}

class Demo {
    print() {
        console.log("Demo.print()");
        Print();
    }
}

let obj = new Demo();
obj.print();

//--

class Demo2 {
    f2() {
        console.log("hello");
        return 1;
    }
}

new Demo2().f2();

//---
function Hello(): void {
    console.log("Hello");
}

Hello();

//-- Anonymous function
let function2 = function () {
    console.log(`working`);
}
function2();

(function () {
    console.log(`Typescript`);
})();

//--
let param1: string = "a";
let param2: string = "b";
let operation: string = "return a + b ";
let function3 = new Function(param1, param2, operation);
console.log(function3("a", "b"));
console.log(function3(10, 20));

console.log(`${param1}`);
console.log(`${param2}`);

//--
let hello = uname => console.log(`Hello ! ${uname}`);
hello("ts");

let hello2 = () => console.log(`Welcome to LAMBDA`);
hello2();

let strArr: string[] = ["bhubaneswar", "hydrabad", "delhi"];
let filterArr = strArr.filter(str => {
    return (str.length) > 5
});

console.log(filterArr.toString())

// -- rest param
function f4(...num) {
    console.log(num.toString());
}

f4("html","css","ts","angular");