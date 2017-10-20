---
layout: post
title:  "Project Eulor - Smallest Multiple"
date:   2017-10-17 16:00:00 -0500
categories: javascript project eulor functions prime numbers
---

This is a problem from [ProjectEulor.net](https://projecteuler.net/problem=5):

> 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
> 
> What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

If you are looking for a number that can be divided by all the numbers between 1 and 10, you might try multiplying every number in the list: 

> 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 = ?

When you multiply those numbers together, you get 3628800, a number much bigger than the example answer they provide. Obviously you don't need to mulitply everything together.

The first thing you might notice is that if something is divisible by both 2 and 5 then it's redudant to say that it's also divisible by 10. We can take 10 off the list. Maybe what that means if we just multiply the prime numbers between 1 and 10 it will work! Let's try.

> 2 * 3 * 5 * 7 = ?

This time, the result is 210, far below the target of 2520. So what's missing. Well first off, it's not divisible by 9. It is divisible by 3 however and if we multiply it by 3, it's now divisible by 9.

> 2 * 3 * 3 * 5 * 7 = ?

Again, this doesn't quite get the right result. The product of these numbers is 630. If we try all the numbers between 1 and 10 we find that two numbers do not divise evenly into 630. Those numbers are 4 and 8. So if we add two more 2s to the list of factors, we should get a number that is divisible by everything.

> 2 * 2 * 2 * 3 * 3 * 5 * 7

This yields the expected result of 2520 and we can presume this is the lowest number that is divisible by all numbers between 1 and 10. 

So to solve the problem from Project Eulor, you could just go through a similar set of deductions for all the numbers between 1-20. But we want to come up wth a function to figure it out for us. Here are the steps I took to figure it out:

So how do you come up with this list of factors? I'm going to assume that the range always begins with 1 and that the function accepts a number for the end or top of the range.
1. Check to see if the range submitted to the function is valid.
2. Set the temporary return result to 1.
3. Step through the range and look for prime numbers.
4.  For each prime number you check to see to what power you can raise it and still have a result that is less than the maximum for the range. For instance 2^3 (or 8) is the largest power of 2 that is less than 10 and 2^4 (or 16) is the largest power of 2 that is less than 20.
5. Once you have found the largest power of the prime, you multiply it by the temporary return result.
6. Keep movng through the numbers to find the next largest prime.
7. Once you have exhausted all the numbers you return the result. 

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
