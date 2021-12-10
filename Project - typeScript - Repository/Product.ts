export class Product {
  //Id generator ü test etmek için hepsi isteğe bağlı değişken haline getirildi
  constructor(
    private id?: number,
    private name?: string,
    private category?: string,
    private price?: number
  ) {}

  setId(id: number) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setCategory(category: string) {
    this.category = category;
  }

  getCategory() {
    return this.category;
  }

  setPrice(price: number) {
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}
