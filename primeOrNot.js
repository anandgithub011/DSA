//*  WAP to check whether the given number is prime or NOT!

// let num = 23;
// let c = 0;
// for(let i = 1; i <= num; i++){
//     if(num % i == 0){
//         c++;
//     }
// }
// if(c == 2){
//     console.log("Prime");
// }else{
//     console.log("Prime Not");
// }

let num = 89;
let flag = false;

for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i == 0){
        flag = true;
        break;
    }
}
if(flag){
    console.log("Not Prime")
}
else{
    console.log("Prime");
}

// let num = 19;
// let c = 0;
// for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
//     if(num % i == 0){
//         c++
//     }
// }
// if(c == 0){
//     console.log("Prime Number");
// }else{
//     console.log("Not Prime");
// }