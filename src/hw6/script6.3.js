export const pow = (a, x) => {
    let res = 1
    for (let i=1; i <= x; i++) {
        res = res * a;
    }
    return res;
}

let number = prompt('Enter a number:');
let degree = prompt('Enter a degree:');

console.log(pow(number, degree));