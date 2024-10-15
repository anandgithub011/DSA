

//* WAP to check whether the given number is strong number or NOT!!
//* Strong number is a Num which is equal to the sum of the factorial of digit of the given number;

function checkFactorial(num) {
    let factorial = 1;

    if (num === 0) {
      return factorial;
    } else {
      for (let i = num; i >= 1; i--) {
        factorial *= i;
      }
    }
    return factorial;
}


let num = 1435;
let temp = num;
let sum = 0;
do{
    let rem = num % 10;
    sum += checkFactorial(rem);
    num = Math.floor(num/10);
    
}while(num != 0){
    if(sum === temp){
        console.log("Strong Number");
    }else{
        console.log("Not Strong");
    }
}