---
layout: post
title:  "Node And Express - Part 1"
date:   2017-10-22 9:20:00 -0500
categories: javascript arrays fill sort
---

I'm working my way through a tutorial on Node.js and Express and these are notes of things that I'd like to remember from the lessons.

## node.js emulator

Once you have node.js installed on your system, you can run node as a JavaScript emulator, typing in JavaScript line by line. To start it up, type "node" at the command line in terminal (on Macs).

<pre>$ node</pre>

To end the process and return to the command line of terminal, type this:

<pre>$ process.exit(0)</pre>

Or you can press control-c twice. process.exit() can also be invoked within an app.

When running node in this way, instead of having a window and document object like when JavaScript runs in a browser, you have an object called global and another one called process.

## Inserting string values into another string

Adding javascript variables directly into strings works when the string is inside back-ticks:

{% highlight javascript %}
  var name = "Kevin";
  var greeting = `Hello, ${name}!`;
  console.log(greeting);
  // Hello, Kevin!
{% endhighlight %}

This is similar to how the values from variables are inserted into ruby. The back-ticks are crucial to making this work. This is a feature of ES6 and above.

## Add modules to your app

### Built in modules

There are built in modules for node.js that you can add to your app. The first two used in the tutorial are 
* [fs](https://nodejs.org/api/fs.html#fs_file_system) - file system for opening, appending, saving, deleting files
* [os](https://nodejs.org/api/os.html#os_os) - operating system for accessing properties of the operating system.

We used two methods in these modules in this first app:
* [fs.appendFile()](https://nodejs.org/api/fs.html#fs_fs_appendfile_file_data_options_callback) (or [fs.appendFileSync()](https://nodejs.org/api/fs.html#fs_fs_appendfilesync_file_data_options)) - appends text to a file, creating a new file if it does not exist
* [os.userInfo()](https://nodejs.org/api/os.html#os_os_userinfo_options) - retrieves info about the current user

### Personal modules

We also create a module and added it to the main app. We did this by adding a JavaScript file to the project folder. Then in the main app file, we added a require statement. Inside the module file we added a function to the module object and then created an instance of that object in the main app with the require statement. 

mymodule.js file:

{% highlight javascript %}
  module.export.myfunction = () => {
    console.log('myfunction from mymodule.js');
    return true;
  }
{% endhighlight %}

app.js file:

{% highlight javascript %}
  const mod = require('./mymodule.js');
  mod.myfunction();
  // myfunction from mymodule.js
{% endhighlight %}

### npm packages

Before adding npm packages to our project, we need to initiatlize npm for the project using:

<pre>$ npm init</pre>

Answer the questions and this will create a JSON file called package.json.

Next we will want to download the npm package to our project:

<pre>$ npm install package_name --save</pre>

And then we can require it in the same way we require built in modules. The files end up in a folder named "node_modules". These should be included in the git ignore file. They don't need to be shared, since the dependencies are saved in the package.json file. 