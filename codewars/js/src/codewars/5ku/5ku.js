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

// 52685f7382004e774f0001f7
function humanReadable(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    let sec = seconds - hours * 3600 - minutes * 60;
    return hours.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    }) + ':' + minutes.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    }) + ':' + sec.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
}
// 1.
// var pad = function(x) { return (x < 10) ? "0"+x : x; }
// return pad(parseInt(seconds / (60*60))) + ":" +
//        pad(parseInt(seconds / 60 % 60)) + ":" +
//        pad(seconds % 60)


// 513e08acc600c94f01000001
function rgb(r, g, b) {
    if (r < 0)
        r = 0;
    if (g < 0)
        g = 0;
    if (b < 0)
        b = 0;
    if (r > 255)
        r = 255;
    if (g > 255)
        g = 255;
    if (b > 255)
        b = 255;
    return `${r < 16 ? '0' : ''}${r.toString(16)}${g < 16 ? '0' : ''}${g.toString(16)}${b < 16 ? '0' : ''}${b.toString(16)}`.toUpperCase();
}
// 1.
// return [r,g,b].map(function(x) {
//     return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
// }).join('').toUpperCase();
// 2.
// const rgb = (...arg) => arg
//   .map(it => Math.max(Math.min(it, 255), 0)
//     .toString(16)
//     .padStart(2, '0')
//     .toUpperCase()
//    ).join('');

// 5b258cf6d74b5b7105000035
function checkCoord(i, j, n, m) {
    if (i < 0 || j <= 0 || i > n - 1 || j > m - 1)
        return false;
    return true;
}

function containsObject(obj, list) {
    return list.some(elem => elem.i === obj.i && elem.j === obj.j);
}

function findMostAdjacent(grid) {
    let checked = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (containsObject(checked, { i: i, j: j }))
                continue;

            checked.push({ i: i, j: j });
        }
    }
    return [0, 0];
}

console.log(rgb(26, 0, 0));
