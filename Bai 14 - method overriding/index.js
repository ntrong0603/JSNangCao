// method overriding ( ghi de method)

class CoffeeMachine{
    constructor(){}
    makeCoffee(){
        console.log("Making coffee ....");
    }
}

class SpecialCoffeeMachine extends CoffeeMachine{
    makeCoffee(cb){
        console.log("Making special coffee ....");
        cb();
    }
}

const coffee = new SpecialCoffeeMachine();
coffee.makeCoffee(function(){
    console.log("Call boss");
});