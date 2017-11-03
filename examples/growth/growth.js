let myCells = [
  0, 0, 0, 1, 1,
  0, 1, 1, 1, 0,
  1, 0, 1, 1, 0,
  1, 0, 0, 1, 1,
  0, 1, 1, 0, 0,
  0, 1, 1, 1, 0
];

function showArray(arr) {
  var line = "";
  for (var i = 0; i < arr.length; i++) {
    line += `${arr[i]}, `;
    if (i % 5 === 4) {
      console.log(line);
      line = "";
    }
  }
}

console.log("=====\nInitial Values:\n=====")
showArray(myCells);

var blink = function(cell) {
  return (cell === 1) ? 0 : 1;
}

console.log("=====\nBlinked Values:\n=====");
showArray(myCells.map(blink));

var grow = (cell) => {
  return cell+1;
}

console.log("=====\nGrown Values:\n=====");
showArray(myCells.map(grow));

console.log("=====\nIncrement by 2 and Square each Value:\n=====");
showArray(myCells.map((x) => (x+2) * (x+2)));

console.log("=====\nInitial Values Have Not Changed:\n=====")
showArray(myCells);
