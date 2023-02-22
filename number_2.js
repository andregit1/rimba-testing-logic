function printNumberTriangle() {
  let maxNumber = 9;
  for (let i = 1; i <= maxNumber; i++) {
    let row = '';
    for (let j = i; j <= maxNumber; j++) {
      row += j + ' ';
    }
    console.log(row);
  }
}
