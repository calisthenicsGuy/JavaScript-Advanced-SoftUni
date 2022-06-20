// const assert = require('assert').strict;
const assert = require('chai').assert;
const { expect } = require('chai');
const solve = require('./1-sub-sum.js');

it('Should calculate sub-sum when endIndex is larger than length of Array.', () => {
    // Arrange
    let expectedOutput = 150.0;
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = 3;
    let endIndex = 300;

    // Act
    let actualOutput = solve(numbers, startIndex, endIndex);
    
    // Assert
    // assert.equal(actualOutput, expectedOutput);
    expect(actualOutput).to.be.equal(expectedOutput);
});

it('Should return sub-sum when startIndex is lower than zero.', () => {
    // Arrange
    let expectedOutput = 60;
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = -4;
    let endIndex = 2;

    // Act
    let actualOutput = solve(numbers, startIndex, endIndex);
    
    // Assert
    // assert.equal(actualOutput, expectedOutput);
    expect(actualOutput).to.be.equal(expectedOutput);
})

it('Should return Nan when non Array is provided for first Argument.', () => {
    expect(solve(10, 3, 4)).to.be.NaN;
    expect(solve({}, 3, 4)).to.be.NaN;

    // expect(solve([10, 20], 2, 3)).to.be.NaN;

    expect(solve(null, 3, 4)).to.be.NaN;
    expect(solve(undefined, 3, 4)).to.be.NaN;
    expect(solve('10', 3, 4)).to.be.NaN;
    expect(solve(true, 3, 4)).to.be.NaN;
})