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

//563b662a59afc2b5120000c6
export const nbYear = (p0: number, percent: number, aug: number, p: number): number => {
    let counter = 0;
    let population = p0;
    while (population < p) {
        population = Math.floor(population + population * percent / 100 + aug);
        counter++;
    }
    return counter;
};

//539de388a540db7fec000642
export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
    return (enteredCode === correctCode) && (Date.parse(currentDate) <= Date.parse(expirationDate));
}

export function rowWeights(arr: number[]) {
    return arr.reduce((acc, cur, index) => index % 2 ? [acc[0], acc[1] + cur] : [acc[0] + cur, acc[1]], [0, 0]);
    // 1. return arr.reduce((r, e, i) => (r[i % 2] += e, r), [0, 0])
}

export function isSortedAndHow(array: number[]): string {
    if (array.every((v, i, a) => !i || a[i - 1] <= v))
        return 'yes, ascending';
    else if (array.every((v, i, a) => !i || a[i - 1] >= v))
        return 'yes, descending';
    return 'no';
}

export function adjacentElementsProduct(arr: number[]): number {
    let max = arr[0] * arr[1];
    for (let i = 2; i < arr.length; i++)
        if (max < arr[i] * arr[i - 1])
            max = arr[i] * arr[i - 1];
    return max;
    // 1. return Math.max(...arr.slice(1).map((x, i) => x * arr[i]))
}

export function sumTriangularNumbers(n: number): number {
    if (n < 0)
        return 0;
    let sum = 0;
    for (let i = 1; i <= n; i++)
        sum += i * (i + 1) / 2;
    return sum;
}

export function predictAge(age1: number, age2: number, age3: number, age4: number, age5: number, age6: number, age7: number, age8: number): number {
    return Math.floor(Math.sqrt(age1 * age1 + age2 * age2 + age3 * age3 + age4 * age4 + age5 * age5 + age6 * age6 + age7 * age7 + age8 * age8) / 2);
};

export function solve(s: string) {
    let fact = s.split('').reduce((acc, cur, i) => {
        if (cur.toLowerCase() === cur) {
            acc[0]++;
        }
        else
            acc[1]++;
        return acc;
    }, [0, 0]);
    return fact[0] >= fact[1] ? s.toLowerCase() : s.toUpperCase();
}

//5467e4d82edf8bbf40000155
export function descendingOrder(n: number): number {
    return +n.toString().split('').map(item => +item).sort((a, b) => b - a).join('');
}

console.log(descendingOrder(123456789));
