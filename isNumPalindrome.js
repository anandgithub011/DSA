// * WAP to check the number is palindromic or not!!

function isNumPalindrome(num){
    let temp = num;
    let rev = 0;
    do{
        let rem = num % 10;
        rev = rev*10 + rem;
        num = Math.floor(num/10);
    }
    while(num != 0){
        return rev;
        // return temp === rev;
    }
}
console.log(isNumPalindrome(1561));