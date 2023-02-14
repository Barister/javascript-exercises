const removeFromArray = function(array, ...element) {
    let returnArray = [];
    
    label:
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < element.length; j++) {
            if (array[i] !== element[j]) {
                continue;
            }  
            else {continue label}
        }
        returnArray.push(array[i]);
    }
    console.log("Hello World!");
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
