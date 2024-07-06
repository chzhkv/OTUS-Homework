import { formatDate } from "./formatDate.js";
import { determiningDayOfWeek } from "./determiningDayOfWeek.js";
import { minutesCounter } from "./minutesCounter.js";

determiningDayOfWeek();
minutesCounter();

const firstBirthDate = '21.04.2002';
const secondBirthDate = '20.04.2002';

console.log('Задача 3:');
(formatDate(firstBirthDate) < formatDate(secondBirthDate)) ? console.log('Первый моложе')
    : ((formatDate(firstBirthDate) > formatDate(secondBirthDate)) ? console.log('Второй моложе')
        : console.log('Они родились в один день'));
