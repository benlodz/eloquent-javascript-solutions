function loop(x, test, update, body) {
    while (test(x)) {
        body(x);
        x = update(x);
    }
}

loop(3, n => n > 0, n => n - 1, console.log)