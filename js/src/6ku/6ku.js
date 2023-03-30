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
console.log(boxBlur(image));
