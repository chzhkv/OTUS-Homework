import { solve } from "./solve.js";
describe ('solve finds the roots of a quadratic equation', () => {
    it('is a function', () => {
        expect(solve).toBeInstanceOf(Function)
    });

    it('equation has no real roots', () => {
        expect(solve(4,4,4)).toBe('Уравнение не имеет реальных корней')
    });

    it('equation has one roots', () => {
        expect(solve(1,12,36)).toBe('Уравнение имеет один корень: -6')
    });

    it('equation has two roots', () => {
        expect(solve(1,-2,-3)).toBe('Уравнение имеет два корня: 3 и -1')
    });

})