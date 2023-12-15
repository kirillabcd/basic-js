const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    const arr1 = s1.split('').sort((a, b) => a.localeCompare(b))
    const arr2 = s2.split('').sort((a, b) => a.localeCompare(b))

    let commonCount = 0
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            commonCount++
            i++
            j++
        } else if (arr1[i].localeCompare(arr2[j]) < 0) {
            i++
        } else {
            j++
        }
    }

    return commonCount
}

module.exports = {
    getCommonCharacterCount,
}
