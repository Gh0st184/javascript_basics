// 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. 
// Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
// Обязательно использовать оператор return.
"use strict"

alert("Задача №4")

let a = 5;
let b = 2;

function addition(a, b) {
    return a + b
}

function subtraction(a, b) {
    return a - b
}

function multiplication(a, b) {
    return a * b
}

function division(a, b) {
    return a / b
}

alert(addition(a, b));
alert(subtraction(a, b));
alert(multiplication(a, b));
alert(division(a, b));