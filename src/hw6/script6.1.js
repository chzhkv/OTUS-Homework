export const diff = () => {
    let number1 = +prompt('Enter first number:');
    let number2 = +prompt('Enter second number:');
    if (number1 > number2) {
        console.log(number1-number2);
        return number1-number2;
    } else {
        console.log(number2-number1);
        return number2-number1;
    }
};

diff();
