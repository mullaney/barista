---
layout: post
title:  "JavaScript Arrays - Part 3"
date:   2017-10-23 11:00:00 -0500
categories: javascript arrays filter foreach json
---

Over the weekend I began working through a tutorial on [node.js and express](https://www.udemy.com/the-complete-nodejs-developer-course-2/). It's quite good so far. I've worked through about 10% of the course and thought I would write a small project to reinforce many of the things that I've learned. The app described in this can be found in the repo for this blog.

A lot of the new stuff is not directly related to arrays. But toward the end, we will talk about .forEach and .filter, both methods in the array prototype.

I'm going to start by posting the javascript example and then working through it section by section to hightlight things I've learned. This app loads a list of films staring Ed Norton. For each film the list includes the year it was released, the role he played, the title of the film and the name of the director. The list is stored using [JSON](http://www.json.org).

{% highlight javascript %}
  const fs = require('fs');

  var fetchFilms = () => {
    try {
      var filmsString = fs.readFileSync('norton-films.json');
      return JSON.parse(filmsString);
    } catch(e) {
      return [];
    }
  };

  var showFilm = (film) => {
    console.log(`Ed Norton played ${film.role} in ${film.title} directed by ${film.director} in ${film.year}.`)
  };

  let films = fetchFilms();
  films.forEach(showFilm);

  let wesFilms = films.filter((film) => film.director === 'Wes Anderson');
  console.log("---\nEd Norton films directed by Wes Anderson:\n---");
  wesFilms.forEach((film) => {
    console.log(film.title);
  });

  let earlyFilms = films.filter((film) => Number(film.year) < 2000);
  console.log("---\nEarly Ed Norton films:\n---");
  earlyFilms.forEach((film) => {
    console.log(film.title);
  });
{% endhighlight %}

That's a lot of new stuff. So lets go through it section by section.

## require & fs

Require is a function which pulls in code from another source. 

{% highlight javascript %}
  const fs = require('fs');
{% endhighlight %}

In this case, fs is a built in module that comes with node.js to help you do things like open, read, write and delete files. You call the function, give it the name of the module and assign to a variable. We can use const to declare the variable, since the module shouldn't be changed once it's imported.

## try/catch, readFileSync & JSON.parse

Next we set up a function to fetch the data from a file called norton-films.json. 

{% highlight javascript %}
  var fetchFilms = () => {
    try {
      var filmsString = fs.readFileSync('norton-films.json');
      return JSON.parse(filmsString);
    } catch(e) {
      return [];
    }
  };
{% endhighlight %}

The function that opens and reads a file is [fs.readFileSync()](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options). This loads everything in the file as a string. Next we use JSON.parse() to take the string and convert the contents into array object. 

Notice that the guts of the function are inside a block of code after 'try'. The try/catch blocks allow you to do something that might cause an error. When reading a file, there is always a possibility that the file doesn't exist, and it will throw an error. If it does, the code continues to execute and jumps to the catch block. In this case, an empty array is returned.

## Arrow functions

This is a function to show the data for an individual film by formatting it into a sentance.

{% highlight javascript %}
  var showFilm = (film) => {
    console.log(`Ed Norton played ${film.role} in ${film.title} directed by ${film.director} in ${film.year}.`)
  };
{% endhighlight %}

Notice the arrow contruction of this function (and of the fetchFilms function above):

<pre>var showFilm = (film) => {};</pre>

This is the equivalent of:

<pre>var showFilm = function(film) {};</pre>

and

<pre>function showFilm(film) {};</pre>

Why these different ways to do the same thing? I don't really know to be honest. But it's good to practice writing functions in all three styles so that you become familiar with each syntax.

Also, notice how you can insert the values from variables directly into a string as long as the string is defined using back-ticks instead of single or double quotes.

## .forEach

Here we go! A new array method to explore: [.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach). 

{% highlight javascript %}
  let films = fetchFilms();
  films.forEach(showFilm);
{% endhighlight %}

If you want to run a function for each element of an array, you use .forEach and pass it the name of the function. You could also use an anonymous function like this instead:

{% highlight javascript %}
  let films = fetchFilms();
  films.forEach(function(film) {
    console.log("Title:", film.title);
  });
{% endhighlight %}

## .filter

[.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) takes an array and allows us to filter out the rows of the array we don't need, or focus on the ones we do need. In this app, there are two examples of how to use filter. 

In the first example, we want to list the films that Ed Norton has done with Wes Anderson as the director:

{% highlight javascript %}
  let wesFilms = films.filter((film) => film.director === 'Wes Anderson');
  console.log("---\nEd Norton films directed by Wes Anderson:\n---");
  wesFilms.forEach((film) => {
    console.log(film.title);
  });
{% endhighlight %}

That first line uses the filter method to go through the array and only return elements where the director is Wes Anderson.

Next we use filter to find films Ed Norton did before the year 2000.

{% highlight javascript %}
  let earlyFilms = films.filter((film) => Number(film.year) < 2000);
  console.log("---\nEarly Ed Norton films:\n---");
  earlyFilms.forEach((film) => {
    console.log(film.title);
  });
{% endhighlight %}

Notice that filter doesn't change the original array. 

And we are done! I may come back to this example and add more to it when I write more about arrays. But for now, I want to get back to the tutorial.

The code and the JSON data are in a folder on this repo called 'norton-films'. You can find more about arrays on this blog in [part 1]({% post_url 2017-10-18-arrays-part-1 %}) or [part 2]({% post_url 2017-10-21-arrays-part 2 %}) of this series.