const findTheOldest = function(arr) {
    let age = 0;
    let obj = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if ("yearOfDeath" in arr[i]) {
            if (arr[i].yearOfDeath - arr[i].yearOfBirth > age) {
                obj = arr[i];
                age = arr[i].yearOfDeath - arr[i].yearOfBirth;
            }
        }
        else {
            const now = new Date();
            if (now.getFullYear() - arr[i].yearOfBirth > age) {
                obj = arr[i];
                age = now.getFullYear() - arr[i].yearOfBirth;
            }
        }
    }
    return obj;
};

// Do not edit below this line
module.exports = findTheOldest;
