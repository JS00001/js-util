'use strict'

/**
 *  Module Exports
 */
module.exports = reloadFile
/**
 * @param  {String} file
 */
function reloadFile(file) {
    delete require.cache[require.resolve(file)];
    return require(file);
}