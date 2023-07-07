import {ProductTemplate} from "../Templates/ProductTemplate"

export class ProductService extends ProductTemplate{
    public print(): void {
        console.log(`${super.Name}`);
    }
}