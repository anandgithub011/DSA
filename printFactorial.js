//* WAP to print the factorial of the given number by using function

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
let res = checkFactorial(5);
console.log(res);
  

// let num = 5;
// let factorial = 1;

// if(num === 0){
//     console.log(1);
// }
// else{
//     for(let i = num; i >= 1; i--){
//         factorial *= i;
//     }
//     console.log(factorial);
// }
