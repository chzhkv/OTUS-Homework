export const diff = (a, b) => {
    if (a > b) {
        console.log(a-b);
        return a-b;
    } else {
        console.log(b-a);
        return b-a;
    }
}

let number1 = +prompt('Enter first number:');
let number2 = +prompt('Enter second number:');

diff(number1, number2);
