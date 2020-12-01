'use strict'

/**
 *  Module Exports
 */
module.exports = randomString

/**
 * @param  {String} length
 * @param  {String} numbers
 */
function randomString(length, numbers) {
    let letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let number = '1234567890';
    let join = numbers != undefined && numbers ? letter + number : letter;
    let string = '';

    for (let i = 0; i < length; i++) {
        string += join.charAt(Math.floor(Math.random() * join.length));
    }

    return string;
}