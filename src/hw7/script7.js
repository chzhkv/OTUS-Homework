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