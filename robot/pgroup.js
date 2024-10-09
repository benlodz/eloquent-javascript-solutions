class PGroup {
    constructor () {
        this.collection = []
    }

    add(item) {
        if ((this.collection.some( (cur) => {cur === item}))) {
            console.log("Object already in group.");
        } else {
            let res = new PGroup;
            // copy the old collection to new one
            for (let obj of this.collection) {
                res.collection.push(obj)
            }
            res.collection.push(item);
            return res
        }
    }

    remove(item) {
        let res = new PGroup;
        res.collection.filter( (cur) => cur !== item);
        return res;
    }

    has(item) {
        return this.collection.some( (cur) => cur === item);
    }

    reveal() {
        for (let item of this.collection) {
            console.log(item);
        }
    }

    *[Symbol.iterator] () {
        yield* this.collection;
    }

    static from(iter) {
        let res = new PGroup;
        for (let item of iter) {
            res = res.add(item)
        }
        return res;
    }
}

let fruits = ["Apple", "Banana", "Orange"];
let fruit_group = PGroup.from(fruits);

fruit_group.reveal();
let fruit_group2 = fruit_group.add("Strawberry");
console.log("Checking new group");
fruit_group2.reveal();
console.log("Checking old group.");
fruit_group.reveal();




