const func = (N, staff, K) => {
    // Не прошло по времени.
    // staff.sort(function(a, b){return b - a})
    // const slice = staff.slice(0, K)
    // return slice.reduce((acc, item) => acc + item, 0);

    let max = 25;
    let sum = 0;
    let counter = 0;
    for (let round_max = max; round_max >= 0; round_max--) {
        for (let j = 0; j < N; j++) {

            if (staff[j] == round_max) {
                sum += round_max;
                counter++;

                if (counter == K) { return sum; }
            }
        }
    }
};

console.log(func(8, [5, 13, 8, 4, 4, 15, 1, 9], 8));
