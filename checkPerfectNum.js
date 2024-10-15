//*  WAP to check the number is perfect or NOT!!! 
//* A perfect number is a number which is a sum of all the divisor of that number.

let num = 28;
let sumDiv = 0;

for(let i = 1; i <= Math.floor(num/2); i++){
    if(num % i == 0){
        sumDiv += i;
    }
}
if(sumDiv === num){
    console.log("Perfect");
}
else{
    console.log("Not Perfect");
}