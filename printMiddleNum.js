// *WAP to check the middle number among these three a,b,c(must be distinct number).

let a = 21;
let b = 20;
let c = 16;

if((a <= b && a >= c) || (a >= b && a <= c)){
    console.log("a",a);
}
else if((b <= a && b >= c) || (b >= a && b <= c)){
    console.log("b",b);
}
else if((c <= a && c >= b) || (c >= a && c <= b)){
    console.log("c",c);
}