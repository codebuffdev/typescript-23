let word: string = 'colouuur';
// let regExp: any = /colou?r/; // ? - min:0 max:1
//let regExp: any = /colou+r/; // + - min:1 max:any

let regExp: any = /colou*r/; // + - min:0 max:any

if (word.match(regExp)) {
    console.log(`${word} valid`);
} else {
    console.log(`${word} misspelled`);
}

let regex:any = /[A-Z]{4,10}/;
let username:string = "JOHN";
if(username.match(regex)){
    console.log("Hello " + username);
}else {
    console.log("Name 4 to 10 Uppercase only !");
}
