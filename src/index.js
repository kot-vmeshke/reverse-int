module.exports = function reverse (n) {
    let nStr = String(n);
    let arr = Array.from(nStr);
    let arrReverse = [];
    if (arr[0] === '-') {
        for (let i = arr.length-1; i >= 1; i--) {
            arrReverse.push(arr[i]);
        }
    } else {
        for (let i = arr.length-1; i >= 0; i--) {
            arrReverse.push(arr[i]);
        }
    }
    return Number(arrReverse.join(''));
}
