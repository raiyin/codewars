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

console.log(longest('aretheyhere'));
