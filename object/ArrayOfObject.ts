let data: any = [
    {Name: "TV", Price: 232320.11},
    {Name: "Mobile", Price: 432320}
];

console.log(`Item = ${data[1].Name}`);
console.log(`Price = ${data[1].Price}`);

for (let datum of data) {
    console.log(`${datum.Name} - ${datum.Price}`)
}

let items: any = [
    {name: "TV", price: 232320.11, category: "electronics"},
    {name: "Mobile", price: 432320, category: "electronics"},
    {name: "Shirt", price: 4323, category: "Fashion"},
    {name: "Flip Flop", price: 320, category: "Footwear"}
];

// filter with electronics category
items.filter(
    function (obj) {
        if (obj.category == "electronics") {
            console.log(obj)
        }
    }
);

//Simplify the above code
let electronicsItems: any = items.filter(
    function (obj) {
        return obj.category == "electronics";
    }
);

for (const electronicsItem of electronicsItems) {
    console.log(`
        Item Name - ${electronicsItem.name}\n
        Item Price - ${electronicsItem.price}
    `);
}

// filter with Fashion or Footwear
let wearItem:any = items.filter(function (object){return object.category=="Fashion" || object.category=="Footwear"});
for (const wearItemElement of wearItem) {
    console.log(`Item - ${wearItemElement.name} & Price - ${wearItemElement.price}`)
}

let packages:any[] = [
    {Name: "TV", Price: 30000.44, Category: "Electronics", ShippedTo: ["Delhi","Hyd"]},
    {Name: "Shirt", Price:3100.33, Category: "Fashion", ShippedTo: ["Hyd","Mumbai","BBsr"]},
    {Name: "Mobile", Price:12000.33, Category: "Electronics", ShippedTo:["Chennai","Hyd"]},
    {Name: "Nike Casuals", Price: 5000.55, Category: "Footwear", ShippedTo: ["Hyd","Mumbai"]}
];
let searchResults:any[] = packages.filter(obj=>obj.Category=="Electronics");

for(let obj of searchResults) {
    console.log(`${obj.Name} - ${obj.Price} - ${obj.ShippedTo.toString()}`);
}

// Array inside an Array
let data3:any[] = [
    [{Name:"TV", Price:30045.55}],
    [{Name:"Shirt", Price:5600.55}]
];

console.log(data3[1][0].Name);
console.log(data3[1][0].Price);

//Union of array (should be String type or one should be Numbered type)
let srtNumArr:string[]|number[] = [];
srtNumArr = ["A", "B", "C"];
console.log(srtNumArr[0]);

srtNumArr = [10, 20, 30];
console.log(srtNumArr[1]);
