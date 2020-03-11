
setInterval(function(){
    update(foodInfo);
    update(ironInfo);
    update(woodInfo);
    update(stoneInfo);
    update(moneyInfo);
}, 1000);

let foodInfo = {
    id: "food",
    max: 100,
    amount: 0,
    //a^y + b(z) + c
    a: 0,
    y: 1,
    b: 0,
    z: 1,
    c: 1,
}
let ironInfo = {
    id: "iron",
    max: 100,
    amount: 0,
    //a^y + b(z) + c
    a: 0,
    y: 1,
    b: 0,
    z: 1,
    c: 1,
}
let woodInfo = {
    id: "wood",
    max: 100,
    amount: 0,
    //a^y + b(z) + c
    a: 0,
    y: 1,
    b: 0,
    z: 1,
    c: 1,
}
let stoneInfo = {
    id: "stone",
    max: 100,
    amount: 0,
    //a^y + b(z) + c
    a: 0,
    y: 1,
    b: 0,
    z: 1,
    c: 1,
}
let moneyInfo = {
    id: "money",
    max: 100,
    amount: 0,
    //a^y + b(z) + c
    a: 0,
    y: 1,
    b: 0,
    z: 1,
    c: 1,
}
    


function update(source){
    
    let buttons = document.getElementsByClassName("button");
    let amount = source.amount;
    let max = source.max;
    let id = source.id;

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
            c -= 3
        }
    }

    //math
    let change = Math.pow(a, y) + b*z + c
    if(amount < max){amount += change}
    let width = amount/max * 100;

    //update the page
    document.getElementById(id+"Count").textContent = amount;
    document.getElementById(id+"Max").textContent = max;
    document.getElementById(id+"Progress").style.width = width+"%";
    document.getElementById(id+"Progress").textContent = Math.floor(width)+"%";

    //update the values
    source.amount = amount;
    
}

    // var foodwidth =  Math.floor(food/maxFood*100)+"%";

    // var  Text = "<div style='margin-top: 6px'>FOOD</div>"
    // Text += "<div style='margin-top: 6px'>" + food + "</div>"
    // Text += "<div style='margin-top: 6px'>MAX: "+maxFood+"</div>"
    // Text += "<div id='bar'>"
    // Text += "<div id='progress' style='width:"+foodwidth+"'>"+ foodwidth +"</div>"
    // Text +=  "</div>"
    
    // document.getElementById("food").innerHTML = Text;

    // food = foodCalc(food);
    
    // if(food > maxFood){
    //     food = maxFood
    // }

