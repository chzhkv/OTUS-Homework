const inputDate = prompt('Enter a date in format DD/MM/YYYY or DD-MM-YYYY or DD.MM.YYYY');
const reqExpDate = /(0[1-9]|[12][0-9]|3[01])(\/|-|.)(0[1-9]|1[1,2])(\/|-|.)(19|20)\d{2}/;
console.log(reqExpDate.test(inputDate));


const inputEmail = prompt('Enter an email');
const reqExpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(reqExpEmail.test(inputEmail));


const inputPhone = prompt('Enter a phone number');
const reqExpPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
console.log(reqExpPhone.test(inputPhone));