var foodprod = 0;
var foodcons = 0;
var infood = 0 ;
setInterval(foodCalc, 1000);

function sumFood(){
    var counting = farmers-1000 ;
    for (i = 1; i < counting; i++) {
        infood+=infood+20 ;
    }
    return infood + 5100 ;
}
function foodCalc(){
    if (farmers <= 1000) {
        foodprod = farmers * 5.1 ;
    }else{
        foodprod = sumFood(foodprod) ;
    }
    foodcons = pop ;
    infood = 0 ;

    return Math.ceil(food + foodprod - foodcons);
}

