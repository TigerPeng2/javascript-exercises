const palindromes = function (str) {
    let front = 0;
    let back = str.length - 1;

    while (front < back) {
        while (!str.charAt(front).match(/\w/)) {
            front++;
        }
        while (!str.charAt(back).match(/\w/)) {
            back--;
        }

        if (str.charAt(front).toLowerCase() != str.charAt(back).toLowerCase()) {
            return false;
        }
        front++;
        back--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
