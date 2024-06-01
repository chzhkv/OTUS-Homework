Домашнее задание №8 «Работа с датами»

1.Запросите у пользователя дату в формате ДД.ММ.ГГГГ.
Напишите программу, выводящую день недели по введённой дате.

const input = prompt('Enter a date (DD.MM.YYYY');
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

console.log(days[dayOfWeek]);

2.Написать программу, которая выводит в консоль количество минут, прошедшее с начала сегодняшнего дня.

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();

console.log(hours * 60 + minutes);

3.*В двух переменных хранятся даты рождения двух пользователей в формате ДД.ММ.ГГГГ.
Написать программу, которая определяет более молодого пользователя.

const firstBirthDate = '21.04.2002';
const secondBirthDate = '20.04.2002';

function formatDate (date) {
const [day, month, year] = date.split('.');
const formatedDate = +new Date(`${year}-${month}-${day}`);
return formatedDate;
}

(formatDate(firstBirthDate) < formatDate(secondBirthDate)) ? console.log('Первый моложе')
: ((formatDate(firstBirthDate) > formatDate(secondBirthDate)) ? console.log('Второй моложе')
: console.log('Они родились в один день'));