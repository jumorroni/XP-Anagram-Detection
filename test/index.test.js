const { isAnagram } = require("../src/index");

describe('Testing if is an anagram', () => {
    test("Should return false if 'foefet' length is not equal to 'toffee'", () => {
        expect(isAnagram('foefet', 'toffee')).toBe(false);
    });

    test("Should return false if 'foefet' length is equal to 'toffee'", () => {
        expect(isAnagram('foefet', 'toffee')).toBe(true);
    });

});