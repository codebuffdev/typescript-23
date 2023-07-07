// contracts
// readonly property
// optional property
interface IProduct {
    readonly name: string;
    price: number;
    inStock?: boolean; //optional property
    qty:number;
    total():number;
    print():void;
}

let product:IProduct = {
    //inStock: false,
    name: "Samsung TV",
    price: 4509.0,
    qty: 20,
    total(): number {
        return this.price;
    },
    print(): void {
        console.log(`${this.name}, ${this.price}, ${this.qty}, Total = ${this.total()}`);
    }
}
product.print();
product.qty=29;
// product.name="Lg TV"; // readonly property
product.print();