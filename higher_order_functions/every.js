function every (arr, func) {
    for (val of arr) {
        if (!func(val)) {
            return false;
        }
    }
    return true;
}

function every_some (arr, func) {
    /*
    some will take a function and apply it to every element
    but will return true if at least one is true. 

    If all of them are true, then it'll always return false. 
    Therefore it'll iterate throughout the entire array and so returning false.
    we simply negate the result since it's true
    */
    
    return !arr.some(val => !func(val))
}




console.log(every([1, 3, 5], n => n < 10));
console.log(every([1, 3, 5, 25], n => n < 10));

console.log(every_some([1, 3, 5], n => n < 10));