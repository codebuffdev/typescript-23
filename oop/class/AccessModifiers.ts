class SuperClass {
  public Name: string;
  private Price: number;
  protected Quantity: number;
}

class DerivedClass extends SuperClass {
  Print(obj1: SuperClass, obj2: DerivedClass): void {
    console.log(obj1.Name); // super class public member
    console.log(obj2.Name); // super class public member
    console.log(obj2.Quantity); //supper class protected,  can be accessed outside the derived class
  }
}

let object1 = new DerivedClass();
console.log(object1.Name); // public
//object1.Price; // invalid - private
//object1.Quantity; // invalid - protected , can't access outside the derived class

//Accessor
class Product {
  private _productName: string;

  get productName(): string {
    return this._productName;
  }

  set productName(prodName: string) {
    this._productName = prodName;
  }
}

let product1: Product = new Product();
product1.productName = "Mobile";
console.log(product1.productName);
