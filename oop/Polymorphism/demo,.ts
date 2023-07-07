class Employee {
    public FirstName:string;
    public LastName:string;
    public Designation:string;
    public Print(){
        console.log(`${this.FirstName} ${this.LastName} - ${this.Designation}`);
    }
}

class Developer extends Employee {
    public Print(){
        super["FirstName"] = "Raj";
        super["LastName"] = "Kumar";
        super["Designation"] = "Developer";
        super.Print();
    }
}

class Admin extends Employee {
    public Print(){
        super["FirstName"] = "Kiran";
        super["LastName"] = "Kumar";
        super["Designation"] = "Admin";
        super.Print();
    }
}

class Manager extends Employee {
    public Print(){
        super["FirstName"] = "Tom";
        super["LastName"] = "Hanks";
        super["Designation"] = "Manager";
        super.Print();
    }
}

let employees:Employee[] = [new Developer(), new Admin(), new Manager()];

for(var emp of employees) {
    emp.Print();
}

/*
- Create a method that can handle various functionalities
- single method that can accept [parameter less, parameterized]
- Method() { print message }
- Method(a,b) { addition of a and b }
- Create single method that can handle operations
- Method(10,20, add);
- Method(2,4, mul);
*/



class Base{
    display(a?,b?){
        console.log("base.display")
    }
}
class PM extends Base{
    display(a,b): void {
        console.log(`${a+b}`);
    }
}

let baseObj:Base = new PM();
baseObj.display(10,20);

baseObj = new Base();
baseObj.display();