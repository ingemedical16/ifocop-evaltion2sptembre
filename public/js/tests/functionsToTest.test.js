
const functionsToTest = require('../functionsToTest.js')



describe('la test unitaire on utilisant Jest le code de fichier functionsToTest', () => { 
    const {returnAnObject, multiplyAllByTwo} = functionsToTest
    describe('test la function returnAnObject', () => {
        test('should return "No argument was given to the function."', () => {
          expect(returnAnObject()).toEqual("No argument was given to the function.");
        });
      
        test('should return an object with the given arguments as values', () => {
          const args = ['a', 'b', 'c'];
          const expectedResult = { 0: 'a', 1: 'b', 2: 'c' };
      
          expect(returnAnObject(...args)).toEqual(expectedResult);
        });
      
        test('should handle mixed data types', () => {
          const args = [1, 'hello', true, { name: 'John' }];
          const expectedResult = { 0: 1, 1: 'hello', 2: true, 3: { name: 'John' } };
      
          expect(returnAnObject(...args)).toEqual(expectedResult);
        });
      
        test('should return a string message when no arguments are provided', () => {
          expect(returnAnObject()).toBe('No argument was given to the function.');
        });
      });

      describe('multiplyAllByTwo function', () => {
        test('should multiply all elements of an array by two', () => {
          const inputArray = [2, 4, 6];
          const expectedOutput = [4, 8, 12];
          const result = multiplyAllByTwo(inputArray);
          expect(result).toEqual(expectedOutput);
        });
      
        test('should return an error message if the argument is not an array', () => {
          const inputValue = 'This is a string';
          const expectedOutput = 'The argument is not an Array of numbers';
          const result = multiplyAllByTwo(inputValue);
          expect(result).toEqual(expectedOutput);
        });
      });
    
 });