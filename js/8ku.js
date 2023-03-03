import { assert } from 'chai';

function numberToString(num) {
    return num.toString();
}

//523b4ff7adca849afe000035
const greet = () => "hello world!";

//53369039d7ab3ac506000467
function boolToWord(bool) {
    return bool ? 'Yes' : 'No';
}

//5715eaedb436cf5606000381
function positiveSum(arr) {
    return arr.filter(item => item > 0).reduce((acc, currentValue) => acc + currentValue, 0);
}

//59ca8246d751df55cc00014c
function hero(bullets, dragons) {
    return (bullets >= dragons * 2) ? true : false;
}

//5ab6538b379d20ad880000ab
const areaOrPerimeter = function (l, w) {
    return l === w ? l ** 2 : 2 * (l + w);
};

//5583090cbe83f4fd8c000051
function digitize(n) {
    if (n == 0)
        return [0];

    let strNum = n.toString();
    let result = [];
    for (let i = strNum.length - 1; i >= 0; i--) {
        result.push(Number(strNum[i]));
    }
    return result;
    // Alternatives.
    // 1.
    // return String(n).split('').map(Number).reverse()
    // 2.
    // return Array.from(String(n), Number).reverse();
    // 3.
    // digitize = n => [...String(n)].map(Number).reverse() 
}

//57f781872e3d8ca2a000007e
const maps = (x) => x.map(item => item * 2);

//582cb0224e56e068d800003c
const litres = (time) => Math.floor(time / 2);

//58f8a3a27a5c28d92e000144
function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let a = arr[i] + 1;
        let b = arr[i + 1];
        if (a !== b) {
            return b;
        }
    }
    return null;
}

//5259b20d6021e9e14c0010d4
function reverseWords(str) {
    return str.split(' ').map(item => item.split('').reverse().join('')).join(' ');
}

//55a2d7ebe362935a210000b2
function findSmallestInt(args) {
    return Math.min(...args);
}

//55cbd4ba903825f7970000f5
function getGrade(s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3;
    if (average < 60)
        return 'F';
    else if (average < 70)
        return 'D';
    else if (average < 80)
        return 'C';
    else if (average < 90)
        return 'B';
    else
        return 'A';
}

console.log(getGrade(95, 90, 93));
