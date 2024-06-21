let user = {
    name: 'John'
}

let input = prompt('Enter a number for age');
user.age = input;

let admin = Object.assign({}, user, { role: 'admin'});

let { name, role } = admin;

console.log(name, role);

