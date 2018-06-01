'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var invalidPrefix = ['BG', 'GB', 'KN', 'NK', 'NT', 'TN', 'ZZ'];
var validSuffix = ['A', 'B', 'C', 'D'];
var validAlphas = ['A', 'B', 'C', 'E', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'];
var numberOfDigits = 6;

var getNinoPrefix = function getNinoPrefix() {
    // valid alphas for first 2 chars
    var key1 = Math.floor(Math.random() * validAlphas.length);
    var key2 = Math.floor(Math.random() * validAlphas.length);

    return validAlphas[key1] + validAlphas[key2];
};

var randomNino = {
    generate: function generate() {
        var prefix = getNinoPrefix();
        var suffix = validSuffix[Math.floor(Math.random() * validSuffix.length)];
        var digitString = '';

        // Loop until we get a valid one
        while (invalidPrefix.indexOf(prefix) !== -1) {
            prefix = getNinoPrefix();
        }

        for (var index = 0; index < numberOfDigits; index++) {
            digitString += Math.floor(Math.random() * 10);
        }

        return prefix + digitString + suffix;
    }
};

exports.randomNino = randomNino;