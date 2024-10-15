// * check the year is leap or not?


//& Every multiple of 4 && 400 is leap year!!!
//& Every century is not leap year except the multiple of 400!!!
//* A year is a leap year if it is divisible by 4.
//* However, if the year is divisible by 100, it is not a leap year, unless it is also divisible by 400.

//~ n % 4 === 0: The year must be divisible by 4.
//~ n % 100 !== 0: If the year is divisible by 100, it’s not a leap year.
//~ n % 400 === 0: However, if it is divisible by 400, it is a leap year, even if divisible by 100.



// let n = 800;
// if((n % 4 === 0 || n % 400 === 0) && (n % 100 !== 0)){
//     console.log("Leap Year");
// }
// else{
//     console.log("Not Leap year");
// }

let n = 1804;

if((n % 4 === 0 && n % 100 !== 0) || (n % 400 === 0)){
    console.log("Leap Year");
}
else{
    console.log("Not Leap year");
}