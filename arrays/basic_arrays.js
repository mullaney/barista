/*  Some basic concepts for arrays. */

//  Arrays have a property called length which corresponds to the number of elements in the array
var arr1 = [];
console.log(arr1.length);

var arr2 = [1,2,2,3,2,1,4];
console.log(arr2.length);

// Arrays can contain numbers, text, booleans, objects and even other arrays.
var arrMain = [1, "some text", true, arr2];
console.log(arrMain);

// Each element in the array has an index that you can use to get the value and set the value
// First element's index is 0 and the last is always 1 less than the length
var arrZero = [0,0,0,0,0,0,0,0,0,0];
arrZero[5] = 99;
console.log(arrZero);
console.log(arrZero[5]);