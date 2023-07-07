"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductService_1 = require("../library/Services/ProductService");
var tv = new ProductService_1.ProductService();
console.log("\n    ".concat(tv.Name, ", \n    ").concat(tv.Price, ",\n    ").concat(tv.Qty, ",\n    ").concat(tv.total(), "\n    "));
