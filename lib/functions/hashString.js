'use strict'

/**
 *  Module Exports
 */
module.exports = hashString
/**
 * @param  {String} string
 * @param  {String} digest
 */
function hashString(string, digest) {
    const crypto = require('crypto');
    return crypto.createHash('sha256').update(string).digest(digest);
}