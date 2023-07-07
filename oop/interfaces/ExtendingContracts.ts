interface IProduct {
    Name:string;
    Price:number;
}

interface ICategory extends IProduct {
    CategoryName:string;
}

let tv:ICategory = {
    Name:"TV",
    Price:45500.55,
    CategoryName:"Electronics"
};

//Multi Level Hierarchy
interface IModel {
    ModelName:string;
}
interface IMemory extends IModel {
    RAMSize:string;
}
interface ICamera extends IMemory {
    Mpx:string;
}
interface IMobile extends ICamera {
    Print():void;
}

let mob:IMobile = {
    ModelName: "Samsung",
    RAMSize: "8GB",
    Mpx:"20px",

    Print:function (){
        console.log(`Name=${this.ModelName}\nRAM=${this.RAMsize}\nCamera=${this.Mpx}`);
    }
}

mob.Print();

//Multiple Hierarchy
interface IModel {
    ModelName:string;
}
interface IMemory {
    RAMSize:string;
}
interface ICamera {
    Mpx:string;
}
interface IMobile extends IModel, IMemory, ICamera {
    Print():void;
}

let mob2:IMobile = {
    ModelName: "LG",
    RAMSize: "8GB",
    Mpx:"20px",
    Print:function (){
        console.log(`Name=${this.ModelName}\nRAM=${this.RAMsize}\nCamera=${this.Mpx}`);
    }
}

mob2.Print();

