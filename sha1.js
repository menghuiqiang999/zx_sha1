/**
 * Created by Administrator on 2019/1/20.
 */

'use strict';
var pageName = 'sha';
/**
 *
 * @param content - Need to sha1
 * @returns d {string} - Returns  the result of sha1
 * @example
 * var encryped = sha (content);
 */

function sha1 (content){


    var crypto = require('crypto');
    var sha = crypto.createHash('sha1');
    sha.update(content);
    var d = sha.digest('hex');
    return d;
}

module.exports = sha1;