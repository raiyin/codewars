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

console.log(digitize(35231));
