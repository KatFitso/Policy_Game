
setInterval(function(){
        update(foodInfo);
        update(ironInfo);
        update(woodInfo);
        update(stoneInfo);
        update(moneyInfo);
        population();
    }, 
1000);


function update(source){
    
    //array of every button
    let buttons = document.getElementsByClassName("button");
    let amount = source.amount;
    let max = source.max;
    let id = source.id;

     //a^y + b(z) + c
    let a = source.a 
    let b = source.b
    let c = source.c
    let z = source.z
    let y = source.y

    let burnFood = buttons[0].value;
    let burnIron = buttons[1].value;
    let burnWood = buttons[2].value;
    let burnStone = buttons[3].value;
    let burnMoney = buttons[4].value;

    //policy modifiers
    if(id == "food"){
        if(burnFood == "true"){
            c += 300
        }
        if(burnIron == "true"){
            c -= 4
        }
    }

    //math
    //a^y + b(z) + c
    let change = Math.pow(a, y) + b*z + c
    if(amount < max){
        amount += change
    }else if(amount > max){
        amount = amount - (amount-max)/2
    }

    let width = amount/max * 100;
    if(width > 100){
        width = 100;
    }

    //update the page
    document.getElementById(id+"Count").textContent = Math.floor(amount) + " (" + change + ")";
    document.getElementById(id+"Max").textContent = max;
    document.getElementById(id+"Progress").style.width = width+"%";
    document.getElementById(id+"Progress").textContent = Math.floor(width)+"%";

    //update the values
    source.amount = amount;
}