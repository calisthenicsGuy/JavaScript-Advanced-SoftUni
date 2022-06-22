const solve = require('./1-sub-sum');

// Very simple example for Unit Test
function test() {

    // Arrange
    let expectedOutput = 150.0;
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = 3;
    let endIndex = 300;


    // Act
    let actualOutput = solve(numbers, startIndex, endIndex);

    
    // Assert
    unitTest = {
        inputTest : 'solve([10, 20, 30, 40, 50, 60], 3, 300)',
        expectedOutput : 150.0,
        actualOutput,
    };

    if (expectedOutput == actualOutput) {
        unitTest['isCorrectOutput'] = true;
        return unitTest;
    } else {
        unitTest['isCorrectOutput'] = false;
        return unitTest;
    }
}