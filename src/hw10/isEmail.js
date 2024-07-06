export function isEmail () {
    const inputEmail = prompt('Enter an email');
    const reqExpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(reqExpEmail.test(inputEmail));
}