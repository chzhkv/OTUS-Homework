import { solve } from "./solve.js";

const a = 3;
const b = 4;
const c = 5;
const res = (Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2));

if (res) {
    console.log('Треугольник прямоугольный');
} else {
    console.log('Треугольник не прямоугольный');
}


const radius = +prompt('Введите число R');
const circleLength = 2 * Math.PI * radius;
const circleSquare = Math.PI * Math.pow(radius, 2);

console.log(`Длина окружности = ${circleLength.toFixed(2)}, Площадь круга = ${circleSquare.toFixed(2)}`);


const A = +prompt('Enter a:');
const B = +prompt('Enter b:');
const C = +prompt('Enter c:');

solve(A, B, C);