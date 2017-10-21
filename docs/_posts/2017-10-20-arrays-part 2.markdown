---
layout: post
title:  "JavaScript Arrays - Part 2"
date:   2017-10-21 11:21:00 -0500
categories: javascript arrays fill sort
---

Let's take a closer look at a couple of array methods. One is [.fill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) and the other is [.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

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

When the start parameter is 4, it refers to the element whose index is 4. It doesn't mean the 4th element. The end parameter tells the method where to stop filling the array, in this case it means stop filling the array right before it reaches the element whose index is 5. 

Negative numbers work for both the start and end parameters. For instance:

{% highlight javascript %}
  var myArr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
  myArr.fill(1,-3,-1);
  console.log(myArr);
  // [ 0, 0, 0, 0, 0, 0, 1, 1, 0 ]
{% endhighlight %}

When the start parameter is -3, it means to start filling at the element which is 3rd from the end. This can be handy when you know you want to change the tail of an array, but you aren't sure how long it is.

What happens if you put the start in but leave off the end? It fills the rest of the array from the start position:

{% highlight javascript %}
  var myArr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
  myArr.fill(99,4);
  console.log(myArr);
  // [ 0, 0, 0, 0, 99, 99, 99, 99, 99 ]
{% endhighlight %}

What happens if the start is beyond the length of the array?

{% highlight javascript %}
  var myArr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
  myArr.fill(99,19);
  console.log(myArr);
  // [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
{% endhighlight %}

Nothing! No change to the array.

## .sort

The simplest use of the sort method for arrays works pretty much how you would expect:

{% highlight javascript %}
  var myArr = [ 43, 55, 23, 1, 77, 35, 77, 56, 1 ];
  myArr.sort();
  console.log(myArr);
  // [ 1, 1, 23, 35, 43, 55, 56, 77, 77 ]
  myArr = [ "eggs", "bacon", "cheese", "Biscuits", "bread", "butter" ];
  myArr.sort();
  console.log(myArr);
  // [ 'Biscuit', 'bacon', 'bread', 'butter', 'cheese', 'eggs' ]
{% endhighlight %}

In both cases, the elements of the array are sorted in ascending order. The only thing that is a little wonky is that it sorts Biscuit before bacon. Clearly bacon should come before Biscuit. But it's because Biscuit is capitalized. The .sort method uses the unicode values for characters to sort strings. And since the upper case letters come before lower case letters in unicode, Biscuits get's sorted first.

You might expect that there would be a super simple way to sort an array in a descending order by passing an argument to the .sort method. But I don't think there is. Instead you have to pass a function to the .sort method.

If passing a function to a method as a parameter feels strange to you, all I can say is, me too. I remember when I first starting seeing constructions like this, I was confused. So let's see if we can figure this out.

 {% highlight javascript %}
  var descending = function(a, b) {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  }
  var myArr = [ 30, 10001, 42, 23, 74, 55, 56, 77, 9998, 19 ];
  myArr.sort(descending);
  console.log(myArr);
  // [ 10001, 9998, 77, 74, 56, 55, 42, 30, 23, 19 ]
{% endhighlight %}

So, how does this work? I've made a function called decending. This is my compareFunction. It takes two numbers and then has an algorithm to determine which one should come first. If it returns a negative number, it means that the first value (or a) should come first in the sorted array. If it wants b to come first, it should return 1. And if they are the same value, it returns 0.

You aren't limited to return values of -1, 0 and 1. Any negative number will work the same as -1 and any positive number works the same as 1. So you can write the same sort function much more efficiently like this:

{% highlight javascript %}
  var descending = function(a, b) {
    return b - a;
  }
  var myArr = [ 30, 10001, 42, 23, 74, 55, 56, 77, 9998, 19 ];
  myArr.sort(descending);
  console.log(myArr);
  // [ 10001, 9998, 77, 74, 56, 55, 42, 30, 23, 19 ]
{% endhighlight %}

The ability to come up with your own sort algorithm is very powerful. Let's solve the problem from the first alphabetical sort from above. We want a sort that puts 'bacon' before 'Biscuit.'

{% highlight javascript %}
  function byAlphabet(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    } else if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  }
  var myArr = [ "eggs", "bacon", "cheese", "Biscuits", "bread", "butter" ];
  myArr.sort(byAlphabet);
  console.log(myArr);
  // [ 'bacon', 'Biscuits', 'bread', 'butter', 'cheese', 'eggs' ]
{% endhighlight %}

Notice that before it compares a and b, this compare function converts the strings to lower case. This gets rid of the problem of sorting upper vs lower case letters in unwanted ways.

With this in mind, I wrote a function to sort strings alphabetically. It takes a second argument to determine ascending or descending order:

{% highlight javascript %}
  function sortByAlphabet(arr, asc) {
    if (asc == undefined) asc = true;
    arr.sort(function(a,b) {
      a = a.toLowerCase();
      b = b.toLowerCase();
      if (a < b) {
        return asc ? -1 : 1;
      } else if (a > b) {
        return asc ? 1 : -1;
      } else {
        return 0;
      }
    });
    return arr;
  }
{% endhighlight %}

This function can be found in a file called [textual.js](https://github.com/mullaney/barista/blob/master/functions/textual.js) in the code directory of this repository.


