export function userAge (user) {
    let input = prompt('Enter a number for age');
    user.age = input;
    console.log(user.age);
}