window.onload = startUp;

function startUp(){
    var buttons = document.getElementsByClassName("button");
    for(var i = 0; i < buttons.length; i ++){
        buttons[i].addEventListener("mouseup", toggle)
    }
}

function toggle(e){
    let ID = e.target.value;
    if(ID === "off"){
        e.target.value = "on";
    }else{
        e.target.value = "off";
    }
}