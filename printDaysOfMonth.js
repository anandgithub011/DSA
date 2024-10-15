
let month = ["jan","feb","mar","april","may","june","july","aug","sep","oct","nov","dec"];

let num = 1;

if(num >= 0 && num <= 11){

    if(num === 0 || num === 2 || num === 4 || num === 6 || num === 7 || num === 9 || num === 11){
        console.log(`${month[num]}, It contain 31 days`) ;   
    }
    else if(num === 1){
        console.log(`${month[num]},It contain 28/29 days`);
    }
    else{
        console.log(`${month[num]},It contain 30 days`);
    }
}else{
    console.log("It is invalid month number");
}