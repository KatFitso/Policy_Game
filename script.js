
setInterval(foodCount, 1000);
var food = 0;
var maxFood = 10000;

setInterval(ironCount, 1000);
var iron = 0;
var maxIron = 20;

setInterval(timberCount, 1000);
var timber = 0;
var maxTimber = 10;

setInterval(stoneCount, 1000);
var stone = 0;
var maxStone = 10;

setInterval(moneyCount, 1000);
var money = 0;
var maxMoney = 10;

function foodCount(){
    var foodwidth =  Math.floor(food/maxFood*100)+"%";

    var  Text = "<div style='margin-top: 6px'>FOOD</div>"
    Text += "<div style='margin-top: 6px'>" + food + "</div>"
    Text += "<div style='margin-top: 6px'>MAX: "+maxFood+"</div>"
    Text += "<div id='bar'>"
    Text += "<div id='progress' style='width:"+foodwidth+"'>"+ foodwidth +"</div>"
    Text +=  "</div>"
    
    document.getElementById("food").innerHTML = Text;

    food = foodCalc(food);
}

function ironCount(){
    var ironwidth = Math.floor(iron/maxIron*100)+"%";
    
    var  Text = "<div style='margin-top: 6px'>IRON</div>"
    Text += "<div style='margin-top: 6px'>" + iron + "</div>"
    Text += "<div style='margin-top: 6px'>MAX: "+maxIron+"</div>"
    Text += "<div id='bar'>"
    Text += "<div id='progress' style='width:"+ironwidth+"'>"+ ironwidth +"</div>"
    Text +=  "</div>"
    
    document.getElementById("iron").innerHTML = Text;
    
    if(iron < maxIron){
        iron++; 
    }
}

function timberCount(){
    var timberwidth = timber/maxTimber*100 + "%";

    var  Text = "<div style='margin-top: 6px'>TIMBER</div>"
    Text += "<div style='margin-top: 6px'>" + timber + "</div>"
    Text += "<div style='margin-top: 6px'>MAX: "+maxTimber+"</div>"
    Text += "<div id='bar'>"
    Text += "<div id='progress' style='width:"+timberwidth+"'>"+ timberwidth +"</div>"
    Text +=  "</div>"
    
    document.getElementById("timber").innerHTML = Text;
    
    if(timber < maxTimber){
        timber++; 
    }
}

function stoneCount(){
    var stonewidth = stone/maxStone*100 + "%";

    var  Text = "<div style='margin-top: 6px'>STONE</div>"
    Text += "<div style='margin-top: 6px'>" + stone + "</div>"
    Text += "<div style='margin-top: 6px'>MAX: "+maxStone+"</div>"
    Text += "<div id='bar'>"
    Text += "<div id='progress' style='width:"+stonewidth+"'>"+ stonewidth +"</div>"
    Text +=  "</div>"
    
    document.getElementById("stone").innerHTML = Text;
    
    if(stone < maxStone){
        stone++; 
    }
}

function moneyCount(){
    var moneywidth = money/maxMoney*100 + "%";
    
    var  Text = "<div style='margin-top: 6px'>MONEY</div>"
    Text += "<div style='margin-top: 6px'>" + money + "</div>"
    Text += "<div style='margin-top: 6px'>MAX: "+maxMoney+"</div>"
    Text += "<div id='bar'>"
    Text += "<div id='progress' style='width:"+moneywidth+"'>"+ moneywidth +"</div>"
    Text += "</div>"
    
    document.getElementById("money").innerHTML = Text;
    
    if(money < maxMoney){
        money++; 
    }
}
