'use strict';

/**
 * Generate Colours from timestamps
 * @param {string} req
 * @param {string} result
 * @return {string}
 */

 function Generate(req = '', result) {

    var timeStampMS = Math.floor(Date.now()).toString();
    //var timeStampSec = Math.floor(Date.now() / 1000).toString();
    return timeStampMS.substr(timeStampMS.length - 6);
};

module.exports = Generate;