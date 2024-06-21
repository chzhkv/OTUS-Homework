const input = document.querySelector('.input');
const button = document.querySelector('.btn');

export const addNewParagraph = () => {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = input.value;
    const paragraphBox = document.querySelector('.box');
    paragraphBox.append(newParagraph);
    input.value = '';
    button.hidden = true;
    paragraphBox.children.length > 5 ? paragraphBox.children[0].remove() : null;
}