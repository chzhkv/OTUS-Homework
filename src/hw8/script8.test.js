import { formatDate } from "./formatDate.js";
import { determiningDayOfWeek } from "./determiningDayOfWeek.js";
import { minutesCounter } from "./minutesCounter.js";
describe ('formatDate', () => {
    it('is a function', () => {
        expect(formatDate).toBeInstanceOf(Function)
    });

    it('formatDate return count of ms startred from 01.01.1970 00:00:00', () => {
        expect(formatDate('01.01.2024')).toBe(1704067200000)
    });

    it('formatDate should have an arguments in format DD.MM.YYYY', () => {
        expect(formatDate('01.01.2024')).not.toEqual(formatDate('2024-01-01'))
        expect(formatDate('01.01.2024')).not.toEqual(formatDate('01-01-2024'))
        expect(formatDate('01.01.2024')).not.toEqual(formatDate('01012024'))
        expect(formatDate('01.01.2024')).not.toEqual(formatDate('2024.01.01'))
        expect(formatDate('01.01.2024')).not.toEqual(formatDate('01/01/2024'))
    });

})

describe('determiningDayOfWeek', () => {
    beforeEach(() => {
        global.prompt = jest.fn();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should return the correct day of the week', () => {
        global.prompt.mockImplementation(() => '01.07.2024');
        const consoleLogSpy = jest.spyOn(console, 'log');

        determiningDayOfWeek();

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(consoleLogSpy).toHaveBeenCalledWith('Задача 1: Понедельник');
    });

    it('should throw an error if input is not in the correct format', () => {
        global.prompt.mockImplementation(() => '01-07-2024');

        expect(determiningDayOfWeek).toThrowError('Invalid date format. Please use DD.MM.YYYY');
    });

    it('should throw an error if input is not a valid date', () => {
        global.prompt.mockImplementation(() => '30.02.2024');

        expect(determiningDayOfWeek).toThrowError('Invalid date');
    });
});

describe('minutesCounter', () => {
    it('should correctly calculate the total minutes', () => {
        const originalGetHours = Date.prototype.getHours;
        const originalGetMinutes = Date.prototype.getMinutes;

        Date.prototype.getHours = jest.fn(() => 11);
        Date.prototype.getMinutes = jest.fn(() => 42);

        const consoleLogSpy = jest.spyOn(console, 'log');

        minutesCounter();

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(consoleLogSpy).toHaveBeenCalledWith('Задача 2: 702');

        Date.prototype.getHours = originalGetHours;
        Date.prototype.getMinutes = originalGetMinutes;
    });
});