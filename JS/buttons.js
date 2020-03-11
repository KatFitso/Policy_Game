window.onload = startUp;
window.onload = function(){
        update(foodInfo);
        update(ironInfo);
        update(woodInfo);
        update(stoneInfo);
        update(moneyInfo);
};

function startUp(){
    var buttons = document.getElementsByClassName("button");
    for(var i = 0; i < buttons.length; i ++){
        buttons[i].addEventListener("mouseup", toggle)
    }
}

function toggle(e){
    let ID = e.target.value;
    if(ID === "false"){
        e.target.value = "true";
    }else{
        e.target.value = "false";
    }
}