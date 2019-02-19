import { check, property, gen } from 'testcheck';
import { calculateLength } from './calculateLength';

describe('calculateLength', () => {
    it('calculates the length of the neckband', () => {
        const diameterA = 14;
        const diameterB = 22;
        const seamAllowance = 1;
        const width = 5.3;

        const expected = 49.040298590526085;
        const actual = calculateLength(diameterA, diameterB, seamAllowance, width);

        expect(actual).toEqual(expected);
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
