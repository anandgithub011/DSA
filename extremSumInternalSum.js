
// * WAP to find the extreme sum & internal digit sum for given number

let num = 110;
let temp = num;
let extreme_Sum = 0;
let internal_Sum = 0;

do{
    let rem = num % 10;
    if(num === temp || num < 10){
        extreme_Sum += rem;   //* 3+
    }
    else{
        internal_Sum += rem;
    }
    num = Math.floor(num/10);   //14/10 = 1

}while(num != 0){
    console.log("internal_Sum",internal_Sum);
    console.log("extreme_Sum", extreme_Sum);
}
   