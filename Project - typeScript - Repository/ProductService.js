"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var FakeDatabase_1 = require("./FakeDatabase");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.fakeDatabase = new FakeDatabase_1.FakeDatabase();
        this.products = new Array();
        this.fakeDatabase
            .getProducts()
            .forEach(function (product) { return _this.products.push(product); });
    }
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (product) { return product.getId() === id; })[0];
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.getId() == 0 || product.getId() == null) {
            product.setId(this.generateId());
            this.products.push(product);
        }
        else {
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].getId() === product.getId()) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product);
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1);
        }
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
