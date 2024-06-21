import { formatDate } from "./formatDate.js";

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