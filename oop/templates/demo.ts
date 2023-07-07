interface IProduct {
  Name: string;
  Price: number;
  Qty: number;
  Total(): number;
  Print(): void;
}

//abstract class is called Template
abstract class ProductTemplate implements IProduct {
  Name: string;
  Price: number;
  Qty: number;
  Total(): number {
    return this.Price * this.Qty;
  }
  abstract Print(): void;
}

class Product extends ProductTemplate {
  Print(): void {
    super.Name = "TV";
    super.Price = 34500.55;
    super.Qty = 2;
    console.log(`
            ${super.Name},
            ${super.Price},
            ${super.Qty},
            ${super.Total()}
        `);
  }
}
