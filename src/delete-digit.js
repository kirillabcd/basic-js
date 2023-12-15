const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const arr = n.toString().split('')
    let maxNum = 0

    for (let i = 0; i < arr.length; i++) {
        let check = +arr
            .slice(0, i)
            .concat(arr.slice(i + 1))
            .join('')

        if (check > maxNum) {
            maxNum = check
        }
    }

    return maxNum
}

module.exports = {
    deleteDigit,
}
