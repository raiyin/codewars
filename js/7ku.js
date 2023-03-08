//53dbd5315a3c69eed20002dd
const filter_list = (l) => l.filter(item => typeof item !== 'string');

//52fba66badcd10859f00097e
function disemvowel(str) {
    const regex = /[aeuio]/ig;
    return str.replaceAll(regex, '');
}

//559590633066759614000063
const minMax = arr => [Math.min(...arr), Math.max(...arr)];

//5656b6906de340bd1b0000ac
function longest(s1, s2) {
    // 1. (s1, s2) => [...new Set(s1 + s2)].sort().join('')
    return (s1 + s2).split('').filter((v, i, arr) => arr.indexOf(v) === i).sort().join('');
}

//5949481f86420f59480000e7
function oddOrEven(array) {
    return array.reduce((partialSum, a) => partialSum + a, 0) % 2 ? 'odd' : 'even';
}

//555eded1ad94b00403000071
const SeriesSum = n => [...Array(n).keys()].reduce((result, i) => result + 1 / (1 + i * 3), 0).toFixed(2);

//542c0f198e077084c0000c2e
function getDivisorsCnt(n) {
    return [...Array(n / 2 + 1).keys()].filter(item => n % item === 0).length + 1;
}

//54bf85e3d5b56c7a05000cf9
var number = function (array) {
    return array.map((item, index) => ((index + 1) + ': ' + item));
};

//54c27a33fb7da0db0100040e
var isSquare = function (n) {
    // 1. return Math.sqrt(n) % 1 === 0;
    // 2. const isSquare = n => Number.isInteger(Math.sqrt(n));
    return Math.pow(Math.floor(Math.sqrt(n)), 2) === n;
};

//55908aad6620c066bc00002a
function XO(str) {
    str = str.toLowerCase();
    return str.split('').filter(item => item == 'o').length === str.split('').filter(item => item == 'x').length;
}

console.log(XO("xxxm"));
