// * find the divisor/product of the number

let num = 28;

for(let i = 2; i <= Math.floor(num/2); i++){
    if(num % i == 0){
        console.log(i);
    }
}