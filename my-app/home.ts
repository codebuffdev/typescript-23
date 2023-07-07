import {ProductService} from '../library/Services/ProductService'

let tv = new ProductService();
console.log(
    `
    ${tv.Name}, 
    ${tv.Price},
    ${tv.Qty},
    ${tv.total()}
    `
);