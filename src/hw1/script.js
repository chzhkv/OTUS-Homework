const a = 5;
const b = 7;
console.log ('Задача 1: ' + (a + b), (a * b));

const c = 'test';
const d = 'text';
console.log ('Задача 2: ' + (c.length + d.length))

let input;

do {
    input = +prompt('Введите 3-х значное число');
} while (!((input <= 999) && (input >= 100)));

let edinitcy = input % 10;
let desyatki = ((input % 100) - edinitcy) / 10;
let sotni = (input - (input % 100)) / 100;

console.log(`Введеное число: ${input}. Результат сложения ${sotni} + ${desyatki} + ${edinitcy} = ` + (sotni + desyatki + edinitcy));

