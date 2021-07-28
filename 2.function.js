// 1. Math.floor function. How many items you can buy within the money you have

    function getMilk(budget) {   
        console.log("leaveHouse");
        console.log("moveRight");
        console.log("moveRight");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveRight");
        console.log("moveRight");
        console.log("buy " + Math.floor(budget/1.5) + " bottles of milk");
        console.log("moveLeft");
        console.log("moveLeft");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveLeft");
        console.log("moveLeft");
        console.log("enterHouse");
    }
//


// 2. Calculate remaining months, weeks and days until 90 years old

    function lifeInWeeks(age) {  
        
        var monthsAge = (90-age)*12;
        var weeksAge = (90-age)*52;
        var daysAge = (90-age)*365;
        
        console.log("You have " + daysAge +"  days, " + weeksAge + " weeks, and " + monthsAge + " months left.")       
    }
        
    lifeInWeeks(90);

//  



// 3. Determine output from a function by using return

    function bmiCalculator(weight, height) {
        var bmi = Math.round(weight/ Math.pow(height,2));
        return bmi;
    }

    var bmi = bmiCalculator(65, 1.8); 

    console.log("my bmi is " + bmi);

//