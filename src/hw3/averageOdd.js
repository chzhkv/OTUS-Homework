export function averageOdd() {
    let number = prompt('Введите число');
    let sumN = 0;

    for (let i=1; i<=number; i++) {
        if ((i%2) !== 0) {
            sumN = sumN + i;
        }
    }

    console.log('Задача 3: ' + sumN)
}