import { addNewParagraph } from "./addNewParagraph.js";

describe ('addNewParagraph function', () => {
    it('is a function', () => {
        expect(addNewParagraph).toBeInstanceOf(Function)
    });

    it('should create a new paragraph element and after clean input', () => {
        const input = document.createElement('input');
        input.className = 'input';
        input.value = 'Hello World!';
        document.body.appendChild(input);

        const button = document.createElement('button');
        button.className = 'btn';
        document.body.appendChild(button);

        const paragraphBox = document.createElement('div');
        paragraphBox.className = 'box';
        document.body.appendChild(paragraphBox);

        addNewParagraph();

        expect(paragraphBox.children.length).toBe(1);
        expect(input.value).toBe('');
        expect(button.hidden).toBe(true);

        addNewParagraph();
        expect(paragraphBox.children.length).toBe(2);
    });
});