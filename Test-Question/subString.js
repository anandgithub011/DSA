// * WAP print all the substring

// function subString(str){
//     for(let i = 0; i < str.length; i++){
//         let bag = "";
//         for(let j = i; j < str.length; j++){
//             bag += str[j];
//             console.log(bag);
//         }
//     }
// }
// subString("racecar");

//~==============================================================================

// function subString(str){
//     for(let i = 0; i < str.length; i++){

//         for(let j = i; j < str.length; j++){
//             console.log(str.slice(i,j+1));
//         }
//     }
// }
// subString("abc");

// ~======================================================================

function longestSubSTring(str) {
  let max = -Infinity;
  for (let i = 0; i < str.length; i++) {
    let subStr = "";

    for (let j = i; j < str.length; j++) {
      subStr += str[j];
      if (notRepeat(subStr) && max < subStr.length) {
        max = subStr.length;
      }
    }
  }
  console.log(max);
}

function notRepeat(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        return false;
      }
    }
  }
  return true;
}
// let res = notRepeat("qweqrty");
// console.log(res);

// longestSubSTring("ababacdefacde");
