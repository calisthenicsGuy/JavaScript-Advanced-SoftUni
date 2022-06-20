const rgbToHexColor = require('./6-RGB-to-Hex.js')
const { expect } = require('chai');
const assert = require('chai').assert;

it('Should return undefined when red, green or blue value are not provided with vaild value.', () => {
    expect(rgbToHexColor(260, 10, 20)).to.be.equal(undefined);
    expect(rgbToHexColor(10, 260, 20)).to.be.equal(undefined);
    expect(rgbToHexColor(10, 20, 260)).to.be.equal(undefined);
})

it('Should return udefined when are not number is provided as parameter.', () => {
    expect(rgbToHexColor('260', 10, 20)).to.be.equal(undefined);
    expect(rgbToHexColor(10, '260', 20)).to.be.equal(undefined);
    expect(rgbToHexColor(10, 20, '260')).to.be.equal(undefined);
})
