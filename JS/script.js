
window.onload = startUp();
window.onload = function(){
       foodCalc()
        population();
        jobsCalc();
};

setInterval(function(){
        foodCalc()
        population();
        jobsCalc();
    }, 
200);


function update(source){
    
    //array of every button
    let buttons = document.getElementsByClassName("button");
    let amount = source.amount;
    let max = source.max;
    let id = source.id;
    let change = source.change;
    let production = source.production;
    let consumption = source.consumption;

    let burnFood = buttons[0].value;
    let burnIron = buttons[1].value;
    let burnWood = buttons[2].value;
    let burnStone = buttons[3].value;
    let burnMoney = buttons[4].value;

    //policy modifiers

    if(burnFood === "true"){}

    let width = amount/max * 100;
    if(width > 100){
        width = 100;
    }
}