enum EnumName {
    Name = "test"
}

console.log(EnumName.Name);

enum ErrorCodes {
    OK = 200,
    Created = 201,
    Accepted = 202,
    NonAuthoritative = 203,
    NoContent
}
console.log(`NoContent Status Code: ${ErrorCodes.NoContent}`);

enum ErrorCodes2 {
    OK,
    Created = 201,
    Accepted = 202,
    NonAuthoritative = 203,
    NoContent
}

console.log(`NoContent Status Code: ${ErrorCodes2.NoContent}`)
console.log(`OK : ${ErrorCodes2.OK}`);

enum ErrorCodes3 {
    OK,
    Created = 201,
    Accepted = 202,
    NonAuthoritative,		// 203
    NoContent=205
}

console.log(`NoContent Status Code: ${ErrorCodes3.NoContent}`)
console.log(`OK : ${ErrorCodes3.OK}`);


enum Play {
    Last,			// valid - 0
    Next = "Next Song",
    Prev = "Previous Song",
    First = "First Song"
}

console.log(`Last Value ${Play.Last}`);
console.log(`Prev : ${Play.Prev}`);

enum Play2 {
    Next = "Next Song",
    Prev,			// invalid - not allowed
    First = "First Song"
}

console.log(`Last Value ${Play2.Next}`);
console.log(`Prev : ${Play2.Prev}`);
console.log(`Prev : ${Play2.First}`);

enum Play3 {
    Last = 0,
    Next = "Next Song",
    Prev = 1,
    First = "First Song"
}
console.log(`Last Value ${Play3.Last}`);
console.log(`Last Value ${Play3.Next}`);
console.log(`Prev : ${Play3.Prev}`);
console.log(`Prev : ${Play3.First}`);

const enum Expressions {
    A = true,
    B = false,	// invalid boolean type 
};

//--
enum Size {
    Height,
    VSize= ""
}

console.log(typeof Size.Height);
console.log(`${Size.Height}`);
console.log(typeof Size.VSize);
console.log(`${Size.VSize}`);

interface Table {
    Vertical:Size.Height;
    Color:string;
}

interface Div {
    Vertical:Size.VSize;
}

let empTable: Table = {
    Vertical:Size.VSize,	// invalid
    Vertical:Size.Height,	// valid
    Color: "Red"
};

let navDiv: Div = {
    Vertical:Size.VSize	// valid
    Vertical:Size.Height	// invalid
}

