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

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
