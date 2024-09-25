q1 = ["car", "cat"];
q1_exp = /ca[rt]/
for (s of q1) {
    console.log(q1_exp.exec(s));
}

q2 = ["pop", "prop"]
q2_exp = /pr{0,1}op/
for (s of q2) {
    console.log(q2_exp.exec(s));
}
q2.push("prrop"); // this should fail
q2_exp_alt = /p(?:r{0,1})op/
for (s of q2) {
    console.log(q2_exp_alt.exec(s));
}

q3 = ["ferret", "ferry", "ferrari"];
q3_exp = /ferr\w*/
for (s of q3) {
    console.log(q3_exp.exec(s));
}

// q4: any word ending in ious
q4 = ["curious", "notorious", "ambitious", "Admirable", "ingenious", "iousend"];
q4_exp = /ious$/
for (s of q4) {
    console.log(q4_exp.exec(s));
}

// q5: a whitespace character followed by period, comma, colon, or semicolon
q5 = [" ;", " .", " :", " ,"];
q5_exp = /\s;|:|\.|,/
for (s of q5) {
    console.log(q5_exp.exec(s));
}

// q6: A word longer than six letters
q6 = ["abcdef", "abc", "because", "jam"];
q6_exp = /\w{6,}/
for (s of q6) {
    console.log(q6_exp.exec(s));
}

// q7: A word without the letter e or E
q7 = ["apple", "orange", "banana", "leetcode", "writing"];
q7_exp = /^[^\P{L}e]+$/
for (s of q7) {
    console.log(q7_exp.exec(s));
}