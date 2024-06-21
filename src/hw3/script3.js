let sum = 0;

for (let i=50; i<=100; i++) {
    sum = sum + i;
}
console.log('Задача 1: ' + sum);


const seven = 7;

console.log('Задача 2: ');
for (let i=1; i<10; i++) {
    console.log(`${seven} x ${i} = ${seven * i}`)
}

let number = prompt('Введите число');
let sumN = 0;

for (let i=1; i<=number; i++) {
    if ((i%2) !== 0) {
        sumN = sumN + i;
    }
}

console.log('Задача 3: ' + sumN)
