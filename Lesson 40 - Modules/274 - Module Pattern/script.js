const products = [
  {
    name: "Samsung S7",
    price: 3000,
  },
  {
    name: "Huawei Mate 8",
    price: 1000,
  },
  {
    name: "Samsung S8",
    price: 4000,
  },
  {
    name: "Nokia 3310",
    price: 10,
  },
];

var ProductController = (function (data) {
  //Private Members

  var collections = data || [];
  const addProduct = function (product) {
    collections.push(product);
  };
  const removeProduct = function (product) {
    var index = collections.indexOf(product);
    if (index >= 0) {
      collections.splice(index, 1);
    }
  };
  const getProducts = function () {
    return collections;
  };

  //Public Members
  return {
    addProduct,
    removeProduct,
    getProducts,
  };
})(products);
/*
//adding Products
ProductController.addProduct(products[0]);
ProductController.addProduct(products[1]);
ProductController.addProduct(products[2]);
ProductController.addProduct(products[3]);

console.log(ProductController.getProducts());
//Removing product
ProductController.removeProduct(products[2]);

console.log(ProductController.getProducts());
*/

//Module Extending
var extended = (function (m) {
  m.sayHello = function () {
    console.log("hello from extended module");
  };

  return m;
})(ProductController || {});
extended.sayHello();
console.log(extended.getProducts());
