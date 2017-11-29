function createLockFunction(combo, m) {
  var combination = combo;
  var message     = m || "";
  var locked      = true;

  if (combination === undefined) {
    console.log('Missing combination, no lock returned');
    return null;
  } else if (message.replace(/^\s+|\s+$/g, '') === "") {
    console.log("Empty message. Nothing to lock, no lock returned.")
    return null;
  } else {
    console.log("Creating new lock. Remember your combination to retrieve the message.")
  }

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
    }, 
    getMessage: function() {
      if (!locked) {
        return message;
      } else {
        return "This message is locked. Please unlock first."
      }
    },
    changeMessage: function(combo, newMessage) {
      if (combo === combination) {
        message = newMessage;
        locked = true;
        return "New message locked away.";
      }
    }
  }
}