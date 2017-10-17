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

The first question is how did they get the number 2520? I tried multiplying all the numbers in the range 1 to 10 and got: 3628800. This clearly doesn't arrive at the right number. And then I thought, what if I just multiple by the prime numbers between 1 & 10? That is 2 x 3 x 5 x 7 or 210, a number far too low. So that can't be right. Of course, because something is divisible by 2 doesn't mean that it's divisable by 4 or 8. And divisible by 3 doesn't mean divisible by 9. 

So if you add some factors to the list to account for the numbers 4, 8 & 9, you get this list:[2 x 2 x 2 x 3 x 3 x 5 x 7](https://www.google.com/search?client=safari&rls=en&q=2*2*2*3*3*5*7&ie=UTF-8&oe=UTF-8). Multiply those and you do get 2520, a number which is divisable by every number between 1 and 10.

So you should be able to figure out the number for answer for the range of numbers by 1 to 20 by starting with these numbers: 2,3,5,7,11,13,17 & 19 and then adding more of these to make sure that every other number in that range can be derived by some version of these factors: 2,2,2,2,3,3,5,7,11,13,17,19. Every number between 1 and 20 can be represented by a product of these divisors. Multiple these and we should have the correct answer. The product is 232792560.

Let's give that a try to see if we are right...

And it is! Great. But we are not just interested in getting the right answer. We are learning to code, so let's see if we can make a function that does this. How would we go about generating this list of factors and then multiplying them?

Well, one way would be to walk through the range and look for all prime numbers and prime numbers to a power. For instance, in this range that would be:

* The primes: 2, 3, 5, 7, 11, 13, 17, 19
* Numbers which are powers of primes: 4, 8, 16 (2^2, 2^3 & 2^4) and 9 (3^2)

