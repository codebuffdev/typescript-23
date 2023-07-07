var product = {
    name: "TV",
    price: 53432.00,
    inStock: true,
    qty: 2,
    total: function () {
        return this.qty * this.price;
    },
    print: function () {
        console.log("\n            name = ".concat(this.name, "\n\n            price = ").concat(this.price, "\n\n            inStock = ").concat((this.inStock) ? "Available" : "Out of stuck", "\n\n            qty = ").concat(this.qty, "\n\n            total price = ").concat(this.total(), "\n        "));
    }
};
var product2 = {
    name: "",
    price: 0,
    inStock: true,
    qty: 0,
    total: function () {
        return this.qty * this.price;
    },
    print: function () {
        console.log("\n            name = ".concat(this.name, "\n\n            price = ").concat(this.price, "\n\n            inStock = ").concat((this.inStock) ? "Available" : "Out of stuck", "\n\n            qty = ").concat(this.qty, "\n\n            total price = ").concat(this.total(), "\n        "));
    }
};
product2.name = "Samsung Tv";
product2.price = 34000.00;
product2.qty = 2;
product2.inStock = false;
product2.print();
