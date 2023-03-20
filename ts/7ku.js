"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.isSortedAndHow = exports.rowWeights = exports.checkCoupon = exports.nbYear = exports.checkExam = exports.capitalize = exports.accum = void 0;
//57cc981a58da9e302a000214
function smallEnough(a, limit) {
    return a.every(function (item) { return item <= limit; });
}
//57ee99a16c8df7b02d00045f
function flattenAndSort(inputArray) {
    return inputArray.reduce(function (prev, cur) { return prev.concat(__spreadArray([], cur, true)); }, []).sort(function (a, b) { return a - b; });
}
//566fc12495810954b1000030
function nbDig(n, d) {
    return Array.from(Array(n + 1).keys())
        .reduce(function (val, cur) { return val + (cur * cur).toString().split('').filter(function (item) { return item === d.toString(); }).length; }, 0);
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
    return s.split('').map(function (cur, i) { return cur.toUpperCase() + cur.toLowerCase().repeat(i); }).join('-');
}
exports.accum = accum;
//59cfc000aeb2844d16000075
function capitalize(s) {
    return s.split('').reduce(function (acc, cur, i) {
        var tempArr = [];
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
    var result = array1.reduce(function (acc, cur, i) {
        if (array2[i] === "")
            return acc;
        return acc + ((cur === array2[i]) ? 4 : -1);
    }, 0);
    return result < 0 ? 0 : result;
}
exports.checkExam = checkExam;
//563b662a59afc2b5120000c6
var nbYear = function (p0, percent, aug, p) {
    var counter = 0;
    var population = p0;
    while (population < p) {
        population = Math.floor(population + population * percent / 100 + aug);
        counter++;
    }
    return counter;
};
exports.nbYear = nbYear;
//539de388a540db7fec000642
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    return (enteredCode === correctCode) && (Date.parse(currentDate) <= Date.parse(expirationDate));
}
exports.checkCoupon = checkCoupon;
function rowWeights(arr) {
    return arr.reduce(function (acc, cur, index) { return index % 2 ? [acc[0], acc[1] + cur] : [acc[0] + cur, acc[1]]; }, [0, 0]);
    // 1. return arr.reduce((r, e, i) => (r[i % 2] += e, r), [0, 0])
}
exports.rowWeights = rowWeights;
function isSortedAndHow(array) {
    if (array.every(function (v, i, a) { return !i || a[i - 1] <= v; }))
        return 'yes, ascending';
    else if (array.every(function (v, i, a) { return !i || a[i - 1] >= v; }))
        return 'yes, descending';
    return 'no';
}
exports.isSortedAndHow = isSortedAndHow;
console.log(isSortedAndHow([1, 2]));
