const invalidPrefix = ['BG', 'GB', 'KN', 'NK', 'NT', 'TN', 'ZZ'];
const validSuffix = ['A', 'B', 'C', 'D'];
const validAlphas = ['A', 'B', 'C', 'E', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'];
const numberOfDigits = 6;

const getNinoPrefix = function() {
    // valid alphas for first 2 chars
    let key1 = Math.floor(Math.random()*validAlphas.length);
    let key2 = Math.floor(Math.random()*validAlphas.length);

    return validAlphas[key1] + validAlphas[key2];
}

const randomNino = {
    generate: function() {
        let prefix = getNinoPrefix();
        let suffix = validSuffix[Math.floor(Math.random()*validSuffix.length)];
        let digitString = '';

        // Loop until we get a valid one
        while (invalidPrefix.indexOf(prefix) !== -1) {
            prefix = getNinoPrefix();
        }

        for (let index = 0; index < numberOfDigits; index++) {
            digitString += Math.floor(Math.random()*10);
        }

        return prefix + digitString + suffix;
    }
};

export { randomNino };
