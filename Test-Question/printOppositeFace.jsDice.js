//* WAP to print the opposite side of dice


function printOppositeDice(num){
    let dice;
    let target = 7;
    if(num <= 6){
        dice = target-num;
    }
    console.log(dice);
}
printOppositeDice(6);