const getSpecialNumbers = (numbers) => {
  let specialNumbers = [];
  for (let i = 0; i < numbers; i++) {
    if (numbers[i] % 3 === 0) {
      specialNumbers.push(numbers[i]);
    }
  }
  return specialNumbers;
};
