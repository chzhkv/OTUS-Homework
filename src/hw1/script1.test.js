import {sumAndMult} from "./sumAndMult.js";
import {lengthSum} from "./lengthSum.js";
import {threeDigitsSum} from "./threeDigitsSum.js";

describe('sumAndMult function', () => {
    it('should return the sum and multiply of two numbers', () => {
        console.log = jest.fn();
        sumAndMult(2, 3);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Задача 1: Сумма: 5, Произведение: 6');
    });

    it('should handle negative numbers', () => {
        console.log = jest.fn();
        sumAndMult(-2, 3);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Задача 1: Сумма: 1, Произведение: -6');
    });

    it('should handle zero', () => {
        console.log = jest.fn();
        sumAndMult(0, 3);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Задача 1: Сумма: 3, Произведение: 0');
    });
});

describe('lengthSum function', () => {
    it('should log the sum of the lengths of two strings', () => {
        console.log = jest.fn();
        lengthSum('hello', 'world');
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Задача 2: 10');
    });

    it('should handle empty strings', () => {
        console.log = jest.fn();
        lengthSum('', '');
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Задача 2: 0');
    });

    it('should handle strings of different lengths', () => {
        console.log = jest.fn();
        lengthSum('abc', 'defgh');
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Задача 2: 8');
    });
});

global.prompt = jest.fn();
describe('threeDigitsSum function', () => {
    it('should prompt for a 3-digit number and log the sum of its digits', () => {
        prompt.mockImplementation(() => '123');
        console.log = jest.fn();
        threeDigitsSum();
        expect(prompt).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Введеное число: 123. Результат сложения 1 + 2 + 3 = 6');
    });
});
