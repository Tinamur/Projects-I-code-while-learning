//App Controller //

const App = (function (productCtrl, UICtrl, StorageCtrl) {
  //private
  const UIselectors = UICtrl.getSelectors();

  //Load Event Listeners
  const loadEventListeners = function () {
    //Add Product
    document
      .querySelector(UIselectors.addButton)
      .addEventListener("click", productAddSubmit);

    //Edit Product Click
    document
      .querySelector(UIselectors.productList)
      .addEventListener("click", productEditClick);

    //Edit Product Submit
    document
      .querySelector(UIselectors.updateButton)
      .addEventListener("click", editProductSubmit);

    //Cancel Button Click
    document
      .querySelector(UIselectors.cancelButton)
      .addEventListener("click", cancelUpdate);

    //Delete Button Click
    document
      .querySelector(UIselectors.deleteButton)
      .addEventListener("click", deleteProductSubmit);
  };

  const productAddSubmit = function (e) {
    const productName = document.querySelector(UIselectors.productName).value;
    const productPrice = document.querySelector(UIselectors.productPrice).value;
    if (productName !== "" && productPrice !== "") {
      //Add product
      const newProduct = productCtrl.addProduct(productName, productPrice);
      //Add item to List
      UICtrl.addProduct(newProduct);

      //Add product to localStorage
      StorageCtrl.storeProduct(newProduct);

      //Get Total
      const total = productCtrl.getTotal();

      //Show Total
      UICtrl.showTotal(total);

      UICtrl.clearInputs();
    }
    e.preventDefault();
  };
  const productEditClick = function (e) {
    if (e.target.classList.contains("edit-product")) {
      const id =
        e.target.parentNode.previousElementSibling.previousElementSibling
          .previousElementSibling.textContent;

      //Get Selected Product
      const product = productCtrl.getProductById(id);

      //Set Current Product
      productCtrl.setCurrentProduct(product);

      //Add Product to UI
      UICtrl.addProductToForm();
      UICtrl.clearInfos();
      //Change State to edit
      UICtrl.editState(e.target.parentNode.parentNode);
    }
    e.preventDefault();
  };
  const editProductSubmit = function (e) {
    const productName = document.querySelector(UIselectors.productName).value;
    const productPrice = document.querySelector(UIselectors.productPrice).value;
    if (productName !== "" && productPrice !== "") {
      //Update Product
      const updatedProduct = productCtrl.updateProduct(
        productName,
        productPrice
      );

      //Update UI
      let item = UICtrl.updateProduct(updatedProduct);
      //Get Total
      const total = productCtrl.getTotal();

      //Show Total
      UICtrl.showTotal(total);

      //Update Storage
      StorageCtrl.updateProduct(updatedProduct);

      UICtrl.addingState();
    }
    e.preventDefault();
  };
  const cancelUpdate = function (e) {
    UICtrl.addingState();
    UICtrl.clearInfos();

    e.preventDefault();
  };
  const deleteProductSubmit = function (e) {
    //Get Selected Product
    const selectedProduct = productCtrl.getCurrentProduct();
    //Delete Product
    productCtrl.deleteProduct(selectedProduct);
    //Delete UI
    UICtrl.deleteProduct();

    //Delete From Storage
    StorageCtrl.deleteProduct(selectedProduct);

    //Get Total
    const total = productCtrl.getTotal();

    //Show Total
    UICtrl.showTotal(total);
    UICtrl.addingState();

    const products = productCtrl.getProducts();
    if (products.length == 0) {
      UICtrl.hideCard();
    }

    e.preventDefault();
  };

  //public
  return {
    init: function () {
      console.log("starting app...");
      UICtrl.addingState();
      const products = productCtrl.getProducts();
      if (products.length == 0) {
        UICtrl.hideCard();
      } else {
        UICtrl.createProductList(products);
        //Get Total
        const total = productCtrl.getTotal();

        //Show Total
        UICtrl.showTotal(total);
      }
      //Load Event Listeners
      loadEventListeners();
    },
  };
})(ProductController, UIController, StorageController);

App.init();
