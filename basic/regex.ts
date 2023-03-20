let word: string = 'colouuur';
// let regExp: any = /colou?r/; // ? - min:0 max:1
//let regExp: any = /colou+r/; // + - min:1 max:any

let regExp: any = /colou*r/; // + - min:0 max:any

if (word.match(regExp)) {
    console.log(`${word} valid`);
} else {
    console.log(`${word} misspelled`);
}

