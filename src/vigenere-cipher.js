const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw new Error('Incorrect arguments!')
        }

        let encryptedMessage = ''
        let keyIndex = 0
        const upperCaseMessage = message.toUpperCase()
        const upperCaseKey = key.toUpperCase()

        for (let i = 0; i < upperCaseMessage.length; i++) {
            const currentChar = upperCaseMessage[i]
            const keyChar = upperCaseKey[keyIndex % upperCaseKey.length]

            if (/[A-Z]/.test(currentChar)) {
                const currentCharCode = currentChar.charCodeAt(0) - 65
                const keyCharCode = keyChar.charCodeAt(0) - 65

                const encryptedCharCode = ((currentCharCode + keyCharCode) % 26) + 65
                const encryptedChar = String.fromCharCode(encryptedCharCode)

                encryptedMessage += encryptedChar
                keyIndex++
            } else {
                encryptedMessage += currentChar
            }
        }
        return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('')
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) {
            throw new Error('Incorrect arguments!')
        }
        let decryptedMessage = ''
        let keyIndex = 0
        encryptedMessage = encryptedMessage.toUpperCase()
        key = key.toUpperCase()

        for (let i = 0; i < encryptedMessage.length; i++) {
            const currentChar = encryptedMessage[i]
            const keyChar = key[keyIndex % key.length]

            if (/[A-Z]/.test(currentChar)) {
                const currentCharCode = currentChar.charCodeAt(0) - 65
                const keyCharCode = keyChar.charCodeAt(0) - 65

                let decryptedCharCode = ((currentCharCode - keyCharCode + 26) % 26) + 65
                const decryptedChar = String.fromCharCode(decryptedCharCode)

                decryptedMessage += decryptedChar
                keyIndex++
            } else {
                decryptedMessage += currentChar
            }
        }
        return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('')
    }
}

module.exports = {
    VigenereCipheringMachine,
}
