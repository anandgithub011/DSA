// function isPangram(str) {
//   str = str.toLowerCase();
//   let alpha = "abcdefghijklmnopqrstuvwxyz";
//   let count = 0

//   str.split("").forEach((ele) => {
//     alpha.includes(ele) && count++;
//   });
//   (count >= 26) ? console.log("Pangram") : console.log("NOT");
// }

// isPangram("The quick brown fox jumps over the lazy dog");






// function isPangram(str){
//     str = str.trim().toLowerCase();

//     let arr = new Array(26).fill(0);

//     for(let i = 0; i < str.length; i++){

//         let code = str.charCodeAt(i);
//         let index = code - 97;
//         arr[index] = arr[index] + 1;
//     }

//     for(let j = 0; j < arr.length; j++){
//         if(arr[j] == 0){
//             return false;
//         }
//     }
    // console.log(arr);
//     return true;
// }
// let res = isPangram("The quick brown fox jumps over the lazy dog");
// console.log(res);
