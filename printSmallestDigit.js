// * WAP to find the smallest digit in a given number

function checkSmallestDigitNum(num){

    let min = Infinity;
    let temp = num;
    do{
        let rem = temp % 10;
        if(rem < min){
            min = rem;
        }

        temp = Math.floor(temp/10);

    }while(temp != 0){
        return min;
    }
}
console.log(checkSmallestDigitNum(1234));