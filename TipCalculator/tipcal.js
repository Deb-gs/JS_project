/*var bills=100;

function calcTip() {
    var tips;
    if(bills>=50 && bills<=300){
        tips=(bills*15)/100;
    }
    else{
        tips=(bills*20)/100;
    }
    return tips+bills;
}

console.log(calcTip());*/

var bills = [125,555,44];

function calcTip(bills) {
    var tip_per;
    if(bills>=50 && bills<=300){
        tip_per=(bills*15)/100;
    }
    else{
        tip_per=(bills*20)/100;
    }
    return tip_per;
}

var tip = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

var total = [tip[0]+bills[0],tip[1]+bills[1],tip[2]+bills[2]];
console.log("BILL:-----");
console.log(bills);
console.log("TIPS:-----");
console.log(tip);
console.log("TOTAL AMMOUNT:-----");
console.log(total);

