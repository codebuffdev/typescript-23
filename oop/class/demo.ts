// Class Declaration
class ClassName {
  // members
}
let cn: ClassName = new ClassName();

// Class Expression
let emp = class {
  // member
};

//static & non-static
class Demo {
  static s = 0;
  n = 0;
  constructor() {
    Demo.s = Demo.s + 1;
    this.n = this.n + 1;
  }
  Print() {
    console.log(`s=${Demo.s}, n=${this.n}`);
  }
}

let obj1 = new Demo();
obj1.Print();
let obj2 = new Demo();
obj2.Print();
let obj3 = new Demo();
obj3.Print();

//constructor
class Database {
  constructor() {}
  public connect() {
    console.log("connection established");
  }
  public insert() {
    console.log("record inserted");
  }
}

let oracle = new Database();
oracle.insert();
