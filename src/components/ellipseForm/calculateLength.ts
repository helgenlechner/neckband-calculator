export const calculateLength = (diameterOne: number, diameterTwo: number, seamAllowance: number, width: number) => {
    if (
        diameterOne < 1
        || diameterTwo < 1
        || seamAllowance < 0
        || width < 1
        || diameterOne === Infinity
        || diameterTwo === Infinity
        || seamAllowance === Infinity
        || width === Infinity
        || seamAllowance >= diameterOne
        || seamAllowance >= diameterTwo
        || width >= diameterOne
        || width >= diameterTwo
        || diameterOne / diameterTwo > 50
        || diameterTwo / diameterOne > 50
    ) {
        return undefined;
    }

    const neckHoleLongRadius = Math.max(diameterOne, diameterTwo) / 2 + seamAllowance;
    const neckHoleShortRadius = Math.min(diameterOne, diameterTwo) / 2 + seamAllowance;

    const finishedNeckbandWidth = width / 2 - seamAllowance;

    const neckBandInnerLongRadius = neckHoleLongRadius - finishedNeckbandWidth;
    const neckBandInnerShortRadius = neckHoleShortRadius - finishedNeckbandWidth;

    const h = Math.pow(neckBandInnerLongRadius - neckBandInnerShortRadius, 2) / Math.pow(neckBandInnerLongRadius + neckBandInnerShortRadius, 2);

    const innerCircumference = Math.PI * (neckBandInnerLongRadius + neckBandInnerShortRadius) * (1 + ((3 * h) / (10 + Math.sqrt(4 - 3 * h))));

    return innerCircumference + 2 * seamAllowance;
};
