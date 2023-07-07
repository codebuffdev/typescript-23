export interface IProduct {
    Name: string;
    Price: number;
    Qty: number;

    total(): number;

    print(): void;
}