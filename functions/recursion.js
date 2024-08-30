function isEven(n) {

    // edge case n < 0
    if (n < 0) {
        n *= -1;
    }
    // base case
    if (n === 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else {
        return isEven(n - 2);
    }
}

for (i = 0; i < 11; i++) {
    console.log(isEven(i));
}
console.log(isEven(-1));