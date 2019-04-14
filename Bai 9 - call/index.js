// call
// method call
function greeting(name, age){
    console.log(`Hi! ${name} and age ${age}`);
}   

// dung method call goi ham nhu 1 ham binh thuong
// nhan bao nhieu tham so cung dc
// tham so dau tien dai dien cho this neu co this trong ham
// tham so thu 2 tro di la tham so cua ham
greeting.call(null, 'Tom', 99);


function greeting2(){
    console.log(`Hi! ${this.name} and age ${this.age}`);
}   
const cat = {
    name: 'Tom2',
    age: 99
}
greeting2.call(cat);

// bind tra ve 1 ham bat buoc co () cuoi vd greeting2.bind(cat)()
// goi ham va tra ve gia tri ma ham tra ve