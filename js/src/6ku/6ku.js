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

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
