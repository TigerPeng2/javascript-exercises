const removeFromArray = function(arr, ...toRemove) {
    for (let i = 0; i < toRemove.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (toRemove.includes(arr[j])) {
                arr.splice(j, 1);
                j--;
            }
        }
    }

    return arr;
};

removeFromArray([1, 2, 3, 2, 1, 2, 1, 3], 2, 1);
// Do not edit below this line
module.exports = removeFromArray;
