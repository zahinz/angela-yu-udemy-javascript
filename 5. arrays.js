// Guest list checker

    var guest = ["Zahin", "Amira", "Afrah",]

    var guestInput = guest.includes(prompt("please insert your name"));

    if (guestInput === true) {
        alert("You are welcome to the club!");
    }

    else {
        alert("Oh no! Maybe there is another club you can join.")
    }

//


//Push array 

    var output = [];
    var count = 1;

    function fizzBuzz() {

        output.push(count);

        console.log(output);

        count ++;

    }

//


// Push array Fizzbuz games

    var output = [];
    var count = 1;

    function fizzBuzz() {


        if (count % 3 === 0 && count % 5 !== 0) {
            output.push("Fizz");

        }

        else if (count % 5 === 0 && count % 3 !== 0) {
            output.push("Buzz");

        }

        else if (count % 3 === 0 && count % 5 === 0) {
            output.push("Fizzbuzz");

        }

        else {
            output.push(count);
        }

        
        console.log(output);

        count ++;


    }

//