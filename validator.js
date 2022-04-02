const checkCardNumber = (nr) => {
  let input = nr.toString();
  let sum = 0;
  for (let i = input.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
      if (input[i] * 2 > 9) {
        sum += (input[i] * 2)
          .toString()
          .split('')
          .map(Number)
          .reduce(function (a, b) {
            return a + b;
          }, 0);
      } else {
        sum += Number(input[i] * 2);
      }
    } else {
      sum += Number(input[i]);
    }
  }

  if (sum % 10 !== 0) {
    return new Error('invalid card number');
  }

  if (
    (input.length === 16 && input.startsWith('51')) ||
    input.startsWith('52') ||
    input.startsWith('53') ||
    input.startsWith('54') ||
    input.startsWith('55')
  ) {
    return 'valid MasterCard';
  } else if (
    input.length === 13 ||
    (input.length === 16 && input.startsWith('4'))
  ) {
    return 'valid Visa';
  } else if (
    (input.length === 15 && input.startsWith('34')) ||
    input.startsWith('37')
  ) {
    return ' valid Amercian Express';
  } else {
    return new Error('invalid card number');
  }
};

export default checkCardNumber;
