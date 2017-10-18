---
layout: post
title:  "JavaScript Arrays - Part 1"
date:   2017-10-18 00:00:00 -0500
categories: javascript arrays methods push pop
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

Can you use a negative index to access a value in the array, i.e. count backwards from the end of the array? Well if you try to set the last element of an array using -1 as the index, something kinda weird happens.

{% highlight javascript %}
  var myArr = [0, 1, 2, 3, 4];
  myArr[-1] = 99;
  console.log(myArr);
  // [ 0, 1, 2, 3, 4, '-1': 99 ]
  console.log(myArr.length);
  // 5
  console.log(myArr['-1']);
  // 99
{% endhighlight %}

If you are not sure what happened, lets figure it out. First off the last element of the array stays the same: myArr[4] is still the value 4. And it looks like it added something to the end, maybe a new element to the array. But if you check the length of the array, it still says 5. And if you try to console.log(myArr[5]), you get an error.

So it's not exactly a new indexable element. Instead, it's a key and a value. It's like you have added a property to the array, like adding a property to an object. It has a key of '-1' and a value of 99. Notice that the key is a string, not a number, so if you wanted to retrieve that value you would use myArr['-1']. 

## .push and .unshift

So how do you add things to an array? To add element and value at the end of an array, you use [.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push?v=a) and to add it to the beginning you use the [.unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift?v=a) method.

{% highlight javascript %}
  var myArr = [0, 1, 2, 3, 4];
  myArr.push(88);
  console.log(myArr);
  // [ 0, 1, 2, 3, 4, 88 ]
  console.log(myArr.length);
  // 6
  myArr.unshift(68);
  console.log(myArr);
  // [ 68, 0, 1, 2, 3, 4, 88 ]
  console.log(myArr.length);
  // 7
{% endhighlight %}

We added a new element at the end of the array and added 88 as its value. Also, note that the length did go up to 6. Shift works the same except that it adds the new cell to the beginning of the array.

Do these functions have return values? Yes they do. It returns the entire array:

{% highlight javascript %}
  var myArr = [0, 1, 2, 3, 4];
  var myReturn = myArr.push(88);
  console.log(myReturn);
  // [ 0, 1, 2, 3, 4, 88 ]
{% endhighlight %}

Honestly, that return value seems redundant to me, but I'm sure there is a use for that.

What else can we mess with? What happens if we try to push multiple values into the array?

{% highlight javascript %}
  var myArr = [0, 1, 2, 3, 4];
  myArr.push(88, 99);
  console.log(myArr);
  // [ 0, 1, 2, 3, 4, 88, 99 ]
  console.log(myArr.length);
  // 7
  myArr.unshift(68, 69);
  console.log(myArr);
  // [ 68, 69, 0, 1, 2, 3, 4, 88, 99 ]
  console.log(myArr.length);
  // 9
{% endhighlight %}

It works! If you send multiple arguments to .push or .unshift, you add multiple elements to the array.

Can you use these functions to merge two arrays? Yes, but you need to use .apply like this:

{% highlight javascript %}
  var myArr = [0, 1, 2, 3, 4];
  var anotherArr = [5, 6, 7, 8, 9];
  Array.prototype.push.apply(myArr, anotherArr);
  console.log(myArr);
  // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
{% endhighlight %}

Notice this is a funky way of doing this, at least to my beginner eyes. And .apply is from the Function.prototype not the Array.prototype, so perhaps I'll tackle that in a future blog post. Anyway, I thought I would put that here in case you wondered about merges. 

One note from the docs for JavaScript at [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push?v=a) about using .apply to merge two arrays:

> Do not use this method if the second array is very large, because the maximum number of parameters that one function can take is limited in practice.

So this is one of those things that could work fine at first, but break later if your arrays get bigger with more data or more users.

## .pop and .shift

[.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) and [.shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) are kinda like the opposite of .push and .unshift. These remove an element of the array from either the end or the beginning of the array, and returns that value.

{% highlight javascript %}
  var myArr = [88, 0, 1, 2, 3, 4, 99];
  var myReturn = myArr.pop();
  console.log(myReturn);
  // 99
  myReturn = myArr.shift();
  console.log(myReturn);
  // 88
{% endhighlight %}

What if the array is already empty?

{% highlight javascript %}
  var myArr = [];
  var myReturn = myArr.pop();
  console.log(myReturn);
  // undefined
  myReturn = myArr.shift();
  console.log(myReturn);
  // undefined
{% endhighlight %}

Then it returns undefined. This could be very useful for instance in ending a loop when it runs out of array:

{% highlight javascript %}
  var myArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  while(myElement = myArr.shift()) {
    console.log(myElement);
  }
{% endhighlight %}

So this is the end of part 1. I'll cover some more methods of arrays in another post soon. 
