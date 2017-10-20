function isPrime(num) {
  if (!Number.isInteger(num) || num < 2) {
    return false;
  }
  let sq = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= sq; i += (i % 2 == 0) ? 1 : 2) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function smallistMultiple(end) {
  if (!Number.isInteger(end) || end < 0) {
    return -1;
  }
  let product = 1;
  for (var n = 2; n <= end; n += (n % 2 == 0) ? 1 : 2) {
    if (isPrime(n)) {
      let pow = 2;
      while(Math.pow(n, pow) <= end) {
        pow++;
      }
      product *= Math.pow(n, pow - 1);
    }
  }
  return product;
}

function findPrime(num) {
  if (!Number.isInteger(num) || num < 1) {
    return -1;
  }
  let count = 0, n = 1;
  while (count < num) {
    if (isPrime(n)) {
      count++;
      if (count == num) {
        return n;
      }
    }
    n++;
  }
}