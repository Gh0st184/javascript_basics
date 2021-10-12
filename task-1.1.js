// (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6(по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6), 
// конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта.
// Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25 %.
// Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции - конструктора, 
// и также не нужно создавать отдельный объект - прототип(как объект transport в уроке).

"use strict";

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price / 100) * 25;
}

let product1 = new Product("Хлеб", 100);
product1.make25PercentDiscount();

// -----------------------------------------------------------------

class Product_new {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount_new() {
        this.price = this.price - (this.price / 100) * 25;
    }
}

let product_new1 = new Product_new("Молоко", 50);
product_new1.make25PercentDiscount_new();
