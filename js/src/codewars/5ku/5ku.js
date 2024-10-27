// 52597aa56021e91c93000cb0
function moveZeros(arr) {
    let zero_arr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            zero_arr.push(0);
            arr.splice(i, 1);
            i++;
        }
    }
    arr.push(...zero_arr);
    return arr;
}
// 1.
// return [
//     ...(arr.filter(n => n !== 0)),
//     ...(arr.filter(n => n === 0))
// ];
// 2.
// return arr.sort((a, b) => b === 0 ? -1 : 0);

// 520b9d2ad5c005041100000f
function pigIt(str) {
    let words = str.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
        if (/\p{L}/u.test(words[i][0])) {
            words[i] = words[i].slice(1, words[i].length) + words[i][0] + 'ay';
        }
    }
    result = words.join(' ');
    return result;
}
// 1.
// return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3");
// 2.
// return str.replace(/\w+/g, (w) => { return w.slice(1) + w[0] + 'ay'; });

console.log(pigIt('Hello world !'));
