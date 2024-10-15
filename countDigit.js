
// //* WAP to count the digit in the given number

function countDigit(num){
    let c = 0;
    do{
        num = Math.floor(num/10);
        c++;
        
    }while(num != 0){
        console.log(c);
    }
}
countDigit(12345);
