export const calculateCircumference = (diameterOne: number, diameterTwo: number) => {
    if (
        diameterOne < 1
        || diameterTwo < 1
        || diameterOne === Infinity
        || diameterTwo === Infinity
        || diameterOne > 10000000
        || diameterTwo > 10000000
    ) {
        return undefined;
    }

    const neckHoleLongRadius = Math.max(diameterOne, diameterTwo) / 2;
    const neckHoleShortRadius = Math.min(diameterOne, diameterTwo) / 2;

    const h = Math.pow(neckHoleLongRadius - neckHoleShortRadius, 2) / Math.pow(neckHoleLongRadius + neckHoleShortRadius, 2);

    return Math.PI * (neckHoleLongRadius + neckHoleShortRadius) * (1 + ((3 * h) / (10 + Math.sqrt(4 - 3 * h))));
};
