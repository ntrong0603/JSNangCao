// arrow function expression
// fat arrow =>
// thay the function

// var a = {
//     name: 'AAA',
//     run: function(){
//         // run2 viet ben trong run this o day thuoc run2, run 2 la function global nen can bind
//         // Ham ben trong khong thua ke this cua ham ben ngoai
//         //var that = this;
//         var run2 = function(){
//             console.log(this.name);
//         }.bind(this)// this day la this cua run hay a
//         run2();
//     }
// }
// a.run();

var a = {
    name: 'AAA',
    run: function(){
        // arrow function nay khong co context, bien this nay la bien this cua cai ham ma no nam trong, arrow funciton khong co bien this
        var run2 = () => {
            console.log(this.name);
        };
        run2();
    }
}
a.run();

var b = {
    name: 'AAA',
    run: function(){
        // Ham ben trong khong thua ke this cua ham ben ngoai
        // setTimeout(function(){
        //     console.log(this.name);
        // }, 2000);

        setTimeout(() => console.log(this.name), 2000);
    }
}
b.run();