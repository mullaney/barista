// asc assumbed to be true, pass "false" for decending order
function sortByAlphabet(arr, asc) {
  if (asc == undefined) asc = true;
  arr.sort(function(a,b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a < b) {
      return asc ? -1 : 1;
    } else if (a > b) {
      return asc ? 1 : -1;
    } else {
      return 0;
    }
  });
  return arr;
}
