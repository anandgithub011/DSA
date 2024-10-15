

//* WAP Tom is writing a secret message using a string of text str(given). How ever he accidently mixed up to important characters that is ch1 and ch2. Now all instance of ch1 have turned into ch2, and ch2 to ch1. your mission is top help the Tom by creating a function that will reach to original message. the function should take string (str) along with the two character ch1 and ch2 and scrap them back to their correct places. so that the message is exactly as Tom intended it.

//* I/P:  "apple"
// ch1 = a
// ch2 = p
//* O/P: "paale"



function missPlace(str,ch1,ch2){
    let res = "";

    for(let i = 0; i < str.length; i++){

        if(str[i] == ch1){
            res += ch2;
        }
        else if(str[i] == ch2){
            res += ch1;
        }else{
            res += str[i];
        }
    }
    return res;
}

let res = missPlace("paale","a","p");
console.log(res);