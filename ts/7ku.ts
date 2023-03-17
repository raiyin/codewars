//57cc981a58da9e302a000214
function smallEnough(a: number[], limit: number): boolean {
    return a.every(item => item <= limit);
}

//57ee99a16c8df7b02d00045f
function flattenAndSort(inputArray: number[][]): number[] {
    return inputArray.reduce((prev, cur) => prev.concat([...cur]), []).sort((a, b) => a - b);
}

//566fc12495810954b1000030
function nbDig(n: number, d: number): number {
    return Array.from(Array(n + 1).keys())
        .reduce((val, cur) => val + (cur * cur).toString().split('').filter(item => item === d.toString()).length, 0);
}

//5390bac347d09b7da40006f6
// String.prototype.toJadenCase = function () {
//     return this.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
// };

// interface String {      // Declaration needed, don't remove it
//     toJadenCase(): string;
// }

//5667e8f4e3f572a8f2000039
export function accum(s: string): string {
    // let charArr = [];
    // for (let i = 0; i < s.length; i++, charArr.push('-')) {
    //     charArr.push(s[i].toUpperCase());
    //     charArr.push(s[i].toLowerCase().repeat(i));
    // }
    // charArr.pop();
    // return charArr.join('');
    return s.split('').map((cur, i) => cur.toUpperCase() + cur.toLowerCase().repeat(i)).join('-');
}

//59cfc000aeb2844d16000075
export function capitalize(s: string) {
    return s.split('').reduce((acc, cur, i) => {
        let tempArr = [];
        if (i % 2 == 0) {
            tempArr.push(acc[0].concat(cur.toUpperCase()));
            tempArr.push(acc[1].concat(cur.toLowerCase()));
        }
        else {
            tempArr.push(acc[0].concat(cur.toLowerCase()));
            tempArr.push(acc[1].concat(cur.toUpperCase()));
        }
        return tempArr;
    }, ['', '']);
    // 1. export const capitalize = (s: string) => [
    //     [...s].map((l, i) => i % 2 ? l : l.toUpperCase()).join(''),
    //     [...s].map((l, i) => i % 2 ? l.toUpperCase() : l).join(''),
    // ];
}

//5a3dd29055519e23ec000074
export function checkExam(array1: string[], array2: string[]): number {
    let result = array1.reduce((acc, cur, i) => {
        if (array2[i] === "")
            return acc;
        return acc + ((cur === array2[i]) ? 4 : -1);
    }, 0);
    return result < 0 ? 0 : result;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
