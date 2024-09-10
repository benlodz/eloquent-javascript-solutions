class Group {
    constructor () {
        this.collection = [];
    }

    add(item) {
        if ((this.collection.some( (cur) => {cur === item}))) {
            console.log("Object already in group.");
        } else {
            this.collection.push(item);
        }
    }

    remove(item) {
        this.collection = this.collection.filter((thing) => thing !== item);
    }

    has(item) {
        return this.collection.some((thing) => thing === item);
    }

    *[Symbol.iterator] () {
        yield* this.collection;
    }

    static from(iter) {
        let res = new Group;
        for (let item of iter) {
            res.add(item);
        }
        return res;
    }
}

let fruits = new Group;
fruits.add("Apple");
fruits.add("Banana");
console.log(fruits);
console.log("Does fruits have an Orange");
console.log(fruits.has("Orange"));
console.log("Does fruits have an Apple?");
console.log(fruits.has("Apple"));
console.log("Removing Apple");
fruits.remove("Apple");
console.log("Does fruits have an Apple?");
console.log(fruits.has("Apple"));

let nums = [1, 2, 3];
let group_nums = Group.from(nums);
console.log(group_nums);
console.log("Does nums group have number 3?");
console.log(group_nums.has(3));
console.log(group_nums.collection);

for (let n of group_nums) {
    console.log(n)
}