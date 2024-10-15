
// *Check whether the s1 and s2 is anagram or NOT!!

function isAnagram(str1,str2){
    
    str1 = str1.trim().toLowerCase();
    str2 = str2.trim().toLowerCase();
    let obj = {};
    for(let i = 0; i < str1.length; i++){

        if(!obj[str1[i]]){
            obj[str1[i]] = 1;
        }else{
            obj[str1[i]]++;
        }
    }
    for(let j = 0; j < str2.length; j++){

        if(!obj[str2[j]]){
            obj[str2[j]] = 1;
        }else{
            obj[str2[j]]++;
        }
    }
    let bag = "";
    let flag = false;
    for(let k in obj){
        bag += obj[k];
    }
    for(let k = 0; k < bag.length; k++){
        (bag[k] === bag[k+1]) && (flag = true);
    }
    flag ? console.log("It is ANAGRAM") : console.log("NOT! a ANAGRAM");
}
isAnagram("tan","a nkt")



// function isAnagram(s1,s2){



// }