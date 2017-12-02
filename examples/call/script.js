var target = document.getElementById('target');
target.innerHTML = '';

var messageList = document.getElementById('message-list');
var addMessage = function(message) {
  var li = document.createElement('li');
  var content = document.createTextNode(message);
  li.appendChild(content);
  messageList.appendChild(li);
}

addMessage('Hello!');

function getName() {
  return this.name;
}

function getNumberOfKeys() {
  var keys = Object.keys(this);
  return keys.length;
}

function addKeyAndValueToObject(key, value) {
  this[key] = value;
}


var obj = {
  name: 'Kevin'
}

var obj2 = {
  age: 42,
  gender: 'female'
};

addMessage("obj: " + getNumberOfKeys.call(obj));
addMessage("obj2: " + getNumberOfKeys.call(obj2));

addMessage(getName.call(obj2));
addKeyAndValueToObject.call(obj2, 'name', 'donna');
addMessage(getName.call(obj2));
