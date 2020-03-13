
function population(){
    let population = populus.amount;
    let children = populus.children; //children can't work
    let workers = populus.workers; //workers
    let elders = populus.elders; //elders can't work

    //how much food people eat, 
    

    //if we have a surplus of food then we can use that to grow the population
    let births = Math.floor(foodInfo.amount/20);//should be updated later
    if(births < 0){
        births = 0;
    }
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    the population will grow and only be children. when the time ticks over 
    10% of the children will become workers and 2% of the workers will 
    become elders also unable to work and then 10% of all elders will die. 

    for now this is a perfect with no unnatural deaths.
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    let childAgedUp = children * 0.1
    let workerAgedUp = workers * 0.03   
    let deaths = elders *.1

    children += births;
    
    workers += childAgedUp;
    children -= childAgedUp;

    elders += workerAgedUp;
    workers -= workerAgedUp;

    elders -= deaths;

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    population = children + workers + elders;
    let change = births - deaths

    //lose condition
    if(population<=0){
        alert("you lose");
    }

    //updates the population values
    populus.children = children;
    populus.elders = elders;
    populus.workers = workers;
    populus.amount = population;
    
    //updates the food values
    let foodCon = .4*(children) + .5*(workers) + .3*(elders);
    foodInfo.consumption = foodCon;

    //updates the page
    population = rounding(children) + rounding(workers) + rounding(elders);
    
    document.getElementById("popCount").textContent = rounding(population) + " (" + rounding(change) + ")";
    document.getElementById("childCount").textContent = rounding(children) + " (" + rounding((births - childAgedUp)) + ")";
    document.getElementById("workerCount").textContent = rounding(workers) + " (" + rounding((childAgedUp - workerAgedUp)) + ")";
    document.getElementById("elderCount").textContent = rounding(elders) + " (" + rounding((workerAgedUp - deaths)) + ")";
    document.getElementById("deathCount").textContent = rounding(deaths) + " (" + -(100-((population-deaths) / population * 100)).toFixed(2) + "%)";
    document.getElementById("birthCount").textContent = rounding(births) + " (" + -(100-((population+births) / population * 100)).toFixed(2) + "%)";
}