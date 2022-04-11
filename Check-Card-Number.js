const recognizeMasterCard = (input) =>
  (input.length === 16 && input.startsWith('51')) ||
  input.startsWith('52') ||
  input.startsWith('53') ||
  input.startsWith('54') ||
  input.startsWith('55')
    ? true
    : false;

const recognizeVisa = (input) =>
  (input.length === 13 || input.length === 16) && input.startsWith('4')
    ? true
    : false;

const recognizeAmericanExpress = (input) =>
  (input.length === 15 && input.startsWith('34')) || input.startsWith('37')
    ? true
    : false;

const validateCardNumber = (input) => {
  let sum = 0;
  for (let i = input.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
      const multiplyInput = input[i] * 2;
      if (multiplyInput > 9) {
        Array.from(String(multiplyInput), Number).forEach((e) => {
          sum += e;
        });
      } else {
        sum += multiplyInput;
      }
    } else {
      sum += Number(input[i]);
    }
  }

  if (sum % 10 !== 0) {
    throw new Error('Invalid Card Number');
  }
};

export const CheckCardNumber = (nr) => {
  try {
    validateCardNumber(nr);
  } catch (error) {
    throw Error(error.message);
  }

  if (recognizeMasterCard(nr)) {
    return 'valid MasterCard';
  } else if (recognizeVisa(nr)) {
    return 'valid Visa';
  } else if (recognizeAmericanExpress(nr)) {
    return ' valid Amercian Express';
  } else {
    throw new Error('Invalid Card Number');
  }
};
