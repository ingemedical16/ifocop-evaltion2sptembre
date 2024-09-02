/* eslint-disable no-undef */
const functionsToTest = require('../functionsToTest.js'); 
const { returnAnObject, multiplyAllByTwo } = functionsToTest
const  generateRandomNumbers = require('./test-utils.js'); 

describe('returnAnObject', () => {
  it('should return an object with arguments as keys and values', () => {
    const args = ['string', 10, true];
    const expectedObject = { 0: 'string', 1: 10, 2: true };

    expect(returnAnObject(...args)).toEqual(expectedObject);
  });

  it('should return "No arguments were provided." if no arguments are passed', () => {
    console.log(returnAnObject())
    expect(returnAnObject()).toBe('No arguments were provided.');
  });
});

describe('multiplyAllByTwo', () => {
  it('should multiply each element in a number array by 2', () => {
    const numbers = [2, 4, 6];
    const expectedResult = [4, 8, 12];

    expect(multiplyAllByTwo(numbers)).toEqual(expectedResult);
  });

  it('should throw a TypeError if the argument is not an array of numbers', () => {
    expect(() => multiplyAllByTwo('string')).toThrow(TypeError);
    expect(() => multiplyAllByTwo({})).toThrow(TypeError);
  });

  it('should handle an empty array', () => {
    expect(multiplyAllByTwo([])).toEqual([]);
  });

  it('should handle large arrays with random numbers (optional)', () => {
    const largeArray = generateRandomNumbers(100);
    const expectedResult = largeArray.map((number) => number * 2);

    expect(multiplyAllByTwo(largeArray)).toEqual(expectedResult);
  });
});