// Declaring Array
let nameArray: string[];

//Tuple
let tupleArray: any[];

let values: string[] = [];
values[0] = "A";
values[1] = "B";
console.log(` ${values[0]}\n${values[1]}`);

for (const property in values) {
  console.log(`${property} [${typeof property}] : ${values[property]}`);
}

let strValues: any = new Array("A", "10");

// difference between [] and Array()?
let fruitsNames: string[] = [];
fruitsNames[0] = "apple";
fruitsNames[1] = "orange";
fruitsNames[2] = "banana";
console.log(fruitsNames);
console.log(fruitsNames[0], fruitsNames[1], fruitsNames[2]);

let anyNames: any[] = [];
anyNames[0] = "apple";
anyNames[1] = 12;
anyNames[2] = true;
console.log(anyNames);
console.log(anyNames[0]);

let pin: number[] = new Array(123232, 11212);
// let text:any[] = new Array("aaa",2121,"121212")
// console.log(text)

//--

const superHeros: string[] = [];
superHeros.push("spiderman");

const heroPower: Array<number> = [];

type Address = {
  street: string;
  lane: number;
};

const whatEver: Array<Address> = [];

