// Product Controller //

const ProductController = (function () {
  //Private

  const Product = function (id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  };

  const data = {
    products: StorageController.getProducts(),
    selectedProduct: null,
    totalPrice: 0,
  };

  //Public
  return {
    getProducts: function () {
      return data.products;
    },
    getData: function () {
      return data;
    },
    getProductById: function (id) {
      let product = null;

      data.products.forEach((item) => {
        if (item.id == id) {
          product = item;
        }
      });

      return product;
    },
    setCurrentProduct: function (product) {
      data.selectedProduct = product;
    },
    getCurrentProduct: function () {
      return data.selectedProduct;
    },
    addProduct: function (name, price) {
      let id;
      if (data.products.length > 0) {
        id = data.products[data.products.length - 1].id + 1;
      } else {
        id = 0;
      }

      const newProduct = new Product(id, name, parseFloat(price));
      data.products.push(newProduct);
      return newProduct;
    },
    updateProduct: function (name, price) {
      let product = null;

      data.products.forEach((prd) => {
        if (prd.id == data.selectedProduct.id) {
          prd.name = name;
          prd.price = parseFloat(price);
          product = prd;
        }
      });

      return product;
    },
    deleteProduct: function (selectedProduct) {
      data.products.forEach((product, index) => {
        if (product.id == selectedProduct.id) {
          data.products.splice(index, 1);
        }
      });
    },
    getTotal: function () {
      let total = 0;
      data.products.forEach((item) => {
        total += item.price;
      });
      data.totalPrice = total;
      return data.totalPrice;
    },
  };
})();
