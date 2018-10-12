// Callbacks
// as our last parameter in the doHomework() function we can pass in callback.
// The callback function is then defined in the second argument of our call to doHomework().

function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

doHomework('math', function() {
  alert('Finished my homework');
});

// callback functions don’t always have to be defined in our function call.
// They can be defined elsewhere in our code like this
// we’ve passed the 'alertFinished' function definition as an argument during our doHomework() function call!

function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

function alertFinished(){
  alert('Finished my homework');
}

doHomework('math', alertFinished);

// JavaScript is an event driven language.
// This means that instead of waiting for a response before moving on,
// JavaScript will keep executing while listening for other events.

// Callbacks are a way to make sure certain code doesn’t execute until other code
// has already finished execution.

// Avoiding Callback Hell
// two anon functions
var form = document.querySelector('form')
form.onsubmit = function (submitEvent) {
  var name = document.querySelector('input').value
  request({
    uri: "http://example.com/upload",
    body: name,
    method: "POST"
  }, function (err, response, body) {
    var statusMessage = document.querySelector('.status')
    if (err) return statusMessage.value = err
    statusMessage.value = body
  })



// Naming the functions
// 1. makes the code easier to read
// 2. when an exception happens we will get the function names in our stack trace
// 3. We can move the functions and reference them by name

var form = document.querySelector('form')
form.onsubmit = function formSubmit (submitEvent) {
  var name = document.querySelector('input').value
  request({
    uri: "http://example.com/upload",
    body: name,
    method: "POST"
  }, function postResponse (err, response, body) {
    var statusMessage = document.querySelector('.status')
    if (err) return statusMessage.value = err
    statusMessage.value = body
  })
}

// Top Level
document.querySelector('form').onsubmit = formSubmit

function formSubmit (submitEvent) {
  var name = document.querySelector('input').value
  request({
    uri: "http://example.com/upload",
    body: name,
    method: "POST"
  }, postResponse)
}

function postResponse (err, response, body) {
  var statusMessage = document.querySelector('.status')
  if (err) return statusMessage.value = err
  statusMessage.value = body
}

// Modularize

// formuploader.js
module.exports.submit = formSubmit

function formSubmit (submitEvent) {
  var name = document.querySelector('input').value
  request({
    uri: "http://example.com/upload",
    body: name,
    method: "POST"
  }, postResponse)
}

function postResponse (err, response, body) {
  var statusMessage = document.querySelector('.status')
  if (err) return statusMessage.value = err
  statusMessage.value = body
}


var formUploader = require('formuploader')
document.querySelector('form').onsubmit = formUploader.submit


// Handle every single error
// The first two rules are primarily about making your code readable, but this one is about making your code stable.
// When dealing with callbacks you are by definition dealing with tasks that get dispatched, go off and
// do something in the background, and then complete successfully or abort due to failure.

// Any experienced developer will tell you that you can never know when these errors happen,
// so you have to plan on them always happening.

With callbacks the most popular way to handle errors is the Node.js style
where the first argument to the callback is always reserved for an error.


var fs = require('fs')

fs.readFile('/Does/not/exist', handleFile)

function handleFile (error, file) {
  if (error) return console.error('Uhoh, there was an error', error)
  // otherwise, continue on and use `file` in your code
}

// Callback Summary
// Don't nest functions. Name them and place them at the top level of your program
// Use function hoisting to your advantage to move functions 'below the fold'
// Handle every single error in every one of your callbacks. Use a linter to help you with this.
// Create reusable functions and place them in a module to reduce the cognitive load required to understand your code
// Split your code into smaller pieces
// Move functinos out of the way so programs flows can be more easily understood

// Promises
// Promises are a bit like event listeners, except:
// A promise can only succeed or fail once. It cannot succeed or fail twice, neither can it switch from success to failure or vice versa.
// If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, even though the event took place earlier.

// A promise can be
// Fulfilled - the action relating to the promise succeeding
// Rejected - The action related to the promise failed
// Pending Hasn't 'Fulfilled' or 'Rejected' yet
// Settled - Has 'Fulfilled' or 'Rejected'

// A promise constructor takes one argument, a callback with two parameters(resolve, reject).
// We do something with the callback, then call resolve if it works or reject if it doesn't
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});

// Using a Promise
// 'then()' takes two arguments(callback success, and another failure case)
// Both are optional, you can add a callback for the success or failure case only.
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});
