export function determiningDayOfWeek () {
    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    const input = prompt('Enter a date (DD.MM.YYYY)');

    function isValidDate(dateString) {
        const timeStamp = Date.parse(dateString);
        return !isNaN(timeStamp);
    }

    if (isValidDate(input)) {
        const [day, month, year] = input.split('.');
        const inputDate = new Date(`${year}-${month}-${day}`);

        let dayOfWeek = inputDate.getDay();
        const reqExpDate = /(0[1-9]|[12][0-9]|3[01])(\.)(0[1-9]|1[1,2])(\.)(19|20)\d{2}/;

        if (reqExpDate.test(input)) {
            console.log('Задача 1: ' + days[dayOfWeek]);
        } else {
            throw new Error("Invalid date format. Please use DD.MM.YYYY");
        }
    } else {
        throw new Error("Invalid date");
    }
}