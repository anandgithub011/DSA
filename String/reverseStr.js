// * WAP to reverse the given string
function reverseStr(str){
    let rev = "";
    for(let i = str.length-1; i >= 0; i--){
        rev += str[i];
    }
    return rev;
}
console.log(reverseStr("car"));
