class Vec {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    plus (vector) {
        return new Vec(this.x + vector.x, this.y + vector.y);
    }

    minus (vector) {
        return new Vec(this.x - vector.x, this.y - vector.y);
    }

    get length() {
        return Math.sqrt((this.x**2) + (this.y**2));
    }

}

let unit = new Vec(1, 1);
console.log(unit.x);
console.log(unit.y);
console.log(unit.length);

let two = new Vec(2, 3);
console.log(unit.length);
let added = two.plus(unit);
console.log(added.length);