//chatAt(index)
let message: string = 'Hello Typescript';
console.log(message.charAt(0));

//charCodeAt(index);
console.log(message.charCodeAt(0));

// check name is valid or not, must starts with an uppercase character.
let userName: string = 'Sp';
let firstCharCode: number = userName.charCodeAt(0);
if (firstCharCode >= 65 && firstCharCode <= 90) {
    console.log(`Hello !! ${userName}`);
} else {
    console.log(`Error: name start with an uppercase`);
}

//startswith()
let funcName: string = 'btnSubmit';
console.log(funcName.startsWith('btn')); // true

let clsName: string = 'bg-primary';
if (clsName.startsWith('form')) {
    console.log(`You Defined a Form Class`);
} else if (clsName.startsWith('btn')) {
    console.log(`You Defined a Button Class`);
} else {
    console.log(`You are using Miscellaneous class ${clsName}`);
}

// endsWith()
let className: string = 'text-primary';
if (className.endsWith('center')) {
    console.log(`You Defined an Alignment Class`);
} else if (className.endsWith('primary')) {
    console.log(`You Defined Contextual Class`);
} else if (className.endsWith('y')) {
    console.log(`You Defined Contextual Class`);
} else {
    console.log(`You are using Miscellaneous class ${className}`);
}

//indexOf
let email: string = 'john@gmail.com';
if (email.indexOf('@') == -1) {
    console.error(`Error: Invalid email @ Missing]`);
} else {
    console.log(`Your email ${email} Verified`);
}

//includes("str")
let msg: string = 'Welcome to JavaScript String Methods';
if (msg.includes('TypeScript')) {
    console.log(`You are using TypeScript`);
} else if (msg.includes('JavaScript')) {
    console.log(`You are using JavaScript`);
}

//search("str")
let msg1: string = 'Welcome to JavaScript String Methods.';
console.log(msg1.search('TypeScript'));

//match()
let mobile: string = '+919876543210';
let regExp: any = /\+91[0-9]{10}/; //no specific datatype for regular exp
if (mobile.match(regExp)) {
    console.log(`Your Mobile ${mobile} Verified`);
} else {
    console.log(`Invalid Mobile:+91 with 10 digits`);
}

//split("delimiter")
let msg2: string = 'SamsungTV,45000.55,InStock';
let data: string[] = msg2.split(',');
for (var value of data) {
    console.log(value);
}
console.log(`Name=${data[0]}`);

//trim(String)
let password: string = ' john ';
if (password.trim() == 'john') {
    console.log('Verified..');
} else {
    console.log('Invalid Password');
}
