function decimalToBinary(num) {
  // Special case for decimal 0
  if (num === 0) {
    return '0';
  }

  let binary = '';
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }

  return binary;
}

window.decimalToBinary = decimalToBinary;
