var car = {
  make: 'honda',
  model: 'accord',
  year: 2014,
  used: true,
  hadAccident: false
}

var driver = {
  name: 'Kevin',
  age: 23,
  licensed: false,
}

var dealer = {
  name: 'Happy Hondas'
}

// function logKeysAndValues() {
//   var keys = Object.keys(this);
//   for(var i = 0; i < keys.length; i++ ) {
//     console.log(keys[i], this[keys[i]]);
//   }
//   console.log('---');
// }

function logKeysAndValues() {
  for (var key in this) {
    console.log(key, this[key]);
  }
  console.log('---');
}


logKeysAndValues.call(car);
logKeysAndValues.call(driver);
logKeysAndValues.call(dealer);
