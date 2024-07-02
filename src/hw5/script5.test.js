import {sumEl} from "./sumEl.js";
import {createNewNums} from "./createNewNums.js";
import {minMaxEl} from "./minMaxEl.js";

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let negativeNums = [-1, -2, -3, -4, -5];
describe('sumEl function', () => {
    it('should calculate the sum of elements in the array', () => {
        console.log = jest.fn();
        sumEl(nums);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(55);
    });

    it('should handle empty arrays', () => {
        console.log = jest.fn();
        sumEl([]);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(0);
    });

    it('should handle arrays with negative numbers', () => {
        console.log = jest.fn();
        sumEl(negativeNums);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(-15);
    });
});

describe('createNewNums function', () => {
    it('should create a new array with elements doubled', () => {
        console.log = jest.fn();
        createNewNums(nums);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    });

    it('should handle empty arrays', () => {
        console.log = jest.fn();
        createNewNums([]);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith([]);
    });

    it('should handle arrays with negative numbers', () => {
        console.log = jest.fn();
        createNewNums(negativeNums);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith([-2, -4, -6, -8, -10]);
    });
});

describe('minMaxEl function', () => {
    it('should find the minimum and maximum elements in the array', () => {
        console.log = jest.fn();
        minMaxEl(nums);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('min: 1 max: 10');
    });

    it('should handle empty arrays', () => {
        console.log = jest.fn();
        minMaxEl([]);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('min: Infinity max: -Infinity');
    });

    it('should handle arrays with negative numbers', () => {
        console.log = jest.fn();
        minMaxEl(negativeNums);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('min: -5 max: -1');
    });
});