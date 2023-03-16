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
exports.accum = void 0;
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
    return s.split('').reduce(function (acc, cur, i) { return acc + cur.toUpperCase() + cur.toLowerCase().repeat(i) + '-'; }, '');
}
exports.accum = accum;
console.log(accum("ZpglnRxqenU"));
