// *WAP to check the number is double digit or NOT!!!?

// let num = 23;

// if((num >= 10 && num <= 99 || (num >= -99 && num <= -10))){
//     console.log("it is double digit");
// }else{
//     console.log("It is not Double Digit!!");
// }




function checkDoubleDigit(n){

    if(((n >= -99 && n <= -10) || (n >= 10 && n <= 99))){
        console.log("It is Double Digit");
    }else{
        console.log("It is NOT!!!!");
    }
}

checkDoubleDigit(-99);
// prompt(parseInt("Check the number is positive or negative?"));