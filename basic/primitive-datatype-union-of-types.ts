let user: string | number;
user = 'apple';
user = 10;

let page: string | number;
page = 'home.html';
if (page == 'home.html') {
    console.log('You are in home page');
}

page = 2;
if (page == 2) {
    console.log('You are in home page');
}

let statusCode: string | number;
statusCode = 'success';
if (statusCode == 'success') {
    console.log('SUCCESS PAGE');
}
statusCode = 200;
if (statusCode == 200) {
    console.log('SUCCESS PAGE');
}

let Name: string = 'samsung Tv';
let price: number | undefined;

if (price == undefined) {
    console.log(`Name ${Name}`);
} else {
    console.log(`Name ${Name}\nPrice ${price}`);
}
