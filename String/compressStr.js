//* WAP to compress the string
//* I/P = abacdcab  O/P: a3b2c2d1;

function countChar(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  let bag = "";
  for (let key in obj) {
    bag += key + obj[key];
  }
  return bag;
}
let res = countChar("abacdcab");
console.log(res);  //*a3b2c2d1




// function printChar(str){

//   let newstr = "";
//   for(let i = 0; i < str.lenght; i++){
//     let tempChar = str;


//   }


// }