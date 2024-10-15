// // * Upward direction downward direction;
function trackTheValley(str){

    let output = 0;
    let step = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == "U"){
            step++;
            if(step == 0){
                output++;
            }
        }
        else if(str[i] == "D"){
            step--;
        }
    }
    console.log(output)

}

// let res = trackTheValley("DUDUDU");
let res = trackTheValley("UDDUDUDU");


