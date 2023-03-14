var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//57cc981a58da9e302a000214
function smallEnough(a, limit) {
    return a.every(function (item) { return item <= limit; });
}
//57ee99a16c8df7b02d00045f
function flattenAndSort(inputArray) {
    return inputArray.reduce(function (prev, cur) { return prev.concat(__spreadArray([], cur, true)); }, []).sort(function (a, b) { return a - b; });
}
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));
