import {fiftySum} from "./fiftySum.js";
import {sevenMulti} from "./sevenMulti.js";
import {arithmeticMeanOfOdd} from "./arithmeticMeanOfOdd.js";

describe('fiftySum function', () => {
    it('should calculate the sum of numbers from 50 to 100', () => {
        console.log = jest.fn();
        fiftySum();
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Задача 1: 3825');
    });
});

describe('sevenMulti function', () => {
    it('should log the multiplication table of 7', () => {
        console.log = jest.fn();
        sevenMulti();
        expect(console.log).toHaveBeenCalledTimes(10);
        expect(console.log).toHaveBeenCalledWith('Задача 2: ');
        expect(console.log).toHaveBeenCalledWith('7 x 1 = 7');
        expect(console.log).toHaveBeenCalledWith('7 x 2 = 14');
        expect(console.log).toHaveBeenCalledWith('7 x 3 = 21');
        expect(console.log).toHaveBeenCalledWith('7 x 4 = 28');
        expect(console.log).toHaveBeenCalledWith('7 x 5 = 35');
        expect(console.log).toHaveBeenCalledWith('7 x 6 = 42');
        expect(console.log).toHaveBeenCalledWith('7 x 7 = 49');
        expect(console.log).toHaveBeenCalledWith('7 x 8 = 56');
        expect(console.log).toHaveBeenCalledWith('7 x 9 = 63');
    });
});

global.prompt = jest.fn();
describe('arithmeticMeanOfOdd function', () => {
    it('should calculate the sum of odd numbers up to the input number', () => {
        prompt.mockImplementation(() => '10');
        console.log = jest.fn();
        arithmeticMeanOfOdd();
        expect(prompt).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Задача 3: 25');
    });
});