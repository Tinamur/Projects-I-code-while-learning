"use strict";
exports.__esModule = true;
exports.FakeDatabase = void 0;
var Product_1 = require("./Product");
var FakeDatabase = /** @class */ (function () {
    function FakeDatabase() {
        this.products = new Array(new Product_1.Product(1, "product_1", "category_1", 19), new Product_1.Product(2, "product_2", "category_3", 11), new Product_1.Product(3, "product_3", "category_2", 12), new Product_1.Product(4, "product_4", "category_1", 13), new Product_1.Product(5, "product_5", "category_2", 14), new Product_1.Product(6, "product_6", "category_1", 17), new Product_1.Product(7, "product_7", "category_2", 10), new Product_1.Product(8, "product_8", "category_1", 21), new Product_1.Product(9, "product_9", "category_3", 3), new Product_1.Product(10, "product_10", "category_1", 41));
    }
    FakeDatabase.prototype.getProducts = function () {
        return this.products;
    };
    return FakeDatabase;
}());
exports.FakeDatabase = FakeDatabase;
