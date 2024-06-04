import { addNewParagraph } from "./addNewParagraph.js";

describe ('addNewParagraph that adds new p after typing something into input', () => {
    it('is a function', () => {
        expect(addNewParagraph).toBeInstanceOf(Function)
    });
})