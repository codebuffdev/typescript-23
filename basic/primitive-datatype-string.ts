let msg1: string = "<a href='home.html'>Home</a>";
let msg2: string = '<a href="home.html">Home</a>';

let username: string = 'John';
let age: number = 20;

console.log(
    'Hello !' +
        ' ' +
        username +
        ' ' +
        'You will be' +
        ' ' +
        (age + 1) +
        ' ' +
        'Next Year'
); //without backtick stupid code

console.log(`Hello ! ${username} You will be ${age + 1} Next Year`); //with backtick ``
