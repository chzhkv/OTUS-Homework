import { diff } from "./script6.1";
import { isWord } from "./isWord";
import { pow } from "./script6.3";

global.prompt = jest.fn();
describe ('diff function', () => {
    it('is a function', () => {
        expect(diff).toBeInstanceOf(Function)
    });

    it('should return the difference between the two numbers when the first number is larger', () => {
        prompt.mockImplementationOnce(() => '10').mockImplementationOnce(() => '5');
        expect(diff()).toBe(5);
    });

    it('should return the difference between the two numbers when the second number is larger', () => {
        prompt.mockImplementationOnce(() => '4').mockImplementationOnce(() => '10');
        expect(diff()).toBe(6);
    });

    it('should return NaN if arguments are not defined', () => {
        expect(diff()).toBeNaN()
    });
});

describe ('isWord function', () => {
    it('is a function', () => {
        expect(isWord).toBeInstanceOf(Function)
    });

    it('if argument have one word should return true ', () => {
        expect(isWord('word')).toBeTruthy();
        expect(isWord('     word       ')).toBeTruthy();
    });

     it('if argument have more than one word - return false ', () => {
        expect(isWord('word word')).toBeFalsy();
        expect(isWord('word word word')).toBeFalsy();
        expect(isWord('word word word word')).toBeFalsy();
    });
});

describe('pow function', () => {
    it('should calculate the power of a number', () => {
        prompt.mockImplementationOnce(() => '2').mockImplementationOnce(() => '3');
        console.log = jest.fn();
        pow();
        expect(prompt).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(8);
    });

    it('should handle invalid inputs', () => {
        prompt.mockImplementationOnce(() => 'abc').mockImplementationOnce(() => '3');
        console.log = jest.fn();
        pow();
        expect(prompt).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(NaN);
    });

    it('should handle zero degree', () => {
        prompt.mockImplementationOnce(() => '2').mockImplementationOnce(() => '0');
        console.log = jest.fn();
        pow();
        expect(prompt).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(1);
    });
});