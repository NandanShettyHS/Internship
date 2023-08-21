function findMaxValue(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    let maxValue = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxValue) {
            maxValue = numbers[i];
        }
    }

    return maxValue;
}

const numbers = [8, 2, 10, 1, 6, 3];
const max = findMaxValue(numbers);
console.log("The maximum value is:", max);