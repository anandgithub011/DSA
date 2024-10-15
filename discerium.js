//* A number is set to be the Discerium number when the  sum of its digits rise-up to the power of their respective position is equal to the given number such as : 89  

function digitCount(n){
    let count = 0;
    do{
        count++;
        n = Math.floor(n/10);

    }while(n != 0){
        return count;
    }
}

function checkDisceriumNum(num){
    let c = digitCount(num);
    let temp = num;
    let sum = 0;

    do{
        let rem =temp % 10;
        sum += Math.pow(rem,c);
        c--;
        temp = Math.floor(temp/10);
        
    }while(temp != 0){
        return sum;
    }
}
let res = checkDisceriumNum(891)
console.log(res);