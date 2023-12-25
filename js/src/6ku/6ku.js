//514b92a657cdc65150000006
function solution(number) {
    if (number < 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}


//546f922b54af40e1e90001da
function alphabetPosition(text) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    return text.toLowerCase().split('').reduce((acc, curr) => {
        if (alpha.indexOf(curr) > -1) {
            acc.push(alpha.indexOf(curr) + 1);
        }
        return acc;
    }, []).join(' ');
}

//54da539698b8a2ad76000228
function isValidWalk(walk) {
    // return walk.length === 10
    //     && walk.filter(i => i === 'n').length === walk.filter(i => i === 's').length
    //     && walk.filter(i => i === 'w').length === walk.filter(i => i === 'e').length;
    // More optimized version.
    let dx = 0;
    let dy = 0;
    let dt = walk.length;
    walk.forEach(i => {
        if (i == 'n')
            dy++;
        else if (i == 's')
            dy--;
        else if (i == 'w')
            dx++;
        else
            dx--;
    });
    return dx === 0 && dy === 0 && dt === 10;
}

//5f7c38eb54307c002a2b8cc8
function removeParentheses(s) {
    let openIndex = 0;
    let closeIndicator = 0;
    for (let index = 0; index < s.length; index++) {
        if (s[index] === '(') {
            if (openIndex == 0)
                openIndex = index;
            closeIndicator++;
        }
        else if (s[index] === ')') {
            closeIndicator--;
            if (closeIndicator === 0) {
                s = s.split(s.slice(openIndex, index + 1)).join('');
                index = openIndex - 1;
                openIndex = 0;
            }
        }
        else if (index === s.length - 1 && openIndex !== 0) {
            s = s.substring(0, openIndex);
        }
    }
    return s;
}

//5895326bcc949f496b00003e
function boxBlur(image) {
    let width = image[0].length;
    let hight = image.length;
    let result = [];
    for (let i = 0; i < hight - 2; i++)
        result.push([]);

    for (let rowIndex = 1; rowIndex < hight - 1; rowIndex++) {
        for (let columnIndex = 1; columnIndex < width - 1; columnIndex++) {
            let prevRow = image[rowIndex - 1].slice(columnIndex - 1, columnIndex + 2).reduce((sum, num) => sum + num);
            let curRow = image[rowIndex].slice(columnIndex - 1, columnIndex + 2).reduce((sum, num) => sum + num);
            let nextRow = image[rowIndex + 1].slice(columnIndex - 1, columnIndex + 2).reduce((sum, num) => sum + num);
            let average = Math.floor((prevRow + curRow + nextRow) / 9);
            result[rowIndex - 1].push(average);
        }
    }
    return result;
    // 1. boxBlur = a => a.slice(1, -1).map((r, i) => r.slice(1, -1).map((_, j) => ((b = k => (t = a[i + k])[j] + t[j + 1] + t[j + 2])(0) + b(1) + b(2)) / 9 | 0));
}

var image = [
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]];

//57f4ccf0ab9a91c3d5000054
function chmodCalculator(perm) {
    const str2num = str => {
        let hexRight = 0;
        if (str.includes('r'))
            hexRight += 4;
        if (str.includes('w'))
            hexRight += 2;
        if (str.includes('x'))
            hexRight += 1;
        return hexRight;
    };
    let result = '';
    result += Object.keys(perm).includes('user') ? str2num(perm['user']) : '0';
    result += Object.keys(perm).includes('group') ? str2num(perm['group']) : '0';
    result += Object.keys(perm).includes('other') ? str2num(perm['other']) : '0';
    return result;
    // 1. return [p.user, p.group, p.other].map((p = '---') => (p[0] == 'r') * 4 + (p[1] == 'w') * 2 + (p[2] == 'x')).join('');
    // 2. if( 'user' in perm )
}

//576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
    return [...Array(nFloors + 1).keys()].slice(1).map(index => `${' '.repeat(nFloors - index)}${'*'.repeat(2 * index - 1)}${' '.repeat(nFloors - index)}`);
}

//58bf67eb68d8469e3c000041
function findDuplicatePhoneNumbers(phoneNumbers) {
    let mapping = {
        'a': '2', 'b': '2', 'c': '2', 'd': '3',
        'e': '3', 'f': '3', 'g': '4', 'h': '4',
        'i': '4', 'j': '5', 'k': '5', 'l': '5',
        'm': '6', 'n': '6', 'o': '6', 'p': '7',
        'r': '7', 's': '7', 't': '8', 'u': '8',
        'v': '8', 'w': '9', 'x': '9', 'y': '9',
        '1': '1', '2': '2', '3': '3', '4': '4',
        '5': '5', '6': '6', '7': '7', '8': '8',
        '9': '9', '0': '0'
    };
    let distincts = phoneNumbers.map(item => item.replaceAll('-', '').toLowerCase().split('').map(i => mapping[i]).join(''))
        .reduce((acc, cur, _, array) => {
            let count = array.filter(t => t == cur).length;
            if (count == 1)
                return acc;
            acc[cur] = array.filter(t => t == cur).length;
            return acc;
        }, {});
    return Object.keys(distincts)
        .reduce((acc, cur) => { acc.push(`${cur}:${distincts[cur]}`); return acc; }, [])
        .map(str => str.slice(0, 3) + '-' + str.slice(3))
        .sort();
}

//58bcd7f2f6d3b11fce000025
function directionInGrid(n, m) {
    while (true) {
        n--;
        if (n == 0)
            return 'R';

        m--;
        if (m == 0)
            return 'D';

        n--;
        if (n == 0)
            return 'L';

        m--;
        if (m == 0)
            return 'U';
    }
}

//58a6ac309b5762b7aa000030
function circleSlash(n) {
    let power = 0;
    while (2 ** power <= n)
        power++;
    let rest = n - 2 ** (power - 1);
    return 2 * rest + 1;
    // 1. return (n-Math.pow(2,~~Math.log2(n)))*2+1
}

//5264d2b162488dc400000001
function spinWords(str) {
    return str.split(' ').map(item => {
        if (item.length < 5)
            return item;
        else {
            return item.split('').reverse().join('');
        }
    }).join(' ');
}

//541c8630095125aba6000c00
function digitalRoot(n) {
    while (n.toString().length != 1)
        n = n.toString().split('').map(item => +item).reduce((acc, cur) => acc + cur, 0);
    return +n;
    // 1. return (n - 1) % 9 + 1;
}

//590938089ff3d186cb00004c
function suffixSums(a) {
    let sum = a.reduce((acc, cur) => acc + cur, 0);
    let n = a.length;
    let b = [sum];
    for (let i = 0; i <= n - 2; i++) {
        sum = sum - a[i];
        b.push(sum);
    }
    return b;
}

//58663693b359c4a6560001d6
function indexOf2dArray(array2d, itemtofind) {
    let index = array2d.flat().indexOf(itemtofind);
    let numColumns = array2d[0].length;
    let row = parseInt(index / numColumns);
    let col = index % numColumns;
    return [row, col];
}

function mazeRunner(maze, directions) {
    let position = indexOf2dArray(maze, 2);
    let dim = maze.length;
    for (let i = 0; i < directions.length; i++) {
        switch (directions[i]) {
            case 'N':
                position[0]--;
                break;
            case 'S':
                position[0]++;
                break;
            case 'E':
                position[1]++;
                break;
            case 'W':
                position[1]--;
                break;
            default:
                break;
        }

        if (position[0] >= dim || position[1] >= dim || position[0] < 0 || position[1] < 0)
            return 'Dead';

        switch (maze[position[0]][position[1]]) {
            case 1:
                return 'Dead';
            case 3:
                return 'Finish';
            default:
                break;
        }
    }

    return 'Lost';
}

var maze = [[1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 3],
[1, 0, 1, 0, 1, 0, 1],
[0, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 1],
[1, 2, 1, 0, 1, 0, 1]];
/////////////////////////////////////////

//599cf86d01a4108584000064
function lengthOfRailway(sounds) {
    sounds = sounds.replaceAll('呜呜呜', 's');
    sounds = sounds.replaceAll('哐当', 't');
    let speedHight = false;
    let dist = 0;

    for (let i = 0; i < sounds.length; i++) {
        if (sounds[i] === 's')
            speedHight = !speedHight;
        else if (sounds[i] === 't' && speedHight)
            dist += 20;
        else if (sounds[i] === 't' && !speedHight)
            dist += 10;
    }
    return dist;
}

//586560a639c5ab3a260000f3
function rotate(str) {
    let result = [];
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        arr.push(arr.shift());
        result.push(arr.join(''));
    }
    return result;
    // 1. return s.split("").map(e => s = s.slice(1) + s.slice(0, 1));
}

//5a86073fb17101e453000258
function sortEmotions(arr, order) {
    let transform = (emo) => {
        if (emo === 'T_T')
            return 0;
        if (emo === ':(')
            return 1;
        if (emo === ':|')
            return 2;
        if (emo === ':)')
            return 3;
        if (emo === ':D')
            return 4;
    };

    arr.sort((a, b) => order ? -1 * (transform(a) - transform(b)) : (transform(a) - transform(b)));
    return arr;

    // 1.
    // const emotions = { ':D': 1, ':)': 2, ':|': 3, ':(': 4, 'T_T': 5 };
    // arr = arr.sort((a, b) => emotions[a] - emotions[b]);
    // return order && arr || arr.reverse();
}

//52ea928a1ef5cfec800003ee
function ipToInt32(ip) {
    return ip.split('.').reduce((acc, cur, i) => acc + Math.abs((+cur) << (24 - i * 8)), 0);

    // 1. ip = ip.split('.');
    // return  ((ip[0] << 24) + (ip[1] << 16) + (ip[2] << 8) + (ip[3] << 0))>>>0;
    // 2. return ip.split(".").reduce((a, b) => a << 8 | b) >>> 0;
}

//596fd97f65ad2fc072000037
class Converter {
    constructor(size, type) {
        if (type === 'B')
            this.value = size;
        else if (type === 'KB')
            this.value = size * 1024;
        else if (type === 'MB')
            this.value = size * 1024 * 1024;
        else if (type === 'GB')
            this.value = size * 1024 * 1024 * 1024;
        else if (type === 'TB')
            this.value = size * 1024 * 1024 * 1024 * 1024;
        else
            throw new Error(`There is no such typ: ${type}`);

        this.unit = type;
    }

    toFixed(num, fixed) {
        //var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
        //return num.toString().match(re)[0];
        return Math.trunc(num * Math.pow(10, fixed)) / Math.pow(10, fixed);
    }

    toB() {
        this.unit = 'B';
        this.size = this.value + ` ${this.unit}`;
    }

    toKB() {
        this.unit = 'KB';
        let temp = Number.isInteger(this.value / 1024) ? this.value / 1024 : (this.value / 1024);
        this.size = this.toFixed(temp, 3) + ` ${this.unit}`;
    }

    toMB() {
        this.unit = 'MB';
        let temp = Number.isInteger(this.value / (1024 * 1024)) ? this.value / (1024 * 1024) : (this.value / (1024 * 1024));
        this.size = this.toFixed(temp, 3) + ` ${this.unit}`;
    }

    toGB() {
        this.unit = 'GB';
        let temp = Number.isInteger(this.value / (1024 * 1024 * 1024)) ? this.value / (1024 * 1024 * 1024) : (this.value / (1024 * 1024 * 1024));
        this.size = this.toFixed(temp, 3) + ` ${this.unit}`;
    }

    toTB() {
        this.unit = 'TB';
        let temp = Number.isInteger(this.value / (1024 * 1024 * 1024 * 1024)) ? this.value / (1024 * 1024 * 1024 * 1024) : (this.value / (1024 * 1024 * 1024 * 1024));
        this.size = this.toFixed(temp, 3) + ` ${this.unit}`;
    }
}
// 1.
// class Converter {
//     constructor(size, unit) {
//         this.size = `${size} ${unit}`;
//         this.unit = unit;
//         this.units = ["B", "KB", "MB", "GB", "TB"];
//         this.units.forEach(u => {
//             this[`to${u}`] = () => {
//                 const d = this.units.indexOf(u) - this.units.indexOf(this.unit);
//                 this.unit = u;
//                 this.size = `${Math.floor(+this.size.replace(/[^\d.]/g, "") / Math.pow(2, 10 * d) * 1000) / 1000} ${u}`;
//             };
//         });
//     }
// }

var file = new Converter(1099511627776, "B");
file.toKB();
console.log(file.unit); // 'MB'
console.log(file.size); // '1048576 MB'
