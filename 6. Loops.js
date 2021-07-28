// WHILE LOOP
// Using FizzBuzz to repeat itself until 100 times

    var output = [];
    var count = 1;

    function fizzBuzz() {

        while (count <=100 ){ // Loop statement using while()

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

            count ++;
        }

                
        console.log(output);

    }

//



// Beer bottle on the wall lyrics generator, Version 1

    var bottleStart = [];
    var bottleEnd = [];

    var countSet1 = 99;
    var countSet2 = 98;
    var count = 1


    function beerBottle (){

        while (bottleStart.length <= 97){

            bottleStart.push(countSet1);
            bottleEnd.push(countSet2);
            console.log( countSet1 + " bottles of beer on the wall, " + countSet1 + " bottles of beer. Take one down and pass it around, " + countSet2 + " bottles of beer on the wall.");
            countSet1 --;
            countSet2 --;
        }


        if (bottleStart.length = 98) {
            bottleStart.push(countSet1);
            bottleEnd.push(countSet2);
            console.log( countSet1 + " bottle of beer on the wall, " + countSet1 + " bottle of beer. Take one down and pass it around, No more bottles of beer on the wall.");
        }


        if (bottleStart.length = 99) {
            bottleStart.push(countSet1);
            bottleEnd.push(countSet2);
            console.log( "No more bottle of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + countSet2 + " bottles of beer on the wall.");
        }

    }

//



// Beer bottle on the wall lyrics generator, Version 2

var bottleStart = [];
var bottleEnd = [];

var count = 99;


function beerBottle (){

    while (bottleStart.length <= 97){

        bottleStart.push(count);
        bottleEnd.push(count - 1);
        console.log( count + " bottles of beer on the wall, " + count + " bottles of beer. Take one down and pass it around, " + (count - 1) + " bottles of beer on the wall.");
        count --;
    }



    if (bottleStart.length = 98) {
        bottleStart.push(count);
        bottleEnd.push(count - 1);
        console.log( count + " bottle of beer on the wall, " + count + " bottle of beer. Take one down and pass it around, No more bottles of beer on the wall.");
    }


    if (bottleStart.length = 99) {
        bottleStart.push(count);
        bottleEnd.push(count - 1);
        console.log( "No more bottle of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
    }

}

// FOR LOOP
// for (i=0; i<2; i++) - (Start; End; Change;)
// Fizzbuz games using FOR loops

var output = [];

    function fizzBuzz() {

        for (count=100; count >=1; count--){

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

        }

        console.log(output);

    }

//

// WHILE loop for state - true or false
// FOR loop for iterate - "perform or utter repeatedly."


// Fibonacci challenge
/**
 * ? Attempt 1
 * ! Mistake it does not add up the last number and the second last number, instead of add up last number with last number
 */

    function fibonacciGenerator (n) {
        
        //Write your code here:
        
        output = [];
    
            if (n===1) {
                output.push(0);
            }
    
            if (n===2) {
                output.push(0, 1);
            }
    
            if (n>=3) {
    
                output.push(0, 1);
    
                while (output.length <= (n-1)) {
                    var lastNumber = output.pop();
                    output.push(lastNumber, lastNumber+lastNumber); // My mistake here
                }
            }
    
        return output;
        
    }
    
//


/**
 * ? Attempt 2
 * ! Fix the addition using arr.reducer
 * ! Take out the last two number in an array using arr.slice
 */

    function fibonacciGenerator (n) {
        
        //Write your code here:
        
        var output = [];
    
            if (n===1) {
                output.push(0);
            }
    
            if (n===2) {
                output.push(0, 1);
            }
    
            if (n>=3) {
    
                output.push(0, 1);
    
                while (output.length <= (n-1)) {
                    var last2Numbers = output.slice(-2);
                    var sum = last2Numbers.reduce((a, b) => a + b, 0); // a = accumulator, b = currentValue
                    /**
                     * ? another way is
                     * * var sum = last2Numbers[0] + last2Numbers[1];
                     */
                    output.push(sum);
                }
    
            }
    
        return output;

    }
    
//

//
/**
 * ? More simpler solution 
 */
    
 function fibonacciGenerator (n) {
        
    //Write your code here:
    
    var output = [];

        if (n===1) {
            output.push(0);
        }

        if (n===2) {
            output.push(0, 1);
        }

        if (n>=3) {
            
            output.push(0, 1);
            
            while (output.length < n) { // fix using < n instead of <= n
            output.push(output[output.length - 1] + output[output.length - 2]); // use output.length-1 as determinator for last and second last position
            }
          
        }

    return output;

}
