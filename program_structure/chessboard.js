/* Even though I hardcoded the srtings,
we could generate if need be */

black_row = " # # # #"
white_row = "# # # # "
for (let row = 1; row <= 8; row++) {
    if (row % 2 == 0) {
        console.log(white_row)
    } else {
        console.log(black_row)
    }
}