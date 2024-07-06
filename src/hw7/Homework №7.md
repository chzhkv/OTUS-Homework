Домашнее задание №7 «Работа с DOM»

Сверстать страницу и подключить к ней файл со скриптом.
На странице должны быть три текстовых параграфа, поле ввода и кнопка.

Напишите скрипт, который будет выполнять следующие условия:
1.Кнопка скрыта, если в поле ввода нет значения.

2.При клике на кнопку добавляется новый параграф,
содержащий текст из поля ввода.

3.*Если параграфов становится больше 5, первый из них удаляется.

HTML:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Homework</title>
  </head>
  <body>
    <div class="box">
      <p>
        Paragraph 1
      </p>
      <p>
        Paragraph 2
      </p>
      <p>
        Paragraph 3
      </p>
    </div>
    <input type="text" class="input">
    <button class="btn">Add</button>

    <script src="./src/script.js"></script>
  </body>
</html>

JS:
const input = document.querySelector('.input');
const button = document.querySelector('.btn');

button.hidden = true;

input.addEventListener('input', function () {
    button.hidden = !this.value.length ;
});

button.addEventListener('click', addNewParagraph);

function addNewParagraph () {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = input.value;
    const paragraphBox = document.querySelector('.box');
    paragraphBox.append(newParagraph);
    input.value = '';
    button.hidden = true;
    paragraphBox.children.length > 5 ? paragraphBox.children[0].remove() : null;
}

