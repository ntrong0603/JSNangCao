//constructor function
function Mouse(name){
    this.name = name;
}
Mouse.prototype.run = function(){
    console.log(`${this.name} is running`);
}

const mickey = new Mouse("Mickey");
mickey.run();

//object literals
const jerry = {
    name: "Jerry",
    run: function(){
        console.log(`${this.name} is running`);
    }
}
jerry.run();

//Enhanced object literals
const name = "Tom";
const cat = {
    name,// name: name viet gon
    run(){// ham viet gon
        console.log(`${this.name} is running`);
    }
}
cat.run();