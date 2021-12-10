//UI Controller //

const UIController = (function () {
  //Private
  const Selectors = {
    productList: "#item-list",
    productListItems: "#item-list tr",
    addButton: "#addBtn",
    updateButton: "#updateBtn",
    deleteButton: "#deleteBtn",
    cancelButton: "#cancelBtn",
    productName: "#productName",
    productPrice: "#productPrice",
    productCard: "#productCard",
    totalTl: "#total-tl",
    totalDollar: "#total-dollar",
  };

  //Public
  return {
    createProductList: function (products) {
      let html = "";

      products.forEach((product) => {
        html += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price} $</td>
                <td class="text-end">
                        <i class="far fa-edit edit-product"></i>
                </td>
            </tr>
            `;
      });

      document.querySelector(Selectors.productList).innerHTML = html;
    },
    getSelectors: function () {
      return Selectors;
    },
    addProduct: function (product) {
      document.querySelector(Selectors.productCard).style.display = "block";
      let html = `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price} $</td>
                <td class="text-end">
                        <i class="far fa-edit edit-product"></i>
                </td>
            </tr>
            `;
      document.querySelector(Selectors.productList).innerHTML += html;
    },
    updateProduct: function (prd) {
      let updatedItem = null;
      let items = document.querySelectorAll(Selectors.productListItems);
      items.forEach((item) => {
        if (item.classList.contains("bg-info")) {
          item.children[1].textContent = prd.name;
          item.children[2].textContent = prd.price + " $";
          updatedItem = item;
        }
      });

      return updatedItem;
    },
    clearInputs: function () {
      document.querySelector(Selectors.productName).value = "";
      document.querySelector(Selectors.productPrice).value = "";
    },
    clearInfos: function () {
      const items = document.querySelectorAll(Selectors.productListItems);
      items.forEach((item) => {
        item.classList.remove("bg-info");
      });
    },
    hideCard: function () {
      document.querySelector(Selectors.productCard).style.display = "none";
    },
    /* Normally I wanted to get Exchange rate online but they wanted API key which I dont have */
    showTotal: function (total, exchRate = 8.89) {
      document.querySelector(Selectors.totalDollar).textContent = total;
      document.querySelector(Selectors.totalTl).textContent = total * exchRate;
    },
    addProductToForm: function () {
      const selectedProduct = ProductController.getCurrentProduct();
      document.querySelector(Selectors.productName).value =
        selectedProduct.name;
      document.querySelector(Selectors.productPrice).value =
        selectedProduct.price;
    },
    deleteProduct: function () {
      let items = document.querySelectorAll(Selectors.productListItems);
      items.forEach((item) => {
        if (item.classList.contains("bg-info")) {
          item.remove();
        }
      });
    },
    addingState: function (item) {
      UIController.clearInfos();
      UIController.clearInputs();
      document.querySelector(Selectors.addButton).style.display = "inline";
      document.querySelector(Selectors.updateButton).style.display = "none";
      document.querySelector(Selectors.deleteButton).style.display = "none";
      document.querySelector(Selectors.cancelButton).style.display = "none";
    },
    editState: function (tr) {
      tr.classList.add("bg-info");
      document.querySelector(Selectors.addButton).style.display = "none";
      document.querySelector(Selectors.updateButton).style.display = "inline";
      document.querySelector(Selectors.deleteButton).style.display = "inline";
      document.querySelector(Selectors.cancelButton).style.display = "inline";
    },
  };
})();
