let SCRIPTS = require('./scripts.js');
let SAMPLE = '英国的狗说"woof", 俄罗斯的狗说"тяв"'

cache = new Map();
function getScript(c) {
    let code = c.codePointAt(0);
    if (cache.has(code)) {
        console.log("Cache hit");
        return cache.get(code);
    }
    for (script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            if ((code >= from) && (code < to)) {
                return true;
            }
        })) {
            cache.set(code, script);
            return script;
        }
    }
    return "None"
}

function dominantDirection(text) {
    rtl = 0;
    ltr = 0;
    ttb = 0;
    for (c of text) {
        direction = getScript(c).direction;
        switch (direction) {
            case "ltr":
                ltr++;
                break;
            case "rtl":
                rtl++;
                break;
            case "ttb":
                ttb++;
                break;
            default:
                break;
        }
    }
    // this looks really ugly but whatever
    res = Math.max(rtl, ltr, ttb);
    if (res === rtl) {
        return "rtl";
    } else if (res === ltr) {
        return "ltr";
    } else {
        return "ttb";
    }
}

console.log(dominantDirection(SAMPLE));