---
layout: post
title:  "Project Eulor Smallest Multiple"
date:   2017-10-17 16:00:00 -0500
categories: javascript project eulor functions prime numbers
---

This is a problem from [project eulor](https://projecteuler.net/problem=5):

> 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
> 
> What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

The first question is how did they get the number 2520? I tried multiplying all the numbers in the range 1 to 10 and got 3628800, much higher than the answer they suggest. 

And then I thought, what if I just multiple by the prime numbers between 1 & 10? That is 2 x 3 x 5 x 7 or 210, a number far too low. So that can't be right either. Of course, because something is divisible by 2 doesn't mean that it's divisable by 4 or 8. And divisible by 3 doesn't mean divisible by 9. 

So if you add some factors to the list so that you can to account for the numbers 4, 8 & 9, you get this list: [2 x 2 x 2 x 3 x 3 x 5 x 7](https://www.google.com/search?client=safari&rls=en&q=2*2*2*3*3*5*7&ie=UTF-8&oe=UTF-8). Multiply those and you do get 2520, a number which is divisable by every number between 1 and 10. You could also express this list as 2^3 x 3^2 * 5 * 7.

So how do you come up with this list of factors? I'm going to assume that the range always begins with 1 and that the function accepts a number for the end of the range.
* Check to see if the range submitted to the function is valid.
* Set the temporary return result to 1.
* Step through the range and look for prime numbers.
* For each prime number you check to see to what power you can raise it and still have a result that is less than the maximum for the range. For instance 2^3 (or 8) is the largest power of 2 that is less than 10 and 2^4 (or 16) is the largest power of 2 that is less than 20.
* Once you have found the largest power of the prime, you multiply it by the temporary return result.
* Keep movng through the numbers to find the next largest prime.
* Once you have exhausted all the numbers you return the result. 

Here is my first attempt at this function:
{% highlight javascript %}
function smallistMultiple(end) {
  if (!Number.isInteger(end) || end < 0) {
    return -1;
  }
  let product = 1;
  for (var n = 2; n <= end; n += (n % 2 == 0) ? 1 : 2) {
    if (isPrime(n)) {
      let pow = 2;
      while(Math.pow(n, pow) <= end) {
        pow++;
      }
      product *= Math.pow(n, pow - 1);
    }
  }
  return product;
}
{% endhighlight %}

This looks like it works correctly. It's right for the two ranges given in the problem. If you have a version which is more elegant or clear, let me know.

The function is included in [numerical.js](https://github.com/mullaney/barista/blob/master/functions/numerical.js) in the code directory of this repository.
