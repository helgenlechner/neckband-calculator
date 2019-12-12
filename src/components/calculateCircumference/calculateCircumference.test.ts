import { check, property, gen } from 'testcheck';
import { calculateCircumference } from './calculateCircumference';

describe('calculateCircumference', () => {
    it('calculates the length of the neckband', () => {
        const diameterA = 14;
        const diameterB = 22;

        const expected = 57.24898131996681;
        const actual = calculateCircumference(diameterA, diameterB);

        expect(actual).toEqual(expected);
    });

    it('calculates the same length when diameter one and two are switched', () => {
        const commutativeDiameters = property(
            gen.posNumber.notEmpty(),
            gen.posNumber.notEmpty(),
            (num1, num2) => calculateCircumference(num1, num2) === calculateCircumference(num2, num1),
        );

        expect(check(commutativeDiameters)).toBeValidProperty();
    });

    it.each([
        [Infinity, 22],
        [14, Infinity],
    ])('returns undefined if any argument is Infinity', (diameterA, diameterB) => {
        const actual = calculateCircumference(diameterA, diameterB);

        expect(actual).toBeUndefined();
    });
});
