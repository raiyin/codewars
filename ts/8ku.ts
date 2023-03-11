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
