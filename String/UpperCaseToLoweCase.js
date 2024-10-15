// * WAP to Convert upperCase to lowerCase and lowerCase to UpperCase.

function convertLetter(str){
    let res = "";
    for(let i = 0; i < str.length; i++){

        let val = str.charCodeAt(i);
        if(val >= 97 && val <= 122){
            res += str[i].toUpperCase();
        }
        else if(val >= 65 && val <= 90){
            res += str[i].toLowerCase();
        }
    }
    return res;
}
console.log(convertLetter("dfFFG"))