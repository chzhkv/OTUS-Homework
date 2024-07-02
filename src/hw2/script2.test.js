import {greatestNumber} from "./greatestNumber.js";
import {monthNumber} from "./monthNumber.js";
import {circleAndSquare} from "./circleAndSquare.js";

describe('greatestNumber function', () => {
    it('should log the greatest of two numbers', () => {
        console.log = jest.fn();
        greatestNumber(5, 10);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Задача 1: 10');
    });

    it('should handle equal numbers', () => {
        console.log = jest.fn();
        greatestNumber(5, 5);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Задача 1: 5');
    });

    it('should handle negative numbers', () => {
        console.log = jest.fn();
        greatestNumber(-5, 10);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Задача 1: 10');
    });
});

global.prompt = jest.fn();

describe('monthNumber function', () => {
    it('should prompt for a number and log the corresponding month', () => {
        prompt.mockImplementation(() => '1');
        console.log = jest.fn();
        monthNumber();
        expect(prompt).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledWith('Задача 2: ');
        expect(console.log).toHaveBeenCalledWith('Январь');
    });

    it('should handle invalid inputs', () => {
        prompt.mockImplementation(() => '13');
        console.log = jest.fn();
        monthNumber();
        expect(prompt).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledWith('Задача 2: ');
        expect(console.log).toHaveBeenCalledWith('Bad number');
    });

    it('should handle non-numeric inputs', () => {
        prompt.mockImplementation(() => 'abc');
        console.log = jest.fn();
        monthNumber();
        expect(prompt).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledWith('Задача 2: ');
        expect(console.log).toHaveBeenCalledWith('Bad number');
    });
});

describe('circleAndSquare function', () => {
    it('should log whether a circle fits in a square', () => {
        console.log = jest.fn();
        circleAndSquare(10, 16);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Задача 3: Помещается');
    });

    it('should handle cases where the circle does not fit in the square', () => {
        console.log = jest.fn();
        circleAndSquare(10, 9);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Задача 3: Не помещается');
    });
});