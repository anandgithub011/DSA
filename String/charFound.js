//* WAP check whether the given char is present in the string or not1

function charFound(str, target) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === target) {
        return true;
      }
    }
    return false;
  }
  let res = charFound("apple", "a");
  res ? console.log("Char is Found") : console.log("Not Found");



// * -------------------Using Two-pointer----------------

// function charFound(str,target){
//     let left = 0;
//     let right = str.length-1;

//     while(left <= right){
//         if(str[left] === target || str[right] === target){
//             return true;
//         }
//         left++;
//         right--;
//     }
//     return false;
// }
// let res = charFound("applhgvjbke","v");

// console.log(res);