// Random number, love match generator

var name1 = prompt("What is your name?");
var name2 = prompt("What is your spouse name?");

var number = Math.random();
console.log(number = number*100);
console.log(number = Math.floor(number) + 1);

alert("You and " + name2 + " is " + number + "% match!");



// conditional statement - 2 comparators

var name1 = prompt("What is your name?");
var name2 = prompt("What is your spouse name?");


    var number = Math.random();
    console.log(number = number*100);
    console.log(number = Math.floor(number) + 1);

/**
 * ! use (===) for equality and same data type
 * ? (==) do not care about the data type
 * ! use (!==) for 'is not equal' or inequallity
 * ! use (>) for greater
 * ! use (<) for lesser
 * ! use (>=) greater or equal
 * ! use (<=) lesser or equal
 */
if (number > 50) {
    alert("Congratulation! 🎉 You and " + name2 + " is " + number + "% match!");
}
else {
    alert("Oh no! You and " + name2 + " is " + number + "% match 😢");
}




// conditional statement - multiple comparators, BMI calculator

/**
 * ! (&&) as AND
 * ! (||) as OR
 * ! (!) as NOT
 */

/**
 * ? My Solution
 */
 var weight = prompt("Please insert your weight in kg");
 var height = prompt("Height in m, including decimal points");
 
 function bmiCalculator (weight, height) {
     var bmi = weight/ Math.pow(height,2);    
     return bmi;
 }
 
 var bmi = bmiCalculator(weight, height);
 var bmi2 = bmi.toFixed(1)
 
 if (bmi2 > 24.9) {
     alert("You BMI is " + bmi2 +", so you are overweight.");
 }
 
 if (bmi2 <= 24.9 && bmi >= 18.5) {
     alert("You BMI is " + bmi2 +", so you have a normal weight.");
 }
 
 if (bmi2 < 18.5) {
     alert("You BMI is " + bmi2 +", so you are underweight.");
 }
 

 /**
  * ? Classmates solution
  */

  function bmiCalculator (weight, height) {

    var interpretation = (weight / Math.pow (height,2));

    if (interpretation <= 18.5) {
        return  "Your BMI is "+interpretation+", so you are underweight." ;
    }

    else if (interpretation > 18.5 && interpretation <= 24.9){
        return  "Your BMI is "+interpretation+", so you have a normal weight." ;
    }

    else if (interpretation > 24.9){
        return  "Your BMI is "+interpretation+", so you are overweight." ;
    }

    return interpretation;

}



// Leap year exercise 

 /**
 * ! My solution 1
 */

 var year = prompt("Determine a leap year. Insert any year below.");

 
 function leapYear1 (year) {
     var answer1 = year % 4 ; 
     return answer1;
 }


 function leapYear2 (year) {
     var answer2 = year % 100;
     return answer2;
 }

 function leapYear3 (year) {
     var answer3 = year % 400;
     return answer3;
 }


    var answer1 = leapYear1(year);
    var answer2 = leapYear2(year);
    var answer3 = leapYear3(year);


 if (answer1 === 0 && answer2 === 0 && answer3 === 0) {
     alert(year + " is a leap year.");
 }

 else {
     alert(year + " is not a leap year.");
 }

//


/**
* ! My solution 2
*/

  function isLeap(year) { 
        
        var rules1 = year % 4;
        var rules2 = year % 100;
        var rules3 = year % 400;
        
        if (rules1 === 0 && rules2 !== 0 || rules3 === 0) {
            console.log("Leap year.");
        }
        
        else {
            console.log("Not leap year.");
        }
    
    }

//


/**
 * ! Angela's solution
*/

function leapYear(year) {
    if (year % 4 === 0) {

        if (year % 100 === 0) {

            if ( year % 400) {
                return "Leap year.";
            }
            else {
                return "Not leap year";
            }

        }
        else {
            return "Leap Year";
        }
        
    }
    else {
        return "Not leap year.";
    }
}