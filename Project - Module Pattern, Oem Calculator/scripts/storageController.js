// Storage Controller //

const StorageController = (function () {
  //Private

  //Public
  return {
    storeProduct: function (product) {
      let products;
      if (localStorage.getItem("products") === null) {
        products = [];
        products.push(product);
      } else {
        products = JSON.parse(localStorage.getItem("products"));
        products.push(product);
      }
      localStorage.setItem("products", JSON.stringify(products));
    },
    getProducts: function () {
      let products;
      if (localStorage.getItem("products") === null) {
        products = [];
      } else {
        products = JSON.parse(localStorage.getItem("products"));
      }
      return products;
    },
    updateProduct: function (updatedProduct) {
      let products = JSON.parse(localStorage.getItem("products"));
      products.forEach((product, index) => {
        if (updatedProduct.id == product.id) {
          products.splice(index, 1, updatedProduct);
        }
      });

      localStorage.setItem("products", JSON.stringify(products));
    },
    deleteProduct: function (deletedProduct) {
      let products = JSON.parse(localStorage.getItem("products"));
      products.forEach((product, index) => {
        if (deletedProduct.id == product.id) {
          products.splice(index, 1);
        }
      });

      localStorage.setItem("products", JSON.stringify(products));
    },
  };
})();
