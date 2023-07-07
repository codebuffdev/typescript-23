//declaration
var x;
// assignment
x = 10;

//initialization
var y = 20;

//var -> block scope
function f1(){
    if (true) {
        var xx = 20; //initialization
    }
    console.log(`XX = ${xx}`);
}
f1();

// var shadowing
function f2(){
    if (true) {
        var xx = 20; //initialization
        var xx = 30; //initialization
    }
    console.log(`XX = ${xx}`);
}
f2();

//var hoisting
function f3() {
    x = 10;
    console.log(`x=${x}`);
    var x;		// x is hoisted, 1st i used it then i declared it
}
f3();

// let - block scope
function f4(){
    if(true){
        let yy: number = 20;
    }
    //console.log(`${yy}`);
}
f4();

// const
const pi = 3.14;

