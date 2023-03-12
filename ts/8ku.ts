export function paperwork(n: number, m: number): number {
    if (n < 0 || m < 0)
        return 0;
    return n * m;
    // 1. return (n < 1 || m < 1) ? 0 : n * m;
}

//568d0dd208ee69389d000016
export function rentalCarCost(d: number): number {
    let rentOff = 0;
    if (d >= 7)
        rentOff = 50;
    else if (d >= 3)
        rentOff = 20;
    return d * 40 - rentOff;
}

//57eae65a4321032ce000002d
export const fakeBin = (x: string): string => {
    return x.split('').map(item => (+item < 5 ? 0 : 1)).join('');
};

//58649884a1659ed6cb000072
export function updateLight(current: string): string {
    switch (current) {
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
        default:
            return 'green';
    }
    // 1. 
    // const L = ['green', 'yellow', 'red', 'green']
    // return L[L.indexOf(current)+1]
    // 2.
    //const objTraffic: Record<string,string> = {
    //    "green" : "yellow",
    //    "red": "green",
    //    "yellow": "red"
    //  }
    //return objTraffic[current]
}
