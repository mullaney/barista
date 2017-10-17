function isPrime(num) {
  if (!Number.isInteger(num) || num < 2) {
    return false;
  } else if (num == 2) {
    return true;
  }
  let sq = Math.floor(Math.sqrt(num));
  for (var i = 3; i <= sq; i += 2) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}