const createCalculator = require('./7-add-subtract.js');
const { expect } = require('chai');
const assert = require('chai').assert;

it('Should function return object', () => {
    let expectedOutput = {
        add : function() {},
        subtract : function() {},
        get : function() {},
    };

    expect(createCalculator).to.not.include(expectedOutput);
})

it('Should return right objrct no matter if is not provided Number as parameter in object function', () => {
    let expectedOutput = {
        add : function() { value += Number('10'); },
        subtract : function() { value += Number('10'); },
        get : function() {},
    };

    expect(createCalculator).to.not.include(expectedOutput);
})