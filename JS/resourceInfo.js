
//just a function that can be used everywhere else to round numbers
//you can add a lot more to this later for formatting with commas or $ etc
//should also be used for the people because you need to have whole people
function rounding(num){
    if(num > 0){
        return Math.ceil(num)
    }else if(num < 0){
        return Math.floor(num)
    }else{
        return 0;
    }
}

let speed = {
    norm: 1000,
    fast: 500,
    super: 250,
    crazy: 100,
}

let foodInfo = {
    id: "food",
    max: 100,
    amount: 0,
    production: 2,
    consumption: 1,
    change: 1,
}
let ironInfo = {
    id: "iron",
    max: 100,
    amount: 0,
    production: 2,
    consumption: 1,
    change: 1,
}
let woodInfo = {
    id: "wood",
    max: 100,
    amount: 0,
    production: 2,
    consumption: 1,
    change: 1,
}
let stoneInfo = {
    id: "stone",
    max: 100,
    amount: 0,
    production: 2,
    consumption: 1,
    change: 1,
}
let moneyInfo = {
    id: "money",
    max: 100,
    amount: 0,
    production: 2,
    consumption: 1,
    change: 1,
}
let populus = {
    id: "pop",
    amount: 21,
    children: 2,
    elders: 2,
    workers: 17,
    foodCon: 0
}
let jobs = {
    farmers: 0,
    foragers: 17,
    loggers: 0,
    hunters: 0,
    miners: 0,
    traders: 0,
    scholars: 0,
    soldiers: 0,
    doctors: 0,
    artisans: 0,
    entertainers: 0,
    carpenters: 0
}