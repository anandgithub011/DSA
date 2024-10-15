
// * WAP to check the number is armstrong or not!!!
//*Armstrong is a number which is sum of cube of the digit is equal to that given number

let num = 153;
let temp = num;
let cube_Sum = 0;
let cube = 0;

do{
    let rem = num % 10;
    cube = rem**3;
    cube_Sum += cube;
    num = Math.floor(num/10);
    
}while(num != 0){

    if(cube_Sum === temp){
        console.log("Armstrong Number");
    }
    else{
        console.log("Not Armstrong");
    }
}
