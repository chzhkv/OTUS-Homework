export const diff = () => {
    let number1 = +prompt('Enter first number:');
    let number2 = +prompt('Enter second number:');

    console.log(Math.abs(number1-number2));
    return Math.abs(number1-number2);
};

diff();
