//57cc981a58da9e302a000214
function smallEnough(a: number[], limit: number): boolean {
    return a.every(item => item <= limit);
}

//57ee99a16c8df7b02d00045f
function flattenAndSort(inputArray: number[][]): number[] {
    return inputArray.reduce((prev, cur) => prev.concat([...cur]), []).sort((a, b) => a - b);
}

console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));
