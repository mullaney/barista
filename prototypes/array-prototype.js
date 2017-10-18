function logStatus(arr, retV) {
  console.log(arr, arr.length);
  if (!(retV == undefined)) {
    console.log("Last return value: ", retV);
  }
}

let myArr = [];

logStatus(myArr);

myArr = [1,2,3,4];
logStatus(myArr);

myArr[0] = 99;
logStatus(myArr);

// adding something 1 beyond the length of the array will add it to the end
myArr[4] = "index four";
logStatus(myArr);

// using a negative index will not wrap around, instead it will add a property
// to the array with key of "-1" and value of false.
myArr[-1] = false;
logStatus(myArr);

// if you go far beyond the boundary of an array, the elements in between will
// be added and left blank
myArr = [0,0,0,0,0,0];
myArr[10] = 99;
logStatus(myArr);

// the push() method adds an element to the end of an array and the return value
// equals the length of the array.
myArr = [0,0,0,0,0,0];
var returnValue = myArr.push(77);
logStatus(myArr, returnValue);

// The pop() method removes the last element and returns its value.
returnValue = myArr.pop();
logStatus(myArr, returnValue);

// The shift() method removes the first element and returns its value.
returnValue = myArr.shift(999);
logStatus(myArr, returnValue);

// The unshift() method adds an element at the beginning of the array
// and returns the length.
returnValue = myArr.unshift(88);
logStatus(myArr, returnValue);

// The fill method fills the array with the same value and returns the entire array
returnValue = myArr.fill(-1);
logStatus(myArr, returnValue);

// The fill method can include a start argument which tells the method
// to start filling from that index.
myArr.fill(3,2);
logStatus(myArr);

// The fill method can also have an end argument to only fill a particular slice of the array.
// The start value and end value correpond to the index value.
myArr.fill(0,2,4);
logStatus(myArr);

// The fill method can use negative values. For instance:
myArr.fill(33,-2);
logStatus(myArr);

// It can also use negative values for the end:
myArr.fill(1,0,-1);
logStatus(myArr);

myArr = [0, 1, 2, 3, 4];
myArr[-1] = 99;
logStatus(myArr);

myArr = [0, 1, 2, 3, 4];
myArr.push(88, 99);
myArr.unshift(68, 69);
logStatus(myArr);

myArr = [0, 1, 2, 3, 4];
var anotherArr = [5, 6, 7, 8, 9];
Array.prototype.push.apply(myArr, anotherArr);
console.log(myArr);

myArr = [88, 0, 1, 2, 3, 4, 99];
var myReturn = myArr.pop();
console.log(myReturn);
// 99
myReturn = myArr.shift();
console.log(myReturn);
// 88


myArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

while(myElement = myArr.shift()) {
  console.log(myElement);
}