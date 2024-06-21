Домашнее задание №2 «Условия»

1. В переменных a и b хранятся числа. Вывести в консоль наибольшее из них.

const a = 5;
const b = 10;
console.log((a>b) ? a : b)

=====================================================================================================================

2. Запросить у пользователя ввод числа от 1 до 12. Вывести в консоль название месяца, соответствующее
этому числу (1 — январь, 2 — февраль и т.д.).

let value = prompt('Введите число от 1 до 12');

switch (+value) {
    case 1:
        console.log('Январь');
        break;
    case 2:
        console.log('Февраль');
        break;
    case 3:
        console.log('Март');
        break;
    case 4:
        console.log('Апрель');
        break;
    case 5:
        console.log('Май');
        break;
    case 6:
        console.log('Июнь');
        break;
    case 7:
        console.log('Июль');
        break;
    case 8:
        console.log('Август');
        break;
    case 9:
        console.log('Сентябрь');
        break;
    case 10:
        console.log('Октябрь');
        break;
    case 11:
        console.log('Ноябрь');
        break;
    case 12:
        console.log('Декабрь');
        break;
    default :
        console.log('Bad number')
}

=======================================================================================================================

3* В переменных circle и square хранятся площади круга и квадрата соответственно.
Написать программу, которая определяет, поместится ли круг в квадрат.

const circle = 9;
const square = 20;

let circleDiameter = 2 * Math.sqrt(circle / Math.PI);
let squareBasis = Math.sqrt(square);

console.log((circleDiameter <= squareBasis) ? 'Помещается' : 'Не помещается')