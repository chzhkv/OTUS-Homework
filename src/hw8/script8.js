import { formatDate } from "./formatDate.js";

const input = prompt('Enter a date (DD.MM.YYYY)');
const [day, month, year] = input.split('.');
const inputDate = new Date(`${year}-${month}-${day}`);

const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];

let dayOfWeek = inputDate.getDay();

console.log('Задача 1: ' + days[dayOfWeek]);

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();

console.log('Задача 2: ' + (hours * 60 + minutes));

const firstBirthDate = '21.04.2002';
const secondBirthDate = '20.04.2002';

console.log('Задача 3:');
(formatDate(firstBirthDate) < formatDate(secondBirthDate)) ? console.log('Первый моложе')
    : ((formatDate(firstBirthDate) > formatDate(secondBirthDate)) ? console.log('Второй моложе')
        : console.log('Они родились в один день'));
