/*  Some basic concepts for arrays. */

var arr1 = [];
console.log("The only basic property of an array is the length. This one has a length of: ", arr1.length);
var arr2 = [1,2,2,3,2,1,4];
console.log("And this one, ", arr2, " has a length of: ", arr2.length);
var arrMain = [arr1, arr2];
console.log("And this one, ", arrMain, " is a composite of the first two arrays with a length of: ", arrMain.length);