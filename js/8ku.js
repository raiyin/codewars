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


assert.strictEqual(numberToString(67), '67', 'Numbers are not equal!');
