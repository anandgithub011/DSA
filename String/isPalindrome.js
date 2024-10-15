// function isStrPalindromic(str){
//     let rev = "";

//     for(let i = str.length-1; i >= 0; i--){
//         rev += str[i];
//     }
//     return rev === str;
// }
// let res = isStrPalindromic("mom");

// console.log(res);

//~ ============TWO POINTER====================================

function isStrPalindromic(str){
    let left = 0;
    let right = str.length-1;

    while(left <= right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
let res = isStrPalindromic("rafcar");
console.log(res);