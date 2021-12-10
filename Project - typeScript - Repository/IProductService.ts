import { Product } from "./Product";

export interface IProductService {
  getProducts(): Array<Product>;
  getById(id: number): Product;
  saveProduct(product: Product): void;
  deleteProduct(product: Product): void;
}
