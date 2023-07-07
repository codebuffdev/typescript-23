class Demo<T> {
    public value: T;
    //type declaration
    add: (x: T, y: T) => T;
}

let obj = new Demo<number>();
// obj.value = "A";
obj.value = 10;
obj.add = function (a,b){return a+b};
console.log(obj.add(10,20));

