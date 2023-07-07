let product: object = {
  name: "TV",
  price: 53432.0,
  inStock: true,
  qty: 2,
  total: function () {
    return this.qty * this.price;
  },
  print: function () {
    console.log(`
            name = ${this.name}\n
            price = ${this.price}\n
            inStock = ${this.inStock ? "Available" : "Out of stuck"}\n
            qty = ${this.qty}\n
            total price = ${this.total()}
        `);
  },
};

//let product2:object = {
// taking any as object type is legacy, we should take is as object type only
let product2: any = {
  name: "",
  price: 0,
  inStock: true,
  qty: 0,
  total: function () {
    return this.qty * this.price;
  },
  print: function () {
    console.log(`
            name = ${this.name}\n
            price = ${this.price}\n
            inStock = ${this.inStock ? "Available" : "Out of stuck"}\n
            qty = ${this.qty}\n
            total price = ${this.total()}
        `);
  },
};

product2.name = "Samsung Tv";
product2.price = 34000.0;
product2.qty = 2;
product2.inStock = false;
product2.print();

const User = {
  name: "sp",
  email: "s2p.gmail.com",
  isActive: true,
};

function createUser2({ name: string, isPaid: boolean }) {}

createUser2({ name: "sp", isPaid: false });

function createCourse(): {} {
  return {};
}

function createCourse2(): { name: string; isPaid: boolean } {
  return { name: "ts", isPaid: false };
}

//readonly , optional object property
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  ccDetails?: number;
};

let myUser: User = {
  _id: "1234",
  name: "sp",
  email: "sp@gmail.com",
  isActive: false,
};

myUser.email = "sp.dev@gmail.com";
// myUser._id = "new id";
