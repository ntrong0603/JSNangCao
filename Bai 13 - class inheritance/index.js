// class inheritance ( thua ke )
/*
class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`Eating....`);
    }
}

class Bird extends Animal{
    run(){
        console.log(`Flying....`);
    }
}

class Parrot extends Bird{
    speek(){
        console.log(`Speeking....`);
    }
}

const hung = new Parrot('Hung');
hung.run();
hung.eat();
hung.speek();
*/
function Animal(name){
    this.name = name;
}

Animal.prototype.eat = function(){
    console.log(`Eating....`);
}

function Brid(name){
    // thua ke construstor function
    Animal.apply(this, arguments);
}

Brid.prototype = new Animal();
Brid.prototype.run = function(){
    console.log(`Flying....`);
}

const hung = new Brid('Hung');
hung.run();
hung.eat();