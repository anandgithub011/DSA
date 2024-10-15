//* WAP to count the vowel in given string;

// function countVowel(str){
//     let c = 0;
//     let vowel = "aeiou";

//     str.split("").forEach((ele)=>{
//         vowel.includes(ele) && c++;
//     })
//     return c;
// }
// console.log(countVowel("jspider"));

// ~=======================================================================================
// for(let i = 0; i < str.length; i++){
//     if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
//         c++;
//     }
// }
// ~=========================================================================

// function decompressString(input) {
//   let res = "";
//   let i = 0;
//   while (i < input.length) {
//     let char = input[i];
//     i++;

//     let numStr = "";
//     while (i < input.length && !isNaN(input[i])) {
//       numStr += input[i];
//       i++;
//     }
//     let count = parseInt(numStr);
//     res += char.repeat(count);
//   }
//   return res;
// }
// let result = decompressString("a110b112");
// console.log(result);

//~ ========================================

// function printStr(str){

//     let i = 0;

//     while(i < str.length){
//         let char = str[i];
//         if(Number[char] !== NaN){
//             for(let j = i; j < str.length-1; j++){
//                 let count_digit = 0
//                 let c = 0;
//                 if(Number9(str[j]) !== NaN){

//                 }

//             }
//         }
//     }
// }

// ~=======================================================================================
// console.log(NaN === NaN);
// console.log(NaN !== null);
// console.log(undefined == null);
// console.log(undefined === null);
// ~=======================================================================================

// function reverseNum(num) {
//   let rev = 0;
//   let temp = num;
//   do {
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10);
//   } while (num != 0);
//   {
//     return rev === temp;
//   }
// }
// let res = reverseNum(121);
// console.log(res);

//* WAP to print char multiple digit

//~ ==============================================================================

// count = count * 10 + digit
// function isAlpha(char) {
//   return /^[a-zA-z]+$/.test(char);
// }

// function isNumber(num) {
//   return /^[0-9]+$/.test(num);
// }
// // console.log(isNumber("2"));
// // console.log(isAlpha("a"));

// function deCompressStr(str) {
//   let res = "";
//   let alpha = "";
//   let num = null;
//   let i = 0;
//   while (i < str.length) {
//     if (isAlpha(str[i])) {
//       alpha = str[i];
//       i++;
//     }
//     num = 0;
//     while (i < str.length && isNumber(str[i])) {
//       num = num * 10 + +str[i];
//       i++;
//     }
//     if (num !== null || num > 1) {
//       for (let j = 1; j <= num; j++) {
//         res += alpha;
//       }
//     } else {
//       res += alpha;
//     }
//   }
//   return res;
// }
// let res = deCompressStr("a1Bd0c12");
// console.log(res);

//~ ==============================================================================

// * Convert Array into a Object

let arr1 = [12,34,55,39,78,53,99]
let res1 = Object.assign({},arr1);
console.log(res1);


let arr2 = [[12,34],[5,66],[76,44]];
let res2 = Object.fromEntries(arr2);
console.log(res2);

//~ ==============================================================================
//~ ==============================================================================
