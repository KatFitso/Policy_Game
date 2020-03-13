

function foodCalc(){
    //initializes the values
    let food = foodInfo.amount;

    //does the math
    let production = jobs.foragers*(.8);
    production += jobs.farmers*(1.5);

    food += production - foodInfo.consumption

    //updates the food values
    foodInfo.amount = food
    foodInfo.production = production

    //updates the page
    document.getElementById("foodCount").textContent = rounding(food) + "(" + rounding(foodInfo.production - foodInfo.consumption)+ ")";
}