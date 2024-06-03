import { diff } from "./script6.1";
import { isWord } from "./isWord";
import { pow } from "./script6.3";

describe ('using function "diff" for calculation differences between numbers', () => {
    it('diff is a function', () => {
        expect(diff).toBeInstanceOf(Function)
    });

    it('if a=5, b=3 then answer = 2', () => {
        expect(diff(5,3)).toBe(2)
    });

    it('if a=1, b=4 then answer = 3', () => {
        expect(diff(1,4)).toBe(3)
    });

    it('if arguments are not defined', () => {
        expect(diff()).toBeNaN()
    });

    it('after typing empty string into arguments answer should be = 0', () => {
        expect(diff('','')).toBe(0)
    });

})
describe ('using function "pow" for raise to a power entered digit "a" to entered degree "x"', () => {
    it('pow is a function', () => {
        expect(pow).toBeInstanceOf(Function)
    });

    it('if a=9, x=2 then answer = 81', () => {
        expect(pow(9,2)).toBe(81)
    });

    it('random digit on random degree should be true', () => {
        expect(pow(Math.ceil(Math.random() * 10),Math.ceil(Math.random() * 10))).toBeTruthy()
    });

})

describe ('using function "isWord" for detection that input consist of 1 or more words', () => {
    it('isWord is a function', () => {
        expect(isWord).toBeInstanceOf(Function)
    });

    it('if argument have one word - return true ', () => {
        expect(isWord('word')).toBeTruthy();
    });

     it('if argument have more than one word - return false ', () => {
        expect(isWord('word word')).toBeFalsy();
        expect(isWord('word word word')).toBeFalsy();
        expect(isWord('word word word word')).toBeFalsy();
    });
})