export function minutesCounter () {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    console.log('Задача 2: ' + (hours * 60 + minutes));
}