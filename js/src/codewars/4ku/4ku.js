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
