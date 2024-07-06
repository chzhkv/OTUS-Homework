Домашнее задание №10 «Регулярные выражения»

Пользователь вводит текстовую строку.
Определить с помощью регулярного выражения, является ли введённая строка:

1.Датой.

const input = prompt('Enter a date in format DD/MM/YYYY or DD-MM-YYYY or DD.MM.YYYY');
const reqExp = /(0[1-9]|[12][0-9]|3[01])(\/|-|.)(0[1-9]|1[1,2])(\/|-|.)(19|20)\d{2}/;

console.log(reqExp.test(input));

2.Адресом электронной почты.

const input = prompt('Enter an email');
const reqExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(reqExp.test(input));


3.*Номером телефона.

const input = prompt('Enter a phone number');
const reqExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

console.log(reqExp.test(input));