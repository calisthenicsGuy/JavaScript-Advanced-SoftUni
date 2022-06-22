const isSymmetric = require('./5-check-for-symmetry.js');
const { expect } = require('chai');
const assert = require('chai').assert;

it('Should return false when unsymmetric array is provided as parameter', () => {
    // Arrange 
    let expectedOutput = false;

    // Act
    let actualOutout = isSymmetric([1, 2, 3, 4, 5]);

    // Asserrt
    expect(actualOutout).to.be.equal(expectedOutput);
})

it('Should return true when symmetric array is provided as parameter', () => {
    // Arrange 
    let expectedOutput = true;

    // Act
    let actualOutout = isSymmetric([1, 2, 3, 2, 1]);

    // Asserrt
    expect(actualOutout).to.be.equal(expectedOutput);
    //expect(isSymmetric([1, 2, 3, 2, 1])).to.be.equal(true);
})

it('Should return false when is not provided array as parameter', () => {
    expect(isSymmetric('someString')).to.be.equal(false);
    expect(isSymmetric({})).to.be.equal(false);
    expect(isSymmetric(10)).to.be.equal(false);
})

it('Should return false when are not provided any parameter', () => {
    expect(isSymmetric()).to.be.equal(false);
})