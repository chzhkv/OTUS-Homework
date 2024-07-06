export const pow = () => {
    let number = prompt('Enter a number:');
    let degree = prompt('Enter a degree:');
    let res = 1
    for (let i=1; i <= degree; i++) {
        res = res * number;
    }
    return console.log(res);
}

pow();

