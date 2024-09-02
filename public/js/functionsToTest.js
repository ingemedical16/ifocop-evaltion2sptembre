/**
 * Converts any number of arguments into an object where each argument's key is its index.
 *
 * @param  {...any} args - Arguments to be converted into an object.
 * @returns {Object} - Object with arguments as keys and values.
 */
const returnAnObject = (...args) => {
  let response = {};
  if (args.length) {
    args.forEach((arg, index) => {
      response[index] = arg;
    });
  } else {
    response = "No arguments were provided.";
  }
  return response;
};

/**
 * Multiplies each element in an array of numbers by 2.
 *
 * @param {number[]} arrayOfNumbers - Array of numbers to be multiplied.
 * @returns {number[]} - New array with each element multiplied by 2.
 * @throws {TypeError} - If the argument is not an array of numbers.
 */
const multiplyAllByTwo = (arrayOfNumbers) => {
  if (!Array.isArray(arrayOfNumbers)) {
    throw new TypeError('The argument must be an array of numbers.');
  }

  const response = arrayOfNumbers.map((val) => val * 2);
  console.log("arrayTimesTwo: ", response);
  return response;
};

module.exports = {
  multiplyAllByTwo,
  returnAnObject
};