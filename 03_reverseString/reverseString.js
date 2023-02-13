const reverseString = function(input) {
    let arrInput = input.split("");
    let reversedArr = [];
    for (let i = arrInput.length; i >= 0; i--) {
        reversedArr.push(arrInput[i]);
    }
    return reversedArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
