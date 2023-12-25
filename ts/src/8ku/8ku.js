"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = exports.solution = exports.updateLight = exports.fakeBin = exports.rentalCarCost = exports.paperwork = void 0;
function paperwork(n, m) {
    if (n < 0 || m < 0)
        return 0;
    return n * m;
    // 1. return (n < 1 || m < 1) ? 0 : n * m;
}
exports.paperwork = paperwork;
//568d0dd208ee69389d000016
function rentalCarCost(d) {
    let rentOff = 0;
    if (d >= 7)
        rentOff = 50;
    else if (d >= 3)
        rentOff = 20;
    return d * 40 - rentOff;
}
exports.rentalCarCost = rentalCarCost;
//57eae65a4321032ce000002d
const fakeBin = (x) => {
    return x.split('').map(item => (+item < 5 ? 0 : 1)).join('');
};
exports.fakeBin = fakeBin;
//58649884a1659ed6cb000072
function updateLight(current) {
    switch (current) {
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
        default:
            return 'green';
    }
    // 1. 
    // const L = ['green', 'yellow', 'red', 'green']
    // return L[L.indexOf(current)+1]
    // 2.
    //const objTraffic: Record<string,string> = {
    //    "green" : "yellow",
    //    "red": "green",
    //    "yellow": "red"
    //  }
    //return objTraffic[current]
}
exports.updateLight = updateLight;
//5174a4c0f2769dd8b1000003
function solution(nums) {
    return nums.sort((a, b) => a - b);
}
exports.solution = solution;
function factorial(n) {
    if (n === 1 || n === 0)
        return 1;
    else
        return n * factorial(n - 1);
}
exports.factorial = factorial;
