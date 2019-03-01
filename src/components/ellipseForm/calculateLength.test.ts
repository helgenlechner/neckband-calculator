import { check, property, gen } from 'testcheck';
import { calculateLength } from './calculateLength';

describe('calculateLength', () => {
    it('calculates the length of the neckband', () => {
        const diameterA = 14;
        const diameterB = 22;
        const seamAllowance = 1;
        const width = 5.3;

        const expected = 55.219812301723145;
        const actual = calculateLength(diameterA, diameterB, seamAllowance, width);

        expect(actual).toEqual(expected);
    });

    it('returns undefined if the seam allowance is below 0', () => {
        const diameterA = 14;
        const diameterB = 22;
        const seamAllowance = -1;
        const width = 5.3;

        const actual = calculateLength(diameterA, diameterB, seamAllowance, width);

        expect(actual).toBeUndefined();
    });

    it('calculates the length if the seam allowance is 0', () => {
        const diameterA = 14;
        const diameterB = 22;
        const seamAllowance = 0;
        const width = 5.3;

        const expected = 40.89399780910991;
        const actual = calculateLength(diameterA, diameterB, seamAllowance, width);

        expect(actual).toEqual(expected);
    });

    it.each([
        [Infinity, 22, 1.5, 4.8],
        [14, Infinity, 1.5, 4.8],
        [14, 22, Infinity, 4.8],
        [14, 22, 1.5, Infinity],
    ])('returns undefined if any argument is Infinity', (diameterA, diameterB, seamAllowance, width) => {
        const actual = calculateLength(diameterA, diameterB, seamAllowance, width);

        expect(actual).toBeUndefined();
    });

    it('calculates the same length when diameter one and two are switched', () => {
        const commutativeDiameters = property(
            gen.posNumber.notEmpty(),
            gen.posNumber.notEmpty(),
            gen.posNumber.notEmpty(),
            gen.posNumber.notEmpty(),
            (num1, num2, num3, num4) => calculateLength(num1, num2, num3, num4) === calculateLength(num2, num1, num3, num4),
        );

        expect(check(commutativeDiameters)).toBeValidProperty();
    });
});
