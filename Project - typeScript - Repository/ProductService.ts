import { FakeDatabase } from "./FakeDatabase";
import { IProductService } from "./IProductService";
import { Product } from "./Product";

export class ProductService implements IProductService {
  private fakeDatabase: FakeDatabase;
  private products: Array<Product>;

  constructor() {
    this.fakeDatabase = new FakeDatabase();
    this.products = new Array<Product>();

    this.fakeDatabase
      .getProducts()
      .forEach((product) => this.products.push(product));
  }

  getProducts(): Product[] {
    return this.products;
  }
  getById(id: number): Product {
    return this.products.filter((product) => product.getId() === id)[0];
  }
  saveProduct(product: Product): void {
    if (product.getId() == 0 || product.getId() == null) {
      product.setId(this.generateId());
      this.products.push(product);
    } else {
      let index;
      
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].getId() === product.getId()) {
          index = i;
        }
      }
      this.products.splice(index, 1, product);
    }
  }
  deleteProduct(product: Product): void {
    let index = this.products.indexOf(product);
    if (index > 0) {
      this.products.splice(index, 1);
    }
  }

  private generateId(): number {
    let key = 1;
    while (this.getById(key) != null) {
      key++;
    }
    return key;
  }
}
