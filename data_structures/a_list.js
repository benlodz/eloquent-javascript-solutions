function arrayToList (arr) {
    let dummy = {val: 0, rest: null};
    let cur = dummy;
    for (let obj of arr) {
        cur.rest = {
            value: obj,
            rest : null
        };
        cur = cur.rest;
    }
    return dummy.rest;
}

function printList(lis) {
    let cur = lis;
    while (cur != null) {
        console.log(cur.value);
        cur = cur.rest;
    }
}

function listToArray(lis) {
    arr = []
    ptr = lis;
    while (ptr != null) {
        arr.push(ptr.value);
        ptr = ptr.rest;
    }
    return arr;
}

function prepend(lis, n) {
    obj = {
        value: n,
        rest: lis
    }
    return obj;
}

function nth(lis, index) {
    if (lis === null) {
        return undefined;
    } else if (index === 0) {
        return lis.value
    } else {
        return nth(lis.rest, index - 1);
    }
}

nums = [1, 2, 3];
lis = arrayToList(nums);
printList(lis);
lis_arr = listToArray(lis);
console.log(lis_arr);
console.log(nth(lis, 0))
console.log(nth(lis, 2))
console.log(nth(lis, 3))