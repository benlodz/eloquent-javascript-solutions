let arrays = [
    [1 , 2 , 3],
    [4 , 5], 
    [6]
]

console.log(
    arrays.reduce( (res, cur) => {
        for (val of cur) {
            res.push(val)
        }
        return res
    }, [])
)