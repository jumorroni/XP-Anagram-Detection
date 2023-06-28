const { isAnagram } = require("../src/index");

describe('Testing if is an anagram', () => {
    test('Should return true if there is a string', () => {
        expect(isAnagram('foefet')).toBe(true);
    });

});