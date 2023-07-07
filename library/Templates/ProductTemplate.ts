import {IProduct} from "../Contracts/IProductContract";

export abstract class ProductTemplate implements IProduct{
    public Name: string = "";
    public Price: number = 0;
    public Qty: number = 1;
    total(): number {
        return this.Qty * this.Price;
    }

    abstract print(): void;
}