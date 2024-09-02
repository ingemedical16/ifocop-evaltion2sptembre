
/**
 * une function qui transforme les argument a une objet dont les key sont
 * l'index de l'argument
 * @param  {...any} args
 * @returns {Object}
 */
const returnAnObject = (...args) => {
  let response = {};
  if (args.length) {
    let index = 0;
    args.forEach((arg) => {
      response[index] = arg;
      index++;
    });
  } else {
    response = "No argument was given to the function.";
  }
  return response;
};
/**
 * une function qui prend un tableau de number et retourné  le tableau dont chaque
 * element est multiplier par 2
 * @param {Array} arrayOfNumbers - tableau de number
 * @returns {Array}  - tableau de number
 */
const multiplyAllByTwo = (arrayOfNumbers) => {
  let response;
  if (
    arrayOfNumbers.constructor.prototype === new Array().constructor.prototype
  ) {
    response = arrayOfNumbers.map((val) => val * 2);
    console.log("arrayTimesTwo: ", response);
  } else {
    response = "The argument is not an Array of numbers";
  }
  return response;
};


var _default = {
  multiplyAllByTwo,
  returnAnObject
};
module.exports  = _default;

