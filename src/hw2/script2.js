const a = 5;
const b = 10;
console.log ('Задача 1: ' + ((a>b) ? a : b));

let value = prompt('Введите число от 1 до 12');

console.log('Задача 2: ');
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

const circle = 9;
const square = 20;

let circleDiameter = 2 * Math.sqrt(circle / Math.PI);
let squareBasis = Math.sqrt(square);

console.log('Задача 3: ' +((circleDiameter <= squareBasis) ? 'Помещается' : 'Не помещается'))

