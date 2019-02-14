import { check, property, gen } from 'testcheck';
import { calculateLength } from './calculateLength';

describe('calculateLength', () => {
    it('calculates the length of the neckband', () => {
        const diameterA = 14;
        const diameterB = 22;
        const seamAllowance = 1;
        const width = 5.3;

        const expected = 45.96206751637906;
        const actual = calculateLength(diameterA, diameterB, seamAllowance, width);

        expect(actual).toEqual(expected);
    });

    it.skip('calculates the same length when diameter one and two are switched', () => {
        const commutativeDiameters = property(
            gen.numberWithin(5, 200),
            gen.numberWithin(5, 200),
            gen.numberWithin(0, 1),
            gen.numberWithin(15, 200),
            (num1, num2, num3, num4) => {
                console.log(num1, num2, num3, num4);
                return calculateLength(num1, num2, num3, num4) === calculateLength(num2, num1, num3, num4);
            },
        );

        expect(check(commutativeDiameters)).toBeValidProperty();
    });
});
