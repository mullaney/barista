function isPhoneNumber(str) {
  var patterns = [
    /[2-9]\d{2}[- ]\d{3}-\d{4}/,
    /\([2-9]\d{2}\) ?\d{3}-\d{4}/
  ];
  return !(patterns.every(function(pattern) {
    return str.search(pattern) === -1;
  }));
}

function isEmail(str) {
  var patterns = [
    /^[a-z0-9]+@[a-z.0-9]+.[a-z]+$/i
  ];
  return !(patterns.every(function(pattern) {
    return str.search(pattern) === -1;
  }));
}
