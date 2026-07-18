const palindromes = function (str) {
    s = str.toLowerCase();
    let cleanString = "";
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
  
        // Only keep numbers (48-57) and lowercase letters (97-122)
        if ((code >= 48 && code <= 57) || (code >= 97 && code <= 122)) {
            cleanString += s[i];
        }
    }

    let l = 0;
    let r = cleanString.length - 1;
    while (l < r) {
        if (cleanString[l] != cleanString[r]) return false;
        l++;
        r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
