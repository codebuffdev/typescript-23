let products: string[] = ['mobile', 'laptop', 'tablet'];

console.log(products);
console.log(`toString : ${products.toString()}`);

console.log(`join : ${products.join('-')}`);

//slice to 0 to 2(exclude) index
console.log(`slice : ${products.slice(0, 2)}`);

let sales:number[] = [2000, 5000, 12000, 56000, 2100];
// @ts-ignore
console.log(sales.find(function(sale){return sale>=10000}).toString());
console.log(sales.filter(function(sale){return sale>=10000}).toString());

//pop
console.log(sales.pop());
//shift
console.log(sales.shift());

//splice(startIndex,deleteCount)
let numbers:number[] = sales.splice(1,1);
console.log(numbers.toString());

let values:string[] = ["A","D","C","B"];
console.log(values.sort().toString());
console.log(values.reverse().toString());

//Array Destruction
let bricsCountries:string[] = ["India","China","Brazil","Russia","South Africa"];
let [ind,ch, br,ru,sa] = bricsCountries;
console.log(`${ind}, ${ch},${ru},${sa},${br} `);

let factory:any[] = [function (a,b){return a+b;}, function (a,b){return a*b;}];
let [add,mul] = factory;
console.log(add(10,20));
console.log(mul(10,20));

