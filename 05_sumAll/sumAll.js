const sumAll = function(firstInt, lastInt) {
    let sumUp = 0;

    if (typeof firstInt != "number" || typeof lastInt != "number" || firstInt < 0 || lastInt < 0 ) {
        return "ERROR";
    }

    else if (firstInt > lastInt) {
        let temp = firstInt;
        firstInt = lastInt;
        lastInt = temp;
    }

    for (let i = firstInt; i <= lastInt; i++) {
        
        sumUp += i;
    }
    console.log("sumUp:", sumUp);
    return sumUp;
};

// Do not edit below this line
module.exports = sumAll;
