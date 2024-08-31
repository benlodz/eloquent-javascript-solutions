function getRange(start, end, step=1) {
    res = []
    for (n = start; n <= end; n += step) {
        res.push(n);
    }
    return res
}

function getRangeSum(range) {
    res = 0
    for (let n of range) {
        res += n;
    }
    return res
}

arr = getRange(1,100);
console.log(arr);
console.log(getRangeSum(arr));
console.log(getRange(1,10,2));