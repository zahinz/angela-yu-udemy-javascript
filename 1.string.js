// 1. Tweet count. Lesson about .length


var myTweet = prompt("What on the news today?");
var numberTyped = myTweet.length;
var numberLeft = 150 - numberTyped;

alert("You typed " + numberTyped + " characters and you remained " + numberLeft + " left.");




// 2. Tweet count II. Lesson about .length


var myTweet = prompt("What on the news today?");

alert("You typed " + myTweet.length + " characters and you remained " + (150- myTweet.length) + " left.");




// 3. Tweet slicer. Lesson about .slice

var myTweet = prompt("What on the news today?");
var slicedTweet = myTweet.slice(0,150);
var numberTyped = myTweet.length
var numberLeft = 150 - numberTyped
var numberExceed = numberTyped - 150


alert("You typed " + numberTyped + " characters and exceed " + numberExceed + ". Your tweet remains this only - " + slicedTweet);




// 4.Capitalise first letter of a word

var myName = prompt("What is your name?");
var firstLetter = myName.slice(0,1);
var firstCapLetter = firstLetter.toUpperCase();


/**
 * *slice(1,)
 * ?start - Required. The position where to begin the extraction. First character is at position 0
 * ?end - Optional. The position (up to, but not including) where to end the extraction. If omitted, slice() selects all characters from the start-position to the end of the string
 * !Angela solution is - myName.slice(1,myName.length)
*/

var lastLetter = myName.slice(1,); 

alert("Hello " + firstCapLetter+lastLetter);

