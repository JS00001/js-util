'use strict'

const path = require('path');
/**
 *  Module Exports
 */
module.exports = reloadFile
/**
 * @param  {} file
 */
function reloadFile(file) {
    delete require.cache[require.resolve(path.join(process.cwd(), file))];
    return require(path.join(process.cwd(), file));
}