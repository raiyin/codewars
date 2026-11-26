// Sum of positive (https://www.codewars.com/kata/5715eaedb436cf5606000381/)
function positiveSum(arr: number[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// Square(n) Sum (https://www.codewars.com/kata/515e271a311df0350d00000f)
function squareSum(numbers: number[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i];
    }
    return sum;
}

// Remove First and Last Character (https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0)
export function removeChar(str: string): string {
    return str.slice(1, -1);
}

// Count of positives / sum of negatives (https://www.codewars.com/kata/576bb71bbbcf0951d5000044)
export function countPositivesSumNegatives(input: number[] | null): number[] {
    if (input == null || input.length == 0)
        return [];

    let result = [0, 0];
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0)
            result[0]++;
        else if (input[i] < 0)
            result[1] += input[i];
    }
    return result;
}

// console.log(positiveSum([1, 2, 3, 4, 5]));  // =15
console.log(squareSum([0, 3, 4, 5])); // =50
