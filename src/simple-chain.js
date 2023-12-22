const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: '',

    getLength() {
        return this.chain.split(`~~`).length
    },

    addLink(value) {
        if (this.chain.length !== 0) {
            this.chain += `~~( ${value} )`
        } else {
            this.chain += `( ${value} )`
        }
        return this
    },

    removeLink(position) {
        if (position > 0) {
            let arr = this.chain.split(`~~`)
            arr.splice(position - 1, 1)
            this.chain = arr.join('~~')
        }
        if (position <= 0 || this.getLength() < position || typeof position === 'string') {
            this.chain = ''
            throw new Error("You can't remove incorrect link!")
        }
        return this
    },

    reverseChain() {
        this.chain = this.chain.split(`~~`).reverse().join('~~')
        return this
    },

    finishChain() {
        let res = this.chain
        this.chain = ''
        return res
    },
}
module.exports = {
    chainMaker,
}
