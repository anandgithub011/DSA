// * WAP to fint the biggest digit in a given number

function biggestDigitNum(num){
    let max = -Infinity;
    do{
        let rem = num % 10;
        if(rem > max){
            max = rem;
        }
        num = Math.floor(num/10);

    }while(num != 0){
        return max;
    }
}
console.log(biggestDigitNum(1234));