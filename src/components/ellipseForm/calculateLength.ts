export const calculateLength = (diameterOne: number, diameterTwo: number, seamAllowance: number, width: number) => {
    const diameterA = diameterOne + seamAllowance - width;
    const diameterB = diameterTwo + seamAllowance - width;

    const radiusA = Math.max(diameterA, diameterB) / 2;
    const radiusB = Math.min(diameterA, diameterB) / 2;

    const h = Math.pow(radiusA - radiusB, 2) / Math.pow(radiusA + radiusB, 2);

    const innerCircumference = Math.PI * (radiusA + radiusB) * (1 + ((3 * h) / (10 + Math.sqrt(4 - 3 * h))));

    return innerCircumference + 2 * seamAllowance;
};
