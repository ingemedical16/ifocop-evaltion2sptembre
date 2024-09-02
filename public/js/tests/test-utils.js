 const generateRandomNumbers = (length) => {
    const numbers = [];
    for (let i = 0; i < length; i++) {
      numbers.push(Math.floor(Math.random() * 100)); // Generate random numbers between 0 and 99
    }
    return numbers;
  };

  module.exports = generateRandomNumbers