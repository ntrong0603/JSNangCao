// global context
// function context
// bind

var mouse = {
    name: 'Mickey',
    sayHi: function(){
        console.log("Hi, My name is", this.name);
    }
}

//mouse.sayHi();

// var say = mouse.sayHi(); //gan function sayHi cho bien say nhung khong co noi dung ben trong cuj the o day la this.name.

var cat = {
    name: 'Tom'
}

var say = mouse.sayHi.bind(cat); //bien this se dc dat gia tri cho truoc o day la mouse
say();