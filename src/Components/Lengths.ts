type LengthUnit = 'meters' | 'kilometers' | 'miles' | 'feet' | 'inches';

const conversionFactors: { [key in LengthUnit]: number } = {
    meters: 1,
    kilometers: 1000,
    miles: 1609.34,
    feet: 0.3048,
    inches: 0.0254,
};

function convertLength(value: number, fromUnit: LengthUnit, toUnit: LengthUnit): number {
    const valueInMeters = value * conversionFactors[fromUnit];
    const convertedValue = valueInMeters / conversionFactors[toUnit];
    return convertedValue;
}

// Example usage:
const lengthInKilometers = convertLength(5, 'miles', 'kilometers');
console.log(lengthInKilometers);