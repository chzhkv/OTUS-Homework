import {isDate} from "./isDate.js";
import {isEmail} from "./isEmail.js";
import {isPhone} from "./isPhone.js";

global.prompt = jest.fn();
describe('isDate function', () => {
    it('should validate a date in the format DD/MM/YYYY', () => {
        prompt.mockImplementationOnce(() => '12/12/2022');
        console.log = jest.fn();
        isDate();
        expect(prompt).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(true);
    });

    it('should validate a date in the format DD-MM-YYYY', () => {
        prompt.mockImplementationOnce(() => '12-12-2022');
        console.log = jest.fn();
        isDate();
        expect(prompt).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(true);
    });

    it('should validate a date in the format DD.MM.YYYY', () => {
        prompt.mockImplementationOnce(() => '12.12.2022');
        console.log = jest.fn();
        isDate();
        expect(prompt).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(true);
    });

    it('should invalidate an invalid date', () => {
        prompt.mockImplementationOnce(() => '12/13/2022');
        console.log = jest.fn();
        isDate();
        expect(prompt).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(false);
    });
});

describe('isEmail function', () => {
    it('should validate a valid email', () => {
        prompt.mockImplementationOnce(() => 'example@example.com');
        console.log = jest.fn();
        isEmail();
        expect(prompt).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(true);
    });

    it('should invalidate an invalid email', () => {
        prompt.mockImplementationOnce(() => 'example@');
        console.log = jest.fn();
        isEmail();
        expect(prompt).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(false);
    });

    it('should invalidate an email with spaces', () => {
        prompt.mockImplementationOnce(() => 'example @example.com');
        console.log = jest.fn();
        isEmail();
        expect(prompt).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(false);
    });
});

describe('isPhone function', () => {
    it('should validate a valid phone number', () => {
        prompt.mockImplementationOnce(() => '+16308520397');
        console.log = jest.fn();
        isPhone();
        expect(prompt).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(true);
    });

    it('should invalidate an invalid phone number', () => {
        prompt.mockImplementationOnce(() => '1-1-1');
        console.log = jest.fn();
        isPhone();
        expect(prompt).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(false);
    });

    it('should invalidate a phone number with letters', () => {
        prompt.mockImplementationOnce(() => '+1 (123) 456-abc0');
        console.log = jest.fn();
        isPhone();
        expect(prompt).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(false);
    });
});