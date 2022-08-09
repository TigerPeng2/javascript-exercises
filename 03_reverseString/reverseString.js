const reverseString = function(text) {
    let out = '';

    for (let i = text.length - 1; i >= 0; i--) {
        out += text.substring(i,i + 1);
    }

    return out;
};

// Do not edit below this line
module.exports = reverseString;
