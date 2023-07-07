interface IProduct {
    Name:string;
    Price:number;
    InStock:boolean;
}

function GetData<T>(obj:T) {
    if(obj instanceof Array){
        for(const item of obj) {
            console.log(item);
        }
    } else {
        for(const property in obj){
            console.log(`${property} : ${obj[property]}`);
        }
    }
}
let product:IProduct = {
    Name: 'Nike Casuals',
    Price: 3400.44,
    InStock: true
};

let products:IProduct[] = [
    {Name: "TV", Price: 45000.55, InStock:true},
    {Name: "Mobile", Price: 12000.33, InStock:false}
];

GetData(product);
GetData(products);