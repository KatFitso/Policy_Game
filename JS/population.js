
function population(){
    let amount = populus.amount;
    let children = populus.children; //children can't work
    let workers = populus.workers; //workers
    let elders = populus.elders; //elders can't work

    let id = populus.id; //pop
    let temp = 0;

    //how much food people eat, 
    let foodCon = .2*(children) + .5*(workers) + .3*(elders);

    //if we have a surplus of food then we can use that to grow the population
    let growth = Math.floor((foodInfo.amount-foodCon)/10);

    let childChange = Math.floor(growth*0.1)
    let workerChange = Math.floor(growth *0.8)
    let elderChange = Math.floor(growth *0.1)

    //Makes sure that 100% of the growth is accounted for
    temp = childChange + workerChange + elderChange;
    if (temp != growth){
        temp = growth - temp;
        workerChange += temp;
    }

    children += childChange;
    workers += workerChange;
    elders += elderChange;

    //so the pops can't go negative
    if(children < 0){
        temp = 0 - children
        children += temp
        workers -= temp;
    }
    if(elders < 0){
        temp = 0 - elders;
        elders += temp
        workers -= temp;
    }

    //lose condition
    amount = children + workers + elders;

    if(amount<=0){
        alert("you lose");
    }

    populus.children = children;
    populus.elders = elders;
    populus.workers = workers;
    populus.amount = amount;
    document.getElementById("popCount").textContent = amount + " (" + growth + ")";
}

// var pop = 5000 ;
// var popgrowth = 15 ;
// var popdecline = 5 ;
// var farmers = 0;

// setInterval(popCount, 1000);
// setInterval(jobs, 1000) ;

// function popCalc(){

//     return pop + popgrowth - popdecline ;

// }
// function farmCalc(){

//     return pop * .2 ;

// }

// function popCount() {

//     var  Text = "<div style='margin-top: 6px'>Population</div>"
//     Text += "<div style='margin-top: 6px'>" + pop + "</div>"


//     document.getElementById("population").innerHTML = Text;

//     pop = popCalc(pop);

// }
// function jobs() {

//     var  Text = "<div style='margin-top: 3px'>Farmers</div>"
//     Text += "<div>" + farmers + "</div>"

//     document.getElementById("Farmers").innerHTML = Text;

//     farmers = farmCalc(farmers) ;

// }