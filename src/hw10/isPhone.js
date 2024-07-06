export function isPhone () {
    const inputPhone = prompt('Enter a phone number');
    const reqExpPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm;
    console.log(reqExpPhone.test(inputPhone));
}