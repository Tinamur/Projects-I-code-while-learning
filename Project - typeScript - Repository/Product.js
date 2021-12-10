"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    //Id generator ü test etmek için hepsi isteğe bağlı değişken haline getirildi
    function Product(id, name, category, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
    Product.prototype.setId = function (id) {
        this.id = id;
    };
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.setName = function (name) {
        this.name = name;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.setCategory = function (category) {
        this.category = category;
    };
    Product.prototype.getCategory = function () {
        return this.category;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    return Product;
}());
exports.Product = Product;
