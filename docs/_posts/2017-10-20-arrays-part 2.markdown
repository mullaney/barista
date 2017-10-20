---
layout: post
title:  "Arrays - Part 2"
date:   2017-10-20 12:00:00 -0500
categories: javascript arrays fill sort
---

Let's take a closer look at a couple of array methods. One is called [.fill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) and the other is [.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

## .fill

Sometimes you are going to want to repopulate an array, or a section of an array with a new value. Perhpas you have an array of counters values that need to be reset to 0 at particular times. A quick way to do this is to use the .fill method:

{% highlight javascript %}
  var myArr = [56, 77, 3, 45, 7, 8, 2, 19, 43];
  myArr.fill(0);
  console.log(myArr);
  // [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
{% endhighlight %}

The .fill method can take two more arguments besides the value you are filling the array with: start & end.

{% highlight javascript %}
  var myArr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
  myArr.fill(1,4,5);
  console.log(myArr);
  // [ 0, 0, 0, 0, 1, 0, 0, 0, 0 ]
{% endhighlight %}

Note that when the start is 4, it refers to the index of the element. It actually begins filling the value into the 5 element whose index is 4. Also it ends at index 5, and doesn't fill the element at index 5. 

Negative numbers work for both the start and end parameters. For instance:

{% highlight javascript %}
  var myArr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
  myArr.fill(1,-3,-1);
  console.log(myArr);
  // [ 0, 0, 0, 0, 0, 0, 1, 1, 0 ]
{% endhighlight %}

In this case it at the element with an index of the length of the array minus 3, or myArr[6]. And it ends one before the end. This can be handy when you know you want to change the tail of an array, but you aren't sure how long it is.

What happens if you put the start in but leave off the end? It fills the rest of the array from the start position:

{% highlight javascript %}
  var myArr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
  myArr.fill(99,4);
  console.log(myArr);
  // [ 0, 0, 0, 0, 99, 99, 99, 99, 99 ]
{% endhighlight %}

Both of these functions can be found in a file called [numerical.js](https://github.com/mullaney/barista/blob/master/functions/numerical.js) in the code directory of this repository.


