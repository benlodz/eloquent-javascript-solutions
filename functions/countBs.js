let countBs = function (s) {
    let cnt = 0
    for (i = 0; i < s.length + 1; i++) {
        if (s[i] === 'B') {
            cnt += 1
        }
    }
    return cnt
}

console.log(countBs("AAA"));
console.log(countBs("BBB"));

function countChar(c) {
    let res = function (s) {
        let cnt = 0;
        for (i = 0; i < s.length; i++) {
            if (s[i] == c) {
                cnt += 1;
            }
        }
        return cnt
    }
    return res
}

let newBs = countChar("B");
console.log(newBs("AAA"));
console.log(newBs("BBB"));