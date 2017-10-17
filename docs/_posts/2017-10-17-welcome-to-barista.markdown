---
layout: post
title:  "Welcome to Barista!"
date:   2017-10-17 13:27:09 -0500
categories: javascript barista functions prime numbers
---
I like to document what I learn as I go. Working through tutorials, books and blog posts are great, but I also find that if I force myself to explain features in my own words, it gets down into my brain better. Plus, I wanted to build a repository for all the snippets of JavaScript language that I'm writing along the way. So this is what this site will be used for.

For instance, here is a function for determining if a number is a prime number:

{% highlight javascript %}
function isPrime(num) {
  if (!Number.isInteger(num) || num < 2) {
    return false;
  }
  let sq = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= sq; i += (i % 2 == 0) ? 1 : 2) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
{% endhighlight %}

The first if statement makes sure that the value is valid for this function. If it's either not an integer or if it's less than 2, then it returns false.

Next it loops through all the integers between 2 and the square root of the number to see if any of them are a factor of the original number. Did you notice the funky way I'm incrementing the value of i? The only even number we need to check for is 2. After that it's only odd numbers. That conditional checks to see if the current value for i is even or odd and increments accordingly.

Alternatively, I could have done this:

{% highlight javascript %}
function isPrime(num) {
  if (!Number.isInteger(num) || num < 2) {
    return false;
  } else if (num == 2) {
    return true;
  }
  let sq = Math.floor(Math.sqrt(num));
  for (var i = 3; i <= sq; i += 2) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
{% endhighlight %}

This version checks to see if the number is 2 and returns true if it is. The for loop only checks odd numbers starting from 3. I think this is a little bit more readable, and it may be a little bit more efficient, since you eliminating the conditional statement from the for loop. It feels less clever to me. I'm sure there are many examples of nearly single line functions which determine if a number is prime or not. However, at this point I prefer something that I can read and understand right away.

The second version of this is in a file called [numerical.js](https://github.com/mullaney/barista/blob/master/functions/numerical.js) in the code directory of this repository.