---
layout: post
title:  "JavaScript Arrays - Part 4"
date:   2017-11-03 22:00:00 -0500
categories: javascript arrays map
---

I've been busy working my way through a fantastic tutorial on udemy.com that covers JavaScript, node.js, express, and mongodb. So I haven't had a lot of time to add to this blog, but I still have an eye on working through the various methods of the array prototype. And I thought it would be a good time to add a short entry on the [.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method.

.map allows you to alter or transform every member of an array and return those transformed values into a new array. For instance, let's say you had an array of numbers and each element of the array contained either a 0 or a 1. You could use map to flip all the values in the array, switching all the zero values to one and vice versa.

{% highlight javascript %}
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
{% endhighlight %}

In the last two lines of the code above, we use the map function to switch those values using the blink function. What if instead of switching the values, we wanted to increment all the values by one? Then we could use the function below that I named grow:

{% highlight javascript %}
  var grow = (cell) => {
    return cell+1;
  }

  console.log("=====\nGrown Values:\n=====");
  showArray(myCells.map(grow));
{% endhighlight %}

Instead of using a defined function, you could use an anonymous function with the math method. Using the ES6 arrow function notation, this is how it would look:

{% highlight javascript %}
  console.log("=====\nIncrement by 2 and Square each Value:\n=====");
  showArray(myCells.map((x) => (x+2) * (x+2)));
{% endhighlight %}

I like how the new arrow function looks when passed as an argument to another method. I think this looks a lot more readable then doing the same thing with ES5 notation:

{% highlight javascript %}
  console.log("=====\nIncrement by 2 and Square each Value:\n=====");
  showArray(myCells.map(function(x) {
    return (x+2) * (x+2);
  }));
{% endhighlight %}

## .map vs .forEach

At first glance .map and .forEach might seem quite similar. But there is an important difference. The map method returns a new array and doesn't change the original array. While forEach runs code for each element, but the return is undefined.

The code for this post is in a file called [growth.js](https://github.com/mullaney/barista/blob/master/examples/growth/growth.js) in this repository. You can find more about arrays on this blog in [part 1]({% post_url 2017-10-18-arrays-part-1 %}), or [part 2]({% post_url 2017-10-21-arrays-part 2 %}) or [part 3](https://mullaney.github.io/barista/javascript/arrays/filter/foreach/json/2017/10/23/arrays-part-3.html) of this series.
