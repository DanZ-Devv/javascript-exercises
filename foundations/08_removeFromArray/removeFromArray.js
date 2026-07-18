const removeFromArray = function(array, ...toDelete) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (toDelete.includes(array[i])) continue;
        arr.push(array[i]);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
