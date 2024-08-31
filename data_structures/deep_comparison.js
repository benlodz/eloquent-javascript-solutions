function deepEqual(obj1, obj2) {
    let keys = Object.keys(obj1);
    for (let key of keys) {
        if (typeof obj1[key] === 'object' && typeof obj2[key] == 'object' && obj1[key] !== null && obj2[key] !== null) {
            if (!deepEqual(obj1[key], obj2[key])) {
                return false
            }
        } else if (typeof obj1[key] === typeof obj2[key]) {
            if ((obj1[key] !== obj2[key])) {
                return false
            }
        } else {
            return false
        }
    }
    return true
}

obj1 = {
    name : "foo",
    id : 1,
    subobj : {
        id: 2
    }
}

obj2 = {
    name : "foo",
    id : 1,
    subobj : {
        id: 2
    }
}

obj3 = {
    name : "foo",
    id : 1,
    subobj : {
        id: 99
    }
}

obj4 = {
    name : "foo",
    id : 99,
    subobj : {
        id: 2
    }
}

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
console.log(deepEqual(obj1, obj4));