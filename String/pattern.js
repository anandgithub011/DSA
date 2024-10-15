//* write a pattern

// function pattern(n) {
//                                     //~ * * *
//   for (let i = 0; i < n; i++) {     //~ * * *
//     let bag = "";                   //~ * * *
//     for (let j = 0; j < n; j++) {
//       bag += "* ";
//     }
//     console.log(bag)
//   }
// }
// pattern(3);

// ~===========================================================================================

// function pattern1(n){                //* 1 2 3 4
//     for(let i = 1; i <= n; i++){     //* 1 2 3 4
//         let bag = "";                //* 1 2 3 4
//         for(j = 1; j <= n; j++){     //* 1 2 3 4
//             bag += j+" ";
//         }
//         console.log(bag);
//     }
// }
// pattern1(4)

// ~=========================================================================================

// function pattern2(n) {
//     let str = "ABCD";
//   for (let i = 1; i <= n; i++) {
//     let bag = "";
//     for(let j = 0; j < n; j++){
//         bag += str[j]+" ";
//     }
//     console.log(bag);
//   }
// }
// pattern2(4);
//~=================================================================================

// function partternAscii(n){           //*A B C D
//     for(let i = 1; i <= n; i++){     //*A B C D
//         let bag = "";                //*A B C D
//         let char = 64;               //*A B C D
//         for(let j = 1; j <= n; j++){
//             bag += String.fromCharCode(char+j) + " ";
//         }
//         console.log(bag);
//     }
// }
// partternAscii(4);
// ~==============================================================================================

// function pattern3(n){                   //* 01 02 03 04
//     let c = 0;                          //* 05 06 07 08
//     for(let i = 1; i <= n; i++){        //* 09 10 11 12
//         let bag = "";                   //* 13 14 15 16
//         for(let j = 1; j <= n; j++){
//             c++;
//             // if(c >= 10){
//             //     bag += c +" ";
//             // }else{
//             //     bag += "0"+c +" ";
//             // }
//             (c < 10)? bag += "0"+c+" ": bag += c + " ";
//         }
//         console.log(bag);
//     }
// }
// pattern3(4);

// ~================================================================================================

// function pattern5(n) {                //* 1 0 1 0
//   for (let i = 1; i <= n; i++) {      //* 1 0 1 0
//     let bag = "";                     //* 1 0 1 0
//                                       //* 1 0 1 0
//     for(let j = 1; j <= n; j++){
//         if(j % 2 !== 0){
//             bag += "1 ";
//         }else{
//             bag += "0 ";
//         }
//     }
//     console.log(bag);
//   }
// }
// pattern5(4);
// ~===============================================================================================

// function patternZ(n){               //* 1 2 3 4
//     for(let i = 0; i < n; i++){     //* 5 6 7 8
//         let bag = "";               //* 9 10 11 12
//         for(let j = 0; j < n; j++){ //* 13 14 15 16
//             bag += String((n*i+1)+j)+" ";
//         }
//         console.log(bag);
//     }
// }
// patternZ(4);

// ~=================================================================================================

// function patternX(n){

//     for(let i = 1; i <= n; i++){         //~ *
//         let bag = "";                    //~ * *
//         for(let j = 1; j <= i; j++){     //~ * * *
//             bag += "* ";                 //~ * * * *
//         }
//         console.log(bag);
//     }
// }
// patternX(4);
// ~=============================================================================================

// function patternA(n){

//     for(let i = 1; i <= n; i++){            //* 1
//         let bag = "";                       //* 1 2
//                                             //* 1 2 3
//         for(let j = 1; j <= i; j++){        //* 1 2 3 4
//             bag += j + " ";
//         }
//         console.log(bag);
//     }
// }
// patternA(4);

// ~===================================================================================================

// function patternQ(n){
//     for(let i = 0; i < n; i++){                  //* a
//         let bag = "";                            //* a b
//         let char = 97                            //* a b c
//                                                  //* a b c d
//         for(let j = 0; j <= i; j++){
//             bag += String.fromCharCode(char+j)+" ";
//         }
//         console.log(bag);
//     }
// }
// patternQ(4);

// ~==========================================================================================
//* WAP to concate the string

// let str1 = "abc";
// let str2 = "dhjkls";    //* output: "adbhcjkls"
// let res = "";
// let i = 0;
// let j = 0;

// while(i < str1.length && j < str2.length){
//     res += str1[i]+str2[j]
//     i++;
//     j++;
// }
// while(i < str1.length){
//     res += str1[i]
//     i++;
// }
// while(j < str2.length){
//     res += str2[j];
//     j++;
// }

// console.log(res);

// ~==================================================================================

// function patternA(n){

//     for(let i = 0; i < n; i++){        //!        *          (n = 3)
//         let res = "";                  //!      * *
//                                        //!    * * *
//         for(let j = 0; j < n-i-1; j++){
//             res += "  ";
//         }
//         for(let k = 0; k < i+1; k++){
//             res += "* ";
//         }
//         console.log(res);
//     }
// }
// patternA(3);

// ~==================================================================================================

// function patternB(n){

//     for(let i = 0; i < n; i++){
//         let res = "";

//         for(let j = 0; j < n-i-1; j++){

//             res += "  ";
//         }
//         for(let k = 0; k < i+1; k++){
//             res += k+1+" ";
//         }
//         console.log(res);
//     }
// }
// patternB(4);

// ~============================================================================================

// function patternC(n){

//     for(let i = 0; i < n; i++){

//         let res = "";
//         let char = 65;
//         for(let j = 0; j < n-i-1; j++){

//             res += "  ";
//         }
//         for(let k = 0; k < i+1; k++){
//             res += String.fromCharCode(65+k)+ " ";
//         }
//         console.log(res);
//     }
// }
// patternC(3);

// ~==========================================================================================

// function patternD(n){

//     for(let i = 0; i < n; i++){
//         let res = "";

//         for(let j = 0; j < n-i-1; j++){

//         res += " ";
//         }

//         for(let k = 0; k < i+1; k++){
//             res += "* ";
//         }
//         console.log(res);
//     }
// }
// patternD(4);
// ~=========================================================================================

// function patternE(n){

//     for(let i = 0; i < n; i++){
//         let res = "";

//         for(let j = 0; j < n-i-1; j++){
//             res += "  ";
//         }

//         for(let k = 0; k < (2*i+1); k++){
//             res += "* ";
//         }
//         console.log(res);
//     }
// }

// patternE(5);
// ~============================================================================================

// function patternF(n){

//     for(let i = 0; i < n; i++){
//         let res = "";

//         for(let j = 0; j < n; j++){
//             if(i == j || j == 0 || j == n-1){
//                 res += " *";
//             }
//             else{
//                 res += "  ";
//             }
//         }
//         console.log(res);
//     }
// }

// patternF(5);
// ~============================================================================================

// function patternG(n){                                  //~    
//     for(let i = 0; i < n; i++){                        //~     *      *
//                                                        //~     *    * *
//         let res = "";                                  //~     *   *  *
//         for(let j = 0; j < n; j++){                    //~     * *    *
//             if(j == 0 || j == n-1 || i+j == n-1){      //~     *      *
//                 res += " *";
//             }else{
//                 res += "  ";
//             }
//         }
//         console.log(res);
//     }
// }
// patternG(5);
// ~============================================================================================

// function patternH(n){    //* Arrow                 

//     for(let i = 0; i < n; i++){

//         let res = "";                                         //~  * * * *
//         for(let j = 0; j < n; j++){                           //~      * *
//                                                               //~    *   *
//             if(i == 0 || j == n-1 || i+j == n-1){             //~  *     *
//                 res += " *";
//             }else{
//                 res += "  ";
//             }
//         }
//         console.log(res);
//     }
// }
// patternH(4);
// ~============================================================================================

// function patternH(n){
 
//     for(let i = 0; i < n; i++){                                      //~  * * * *
//                                                                      //~      *
//         let res = "";                                                //~    *
//         for(let j = 0; j < n; j++){                                  //~  * * * *

//             if(i == 0 || i == n-1 || i+j == n-1){
//                 res += " *";
//             }else{
//                 res += "  ";
//             }
//         }
//         console.log(res);
//     }
// }
// patternH(4);
// ~============================================================================================

// function patternI(n){
//     for(let i = 0; i < n; i++){                          //~    *       *
//         let res = "";                                    //~      *   *  
//                                                          //~        * 
//         for(let j = 0; j < n; j++){                      //~      *   *
//             if(i == j || i+j == n-1){                    //~    *       *
//                 res += " *";
//             }
//             else{
//                 res += "  ";
//             }
//         }
//         console.log(res);
//     }
// }
// patternI(5);
// ~============================================================================================

// //*   J           J
// //*     S       S
// //*       P   P
// //*         I
// //*       D   D
// //*     E       E
// //*   R           R

// function patternJ(str){

//     for(let i = 0; i < str.length; i++){

//         let res = "";

//         for(let j = 0; j < str.length; j++){
//             if(i == j  || i+ j == str.length-1){
//                 res += str[i]+" ";
//             }
//             else{
//                 res += "  ";
//             }
//         }
//         console.log(res);
//     }
// }
// patternJ("JSPIDER");


// ~============================================================================================
// * WAP to print first unique character.

// function patternK(str){
//     let obj = {};

//     for(let i = 0; i < str.length; i++){
//         if(!obj[str[i]]){
//             obj[str[i]] = 1;
//         }
//         else{
//             obj[str[i]]++;
//         }
//     }
//     // console.log(obj);
//     let res = "";
//     for(let k in obj){
//         if(obj[k] === 1){
//             res += k;
//             break;
//         }
//     }
//     return res;
// }
// let res = patternK("aabefeb");
// console.log(res);


// !OR

// * WAP to print first unique character.

// function patternK(str) {
//   let alpha = new Array(26).fill(0);
//   //   console.log(alpha);
//   for (let i = 0; i < str.length; i++) {
//     let charCode = str.charCodeAt(i);
//     let index = charCode - 97;
//     // console.log(index);
//     alpha[index] = alpha[index] + 1;
//   }

//   for (let j = 0; j < alpha.length; j++) {
//     if (alpha[j] == 1) {
//       console.log(String.fromCharCode(97 + j));
//       break;
//     }
//   }
// }
// patternK("aabdefb");

// let res = patternK("aabdefb");
// console.log(res);

// ~26-09-2024============================================================================================
// function patternL(n){
//   for(let i = 0; i < n; i++){     //~       * * *   
//     let res = "";                 //~     * * *
//                                   //~   * * *
//     for(let j = 0; j < n-i-1; j++){
//       res += "  ";
//     }
//     for(let k = 0; k < n; k++){
//       res += "* ";
//     }
//     console.log(res);
//   }

// }
// patternL(3);


// ~============================================================================================

//* WAP
// ~============================================================================================
// ~============================================================================================
