Домашнее задание №9 «Математические операции»

1.Даны длины трёх сторон треугольника.
Определить, является ли треугольник прямоугольным.

const a = 3;
const b = 4;
const c = 5;
const res = (Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2));

if (res) {
alert('Треугольник прямоугольный');
} else {
alert('Треугольник не прямоугольный');
}


2.Пользователь вводит число R.
Написать программу, которая выведет в консоль длину окружности и площадь круга с радиусом R.

const radius = +prompt('Введите число R');
const circleLength = 2 * Math.PI * radius;
const circleSquare = Math.PI * Math.pow(radius, 2);

console.log(`Длина окружности = ${circleLength.toFixed(2)}, Площадь круга = ${circleSquare.toFixed(2)}`);

*Пользователь вводит числа a, b и c.
Написать программу, выводящую корни квадратного уравнения с коэффициентами a, b и c

const a = +prompt('Enter a:');
const b = +prompt('Enter b:');
const c = +prompt('Enter c:');

function solve(a, b, c) {
var discriminant = b * b - 4 * a * c;
if (discriminant < 0) {
console.log('Уравнение не имеет реальных корней');
} else if (discriminant === 0) {
console.log('Уравнение имеет один корень: ' + (-b / (2 * a)));
} else {
var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
console.log('Уравнение имеет два корня: ' + root1 + ' и ' + root2);
}
}

solve(a, b, c);