Домашнее задание №4 «Объекты»

Создайте объект user, содержащий поле name со значением ‘John’.

let user = {
    name: 'John'
}

1.Запросить у пользователя ввод числа.
Записать введенное значение в поле age объекта user.

let user = {
    name: 'John'
}

let input = prompt('Enter a number for age');
user.age = input;

2.Создать копию объекта user с именем admin.
Добавить новому объекту поле role со значением ‘admin’.

let user = {
    name: 'John'
}

let admin = Object.assign({}, user, { role: 'admin'});

3*.Записать все значения полей объекта admin в отдельные переменные.
Имена переменных должны совпадать с названиями полей.

let user = {
    name: 'John'
}

let admin = Object.assign({}, user, { role: 'admin' });

let { name, role } = admin;

console.log(name, role)