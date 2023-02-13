const repeatString = function(text, times) {
    let result = "";

    if (times < 0) {
        return "ERROR";
    }

    for (let i = 0; i < times; i++) {
        result += text;
    }
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;
