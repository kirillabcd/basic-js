const { NotImplementedError } = require('../extensions/index.js')

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    let r = 1
    let subR = 1
    names.filter((item, index) => {
        if (names.indexOf(item) !== index) {
            if (names[index].charAt(names[index].length - 1) === ')') {
                names[index] = names[index].concat(`(${subR})`)
                subR += 1
            } else {
                names[index] = names[index].concat(`(${r})`)
                r += 1
            }
        }
    })
    return names
}

module.exports = {
    renameFiles,
}
