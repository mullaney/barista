---
layout: post
title:  "JavaScript Arrays - Part 1"
date:   2017-10-18 00:00:00 -0500
categories: javascript arrays methods
---

Arrays are lists of elements. Each element can contain a value such as a number, a piece of text, a boolean, an object or even another array.

## Basic array stuff

If you have ever used arrays, this first part should be review. An array can be declared by using a comma separated set of values between square brackets.

{% highlight javascript %}
  var myArr = [1, 2, 3, 4, 5];
{% endhighlight %}

You can get and set the value of an element by using it's index to reference it. The first cell's index is 0.

{% highlight javascript %}
  var myArr = [77,3,45,2,19];
  // this would change the third element to 99;
  myArr[2] = 99;
  // and this would change the first element to 1;
  myArr[0] = 1;

  console.log(myArr);
  // [1, 3, 99, 2, 19]
{% endhighlight %}

To find out the number of elements in the array, you can use the length property:

{% highlight javascript %}
  console.log([45, 3, 7, 3, 1].length);
  // 5  
{% endhighlight %}

If you try to set a value for an element beyond the length of the array, it works. When it's the next element beyond the current length, it adds a single element. When it's beyond that, it adds empty elements in between.

{% highlight javascript %}
  var myArr = [0, 1, 2, 3, 4];
  myArr[5] = 5;
  console.log(myArr);
  // [0, 1, 2, 3, 4, 5]
  myArr[10] = 10;
  // [0, 1, 2, 3, 4, 5, , , , , 10];
{% endhighlight %}

