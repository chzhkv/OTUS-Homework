Домашнее задание №6 «Функции»

1.Напишите функцию diff,
которая получает в качестве параметров 2 числа и возвращает разницу между наибольшим и наименьшим.

const diff = (a, b) => {
    if (a > b) {
        console.log(a-b);
    } else {
        console.log(b-a);
    }
}

let number1 = +prompt('Enter first number:');
let number2 = +prompt('Enter second number:');

diff(number1, number2);

2. Напишите функцию isWord,
которая принимает на вход текстовую строку.
Функция возвращает true, если строка состоит из одного слова и false, если из нескольких.

const isWord = (str) => {
    if (str.indexOf(' ') > -1) {
        return Boolean (false)
    } else {
        return Boolean (true)
    }
}

const str = prompt('Enter a string:');

isWord(str);

console.log(isWord(str))

3. *Напишите функцию pow(a, x), которая вернёт значение числа a, возведённого в степень x.

const pow = (a, x) => {
    let res = 1
    for (let i=1; i <= x; i++) {
        res = res * a;
    }
    return res;
}

let number = prompt('Enter a number:')
let degree = prompt('Enter a degree:')

console.log(pow(number, degree));