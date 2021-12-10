import { Product } from "./Product";
export class FakeDatabase {
  private products: Array<Product>;

  constructor() {
    this.products = new Array<Product>(
      new Product(1, "product_1", "category_1", 19),
      new Product(2, "product_2", "category_3", 11),
      new Product(3, "product_3", "category_2", 12),
      new Product(4, "product_4", "category_1", 13),
      new Product(5, "product_5", "category_2", 14),
      new Product(6, "product_6", "category_1", 17),
      new Product(7, "product_7", "category_2", 10),
      new Product(8, "product_8", "category_1", 21),
      new Product(9, "product_9", "category_3", 3),
      new Product(10, "product_10", "category_1", 41)
    );
  }

  getProducts(): Product[] {
    return this.products;
  }
}
