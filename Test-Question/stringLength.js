// function lastLength(str){
// str.trim();
// console.log(str);
// let c = 0;

// let arr = [];
// let word = "";
// for(let i = 0; i < str.length; i++){
//     let char = str[i];

//     if(char !== " "){
//         word += char;
//     }else{
//         if(word != ""){
//             arr.push(word);
//             word = "";
//         }
//     }
// }
// if(word != ""){
//     arr.push(word);
// }
// console.log(arr[arr.length-1]);

// }
// lastLength("The sky is blue");

// ~=======================================

// function lastLength(str){

// }
// lastLength("The sky is blue hbd");

//~ 4..=================================================================
// function reverseSentence(str){
//     let rev = ""
//     for(let i = str.length-1; i >= 0; i--){
//         rev += str[i];
//     }
//     return rev;

// }
// let res = reverseSentence("The sky is blue");
// console.log(res)

//~ 3..=================================================================

// function reverseSentence(str) {
//   let rev = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
//   }
//   console.log(rev)
//   let reverse = rev.split(" ");
//   let arr = [];
//   for (let j = 0; j < reverse.length; j++) {
//     let newWord = "";

//     for (let k = reverse[j].length - 1; k >= 0; k--) {
//       newWord += reverse[j][k];
//     }
//     arr.push(newWord);
//   }
//   console.log(arr.join(" "));
// }
// reverseSentence("The sky is blue");
// console.log(res)

//~ 2..=======================================================================

// function reverseSentence(str){

//     let arr = str.split(" ");

//     for(let i = 0; i < arr.length; i++){
//         let rev = "";

//         for(let j = arr[i].length-1; j >= 0; j--){
//             rev += arr[i][j];
//         }
//         console.log(rev)
//     }

// }
// let res = reverseSentence("The sky is blue");
// console.log(res)

// ~  2..==============================================================================
// function maxLength(str) {
//   let res = str.trim();
//   let max = -Infinity;
//   let maxWord = "";
//   let prevWord = "";
//   let c = 0;
//   for (let i = 0; i < res.length; i++) {
//     if (res[i] == " ") {
//       if (max < c) {
//         max = c;
//         maxWord = prevWord;
//       }
//       prevWord = "";
//       c = 0;
//     } else {
//       c++;
//       prevWord += res[i];
//     }
//   }
//   if (max < c) {
//     max = c;
//     maxWord = prevWord;
//   }
//   console.log(maxWord);
//   return max;
// }

// let res = maxLength("the skfkjbyfgh is blue");
// console.log(res);

//~ 5..==============================================================================

// let n = 24;

// while (n !== 1) {}

//~3..==============================================================================
// function reverseString(str){
//     let split = str.split(" ");
//     let rev = ""
//     for(let i = split.length-1; i >= 0; i--){
//         rev += split[i]+" ";
//     }
//     console.log(rev);
// }
// reverseString("The sky is blue")
// ~==============================================================================
// ~==============================================================================
// ~==============================================================================
// ~==============================================================================
// ~==============================================================================
