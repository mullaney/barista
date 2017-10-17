---
layout: post
title:  "Welcome to Barista!"
date:   2017-10-17 13:27:09 -0500
categories: javascript barista
---
One of the ways that I learn is to document what I learn as I go. Working through tutorials, books and blog posts are great, but I also find that if I force myself to explain features in my own words, it gets down in my brain better. Plus, I wanted to build a repository for all the snippets of JavaScript language that I'm 
writing along the way. So this is what this site will be used for.

For instance, here is a function for determining if a number is a prime number:

{% highlight javascript %}
function isPrime(num) {
  if (num < 2) {
    return false;
  } 
  let sq = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= sq; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
{% endhighlight %}