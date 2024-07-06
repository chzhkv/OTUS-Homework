export function arithmeticMeanOfOdd() {
    let number = prompt('Введите число');
    let sumN = 0;

    for (let i=1; i<=number; i=i+2) {
            sumN = sumN + i;
    }

    console.log('Задача 3: ' + sumN)
}