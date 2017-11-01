let myCells = [];

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

for (var i = 0; i < 30; i++) {
  myCells.push(Math.floor(Math.random()*100));
}

console.log("=====\nInitial Values:\n=====")
showArray(myCells);
