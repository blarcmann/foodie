function isPalindrome(iString) {
    let isString = iString.toLowerCase();
    let strArr = isString.split('');
    let vChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

    let vString = [];

    strArr.forEach(char => {
        if (vChars.indexOf(char) > -1) {
            vString.push(char);
        }
    });
    if (vString.join('') === vString.reverse().join('')) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPalindrome("Madam I\'m Adam "));