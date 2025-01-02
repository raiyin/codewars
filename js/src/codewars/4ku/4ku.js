// 5286d92ec6b5a9045c000087
function convertQueryToMap(query) {
    if (!query) {
        return {};
    }

    query = unescape(query);
    let s = query.split('&');
    let obj = {};

    for (let i = 0; i < s.length; i++) {
        let ss = s[i].split('=');
        let props = ss[0].split('.');
        let value = ss[1];
        let tempObj = obj;

        for (let j = 0; j < props.length; j++) {
            if (j != props.length - 1) {
                if (!tempObj[props[j]]) {
                    tempObj[props[j]] = {};
                }
                tempObj = tempObj[props[j]];
            }
            else {
                tempObj[props[j]] = value;
            }
        }
    }

    return obj;
}
// function convertQueryToMap(query) {
//     var obj = {};
//     query.split('&').map(function(params) {
//       var parts = params.split('=');
//       if (!parts[1]) return {};
//       parts[0].split('.').reduce(function(cur, next, i, arr) {
//         if (!cur[next]) cur[next] = {};
//         if (i === arr.length - 1) cur[next] = decodeURIComponent(parts[1]);
//         return cur[next];
//       }, obj);
//     });
//     return obj;
//   }
// var q = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue';
// console.log(convertQueryToMap(q));


// 55b7bb74a0256d4467000070
function properFractions(n) {
    if (n == 1)
        return 0;
    if (n == 2)
        return 1;

    let half = n / 2;
    let map = new Map();
    for (let i = 2; i <= n; i++) {
        if (n % i == 0) {
            n = n / i;
            if (map.has(i)) {
                map.set(i, map.get(i) + 1);
            }
            else {
                map.set(i, 1);
            }
            i--;
        }
    }
    let count = 1;
    map.forEach((value, key) => {
        if (value == 1) {
            count = count * (key - 1);
        }
        else {
            count = count * (Math.pow(key, value) - Math.pow(key, value - 1));
        }
    });
    return count;
}

console.log(properFractions(5));//20
