function oddCount(n) {
  let count = Math.floor(n / 2);
  let oddNumbers = [];
  for (let i = 1; i < n; i += 2) {
    oddNumbers.push(i);
  }
  return { count: count, oddNumbers: oddNumbers };
}
