function addTwo(num: number) {
  return num + 2;
}

addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("ts");

function singUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {}

singUpUser("name", "email", "pwd", false);

let signUp = (name: string, email: string, isPaid: boolean = false) => {};

signUp("sp", "s@p");

//return type
function addFive(num: number): number {
  return num + 5;
  //   return "done";
}

const getHello = (s: string): string => {
  return "Hello " + s;
};

console.log(getHello("sp"));

function logErrorToConsole(): void {
  console.log("error ...");
}

function throwErrorToEndUser(): never {
  throw new Error("System Down");
}
