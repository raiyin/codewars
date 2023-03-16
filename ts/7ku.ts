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

console.log(accum("ZpglnRxqenU"));
