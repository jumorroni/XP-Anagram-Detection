const { isAnagram } = require("../src/index");

describe('Testing if is an anagram', () => {
    test("Should return true if 'foefet' length is equal to 'toffee'", () => {
        expect(isAnagram('foefet')).toBe(true);
    });

});