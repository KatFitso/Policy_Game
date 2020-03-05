var pop = 5000 ;
var popgrowth = 15 ;
var popdecline = 5 ;
var farmers = 0;

setInterval(popCount, 1000);
setInterval(jobs, 1000) ;

function popCalc(){

    return pop + popgrowth - popdecline ;

}
function farmCalc(){

    return pop * .2 ;

}

function popCount() {

    var  Text = "<div style='margin-top: 6px'>Population</div>"
    Text += "<div style='margin-top: 6px'>" + pop + "</div>"

    
    document.getElementById("population").innerHTML = Text;

    pop = popCalc(pop);

}
function jobs() {
    
    var  Text = "<div style='margin-top: 3px'>Farmers</div>"
    Text += "<div>" + farmers + "</div>"

    document.getElementById("Farmers").innerHTML = Text;

    farmers = farmCalc(farmers) ;

}