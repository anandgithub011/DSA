// *WAP to print given number in ascending order.

let a = 5;
let b = 3;
let c = 2;

let big1;
let big2;
let big3;

if(a > b && a > c){
    big1 = a;
    if(b > c){
        big2 = b;
        big3 = c
    }else{
        big3 = c;
        big2 = b;
    }
}
else if(b > a && b > c){
    big1 = b;
    if(a > c){
        big2 = a;
        big3 = c;
    }else{
        big3 = c;
        big2 = a;
    }
}
else{
    big1 = c;
    if(a > b){
        big2 = a;
        big3 = b;
    }else{
        big3 = b;
        big2 = a;
    }
}

console.log(big3,big2,big1);

