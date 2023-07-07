"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTemplate = void 0;
var ProductTemplate = /** @class */ (function () {
    function ProductTemplate() {
        this.Name = "";
        this.Price = 0;
        this.Qty = 1;
    }
    ProductTemplate.prototype.total = function () {
        return this.Qty * this.Price;
    };
    return ProductTemplate;
}());
exports.ProductTemplate = ProductTemplate;
