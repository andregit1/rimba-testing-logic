function printDigitValue(str) {
  let digits = str.split('.').join('').split('').reverse();
  let places = [1, 10, 100, 1000, 10000, 100000, 1000000];
  for (let i = 0; i < digits.length; i++) {
    console.log(digits[i] * places[i]);
  }
}
