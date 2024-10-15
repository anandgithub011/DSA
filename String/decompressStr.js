//* WAP to deCompress the string and  assume the character is single digit.

function printChar(str){

    let bag = "";
    for(let i = 0; i < str.length; i+=2){

        for(let j = 1; j <= str[i+1]; j++){
            bag += str[i];
        }
    }
    return bag;
}
let res = printChar("a3b2c4d1");
console.log(res);   //* aaabbccccd