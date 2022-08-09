const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    
    let out = '';
    for (let i = 0; i < num; i++) {
        out += string;
    }
    
    return out;
};

// Do not edit below this line
module.exports = repeatString;
