function isAnagram(string1, string2) {

    if (string1.length !== string2.length) {
        return false
    }

    return string1.split("").sort().join("") === string2.split("").sort().join("");

};



module.exports = {
    isAnagram

};