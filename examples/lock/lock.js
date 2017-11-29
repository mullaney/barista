function createLockFunction(combo, m) {
  var combination = combo;
  var message = m;
  var locked = true;
  // if (!combo) {
  //   combination = Math.floor(Math.random() * 1000);
  // } else {
  //   combination = combo;
  // }

  return {
    setCombination: function(currCombo, newCombo) {
      if (currCombo === combination) {
        combination = newCombo;
        if (!locked) locked = true;
        return "New combination set and locked: " + combination;
      }
    },
    openLock: function(combo) {
      if (!locked) {
        return "Lock is already open";
      } else if (combo === combination) {
        locked = false;
        return "Lock is now open";
      } else {
        return "Wrong combination"
      }
    }
  }
}

var myLock = createLockFunction(777, 'My secret message');

console.log(myLock.setCombination(777, 9999));
console.log(myLock.openLock(777));
console.log(myLock.openLock(9999));
console.log(myLock.openLock(9999));