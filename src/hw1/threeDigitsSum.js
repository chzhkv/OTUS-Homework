export function threeDigitsSum () {
    let input;

    do {
        input = +prompt('Введите 3-х значное число');
    } while (!((input <= 999) && (input >= 100)));

    let edinitcy = input % 10;
    let desyatki = ((input % 100) - edinitcy) / 10;
    let sotni = (input - (input % 100)) / 100;

    console.log(`Введеное число: ${input}. Результат сложения ${sotni} + ${desyatki} + ${edinitcy} = ` + (sotni + desyatki + edinitcy));

}