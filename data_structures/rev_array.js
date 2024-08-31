function reverseArray(arr) {
    res = []
    for (i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i]);
    }
    return res
}

function reverseArrayInPlace(arr) {
    i = 0
    j = arr.length - 1
    let buffer = undefined;
    while (i < j) {
        buffer = arr[i];
        arr[i] = arr[j];
        arr[j] = buffer;
        i++;
        j--;
    }
}

s = "foo";
nums = [1, 2, 3];
rev_s = reverseArray(s);
rev_nums = reverseArray(nums);

console.log(rev_s);
console.log(rev_nums);
reverseArrayInPlace(nums);
console.log(nums);
