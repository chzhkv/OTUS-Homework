import {addNewParagraph} from "./addNewParagraph.js";

const input = document.querySelector('.input');
const button = document.querySelector('.btn');

button.hidden = true;

input.addEventListener('input', function () {
    button.hidden = !this.value.length ;
});

button.addEventListener('click', addNewParagraph);

