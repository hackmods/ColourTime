'use strict';

var expect = require('chai').expect;
var rng = require('../index');

describe('#colourtime', function() {
    it('should contain 6 characters', function() {
        var result = rng();
        expect(result).to.have.lengthOf(6);
    });
});