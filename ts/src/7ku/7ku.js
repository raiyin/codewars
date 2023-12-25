"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solveone = exports.oper = exports.horMirror = exports.vertMirror = exports.minSum = exports.noOdds = exports.vowelIndices = exports.descendingOrder = exports.solve = exports.predictAge = exports.sumTriangularNumbers = exports.adjacentElementsProduct = exports.isSortedAndHow = exports.rowWeights = exports.checkCoupon = exports.nbYear = exports.checkExam = exports.capitalize = exports.accum = void 0;
//57cc981a58da9e302a000214
function smallEnough(a, limit) {
    return a.every((item) => item <= limit);
}
//57ee99a16c8df7b02d00045f
function flattenAndSort(inputArray) {
    return inputArray
        .reduce((prev, cur) => prev.concat([...cur]), [])
        .sort((a, b) => a - b);
}
//566fc12495810954b1000030
function nbDig(n, d) {
    return Array.from(Array(n + 1).keys()).reduce((val, cur) => val +
        (cur * cur)
            .toString()
            .split('')
            .filter((item) => item === d.toString()).length, 0);
}
//5390bac347d09b7da40006f6
// String.prototype.toJadenCase = function () {
//     return this.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
// };
// interface String {      // Declaration needed, don't remove it
//     toJadenCase(): string;
// }
//5667e8f4e3f572a8f2000039
function accum(s) {
    // let charArr = [];
    // for (let i = 0; i < s.length; i++, charArr.push('-')) {
    //     charArr.push(s[i].toUpperCase());
    //     charArr.push(s[i].toLowerCase().repeat(i));
    // }
    // charArr.pop();
    // return charArr.join('');
    return s
        .split('')
        .map((cur, i) => cur.toUpperCase() + cur.toLowerCase().repeat(i))
        .join('-');
}
exports.accum = accum;
//59cfc000aeb2844d16000075
function capitalize(s) {
    return s.split('').reduce((acc, cur, i) => {
        const tempArr = [];
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
exports.capitalize = capitalize;
//5a3dd29055519e23ec000074
function checkExam(array1, array2) {
    const result = array1.reduce((acc, cur, i) => {
        if (array2[i] === '')
            return acc;
        return acc + (cur === array2[i] ? 4 : -1);
    }, 0);
    return result < 0 ? 0 : result;
}
exports.checkExam = checkExam;
//563b662a59afc2b5120000c6
const nbYear = (p0, percent, aug, p) => {
    let counter = 0;
    let population = p0;
    while (population < p) {
        population = Math.floor(population + (population * percent) / 100 + aug);
        counter++;
    }
    return counter;
};
exports.nbYear = nbYear;
//539de388a540db7fec000642
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    return (enteredCode === correctCode &&
        Date.parse(currentDate) <= Date.parse(expirationDate));
}
exports.checkCoupon = checkCoupon;
function rowWeights(arr) {
    return arr.reduce((acc, cur, index) => index % 2 ? [acc[0], acc[1] + cur] : [acc[0] + cur, acc[1]], [0, 0]);
    // 1. return arr.reduce((r, e, i) => (r[i % 2] += e, r), [0, 0])
}
exports.rowWeights = rowWeights;
function isSortedAndHow(array) {
    if (array.every((v, i, a) => !i || a[i - 1] <= v))
        return 'yes, ascending';
    else if (array.every((v, i, a) => !i || a[i - 1] >= v))
        return 'yes, descending';
    return 'no';
}
exports.isSortedAndHow = isSortedAndHow;
function adjacentElementsProduct(arr) {
    let max = arr[0] * arr[1];
    for (let i = 2; i < arr.length; i++)
        if (max < arr[i] * arr[i - 1])
            max = arr[i] * arr[i - 1];
    return max;
    // 1. return Math.max(...arr.slice(1).map((x, i) => x * arr[i]))
}
exports.adjacentElementsProduct = adjacentElementsProduct;
function sumTriangularNumbers(n) {
    if (n < 0)
        return 0;
    let sum = 0;
    for (let i = 1; i <= n; i++)
        sum += (i * (i + 1)) / 2;
    return sum;
}
exports.sumTriangularNumbers = sumTriangularNumbers;
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    return Math.floor(Math.sqrt(age1 * age1 +
        age2 * age2 +
        age3 * age3 +
        age4 * age4 +
        age5 * age5 +
        age6 * age6 +
        age7 * age7 +
        age8 * age8) / 2);
}
exports.predictAge = predictAge;
function solve(s) {
    const fact = s.split('').reduce((acc, cur, i) => {
        if (cur.toLowerCase() === cur) {
            acc[0]++;
        }
        else
            acc[1]++;
        return acc;
    }, [0, 0]);
    return fact[0] >= fact[1] ? s.toLowerCase() : s.toUpperCase();
}
exports.solve = solve;
//5467e4d82edf8bbf40000155
function descendingOrder(n) {
    return +n
        .toString()
        .split('')
        .map((item) => +item)
        .sort((a, b) => b - a)
        .join('');
}
exports.descendingOrder = descendingOrder;
//5680781b6b7c2be860000036
function vowelIndices(word) {
    return word
        .toLowerCase()
        .split('')
        .reduce((acc, cur, i) => {
        if (cur === 'a' ||
            cur === 'e' ||
            cur === 'i' ||
            cur === 'o' ||
            cur === 'u' ||
            cur === 'y')
            acc.push(i + 1);
        return acc;
    }, Array());
}
exports.vowelIndices = vowelIndices;
//51fd6bc82bc150b28e0000ce
function noOdds(values) {
    return values.filter((item) => item % 2 === 0);
}
exports.noOdds = noOdds;
function minSum(arr) {
    let result = 0;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length / 2; i++) {
        result += arr[i] * arr[arr.length - i - 1];
    }
    return result;
}
exports.minSum = minSum;
//56dbe0e313c2f63be4000b25
function vertMirror(str) {
    return str
        .split('\n')
        .map((item) => item.split('').reverse().join(''))
        .join('\n');
}
exports.vertMirror = vertMirror;
function horMirror(str) {
    return str.split('\n').reverse().join('\n');
}
exports.horMirror = horMirror;
function oper(fct, s) {
    return fct(s);
}
exports.oper = oper;
//59d9ff9f7905dfeed50000b0
function solveone(arr) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    return arr.reduce((acc, cur) => {
        let counter = 0;
        cur = cur.toLocaleLowerCase();
        for (let j = 0; j < cur.length; j++) {
            if (cur[j] == alpha[j]) {
                counter++;
            }
        }
        acc.push(counter);
        return acc;
    }, Array());
}
exports.solveone = solveone;
console.log(solveone(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc']));
