function sum(a:any,b:any):number{
    return a+b;
}
function concat(a:any,b:any):any{
    return `Firstname ${a} + LastName ${b}`;
}
function printValue<T>(a:T, b:T):any{
    if ((typeof a) == "number" && (typeof b) == "number"){
        console.log(sum(a,b));
    }else {
        console.log(concat(a,b));
    }
}

printValue<number>(10,20);
printValue<string>("10","even");

//-- Userdefined types
interface IProduct {
    Name:string;
    Price:number;
    InStock:boolean;
}

interface IEmployee {
    Name: string;
    Designation:string;
}

function GetData<T>(obj:T) {
    for(const property in obj) {
        console.log(`${property} : ${obj[property]}`);
    }
}

GetData<IProduct>({Name: 'TV', Price: 34000.44, InStock: true});
GetData<IEmployee>({Name: 'John', Designation: 'Manager'});










