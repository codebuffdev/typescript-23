let product = new Map();
product.set(1,"TV");
product.set(2,"Mob");

let product2 = new Map()
    .set(1,"TV")
    .set(2,"Mob");

let product3 = new Map([
    [1,"TV"],
    [2,"Mob"]
]);

console.log(product.get(1));
