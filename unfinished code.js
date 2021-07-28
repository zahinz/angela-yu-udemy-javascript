/**
 * ! Lunch pay randomiser (SOLVED)
 * ? Unable to insert additional array after the first prompt
 * * learned about arrays.length and mix up with Math.random plus Math.round
 */


    var names = ["zahin", "amira", "afrah", "rafiq", "sarah"];


    if (names.length === 0) {
        names = prompt("Who is going to pay for the lunch! Insert 5 names. First one, ");
    }

    else if (names.length === 1) {
        names = prompt("Insert 5 names. Second, ");
    }

    else if (names.length === 2) {
        names = prompt("Insert 5 names. Third, ");
    }

    else if (names.length === 3) {
        names = prompt("Insert 5 names. Fourth, ");
    }

    else if (names.length === 4) {
        names = prompt("Insert 5 names. Last, ");
    }

    else {
        var randomNumber = Math.random();
        randomNumber = randomNumber * names.length;
        randomNumber = Math.round(randomNumber);
        alert ("Today is " + names[randomNumber] + "'s turn!");

    }

/**
 * ? using .split as arrays sepparator and put it after prompt
 */

    var names = [];

    names = prompt("Who is going to pay for the lunch! Insert 5 names. Separated by comma (,)").split(" ,");  //.split

    var randomNumber = Math.random();
    randomNumber = randomNumber * names.length;
    randomNumber = Math.round(randomNumber);
    alert("Today is " + names[randomNumber] + "'s turn!");

//