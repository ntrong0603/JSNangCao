// Array-like object & arguments
const name = ['Thanh', 'Trang', 'Thuy'];
for(let i = 0; i < name.length; i++){
    console.log(name[i]);
}


// array like object, object giong array
// object giong array phai co thuoc tinh length(prototype length), key value giong array
const object = {
    0: 'Thanh',
    1: 'Trang',
    2: 'Thuy',
    length: 3
};

for(let i = 0; i < object.length; i++){
    console.log(object[i]);
}

//arguments bien ton tai trong scope cua function khong phai arrow function
//arguments la nhu mot array
function sum(){
    let result = 0;
    // co the bien arguments thanh array de su dung ham cua rray
    // let number = Array.from(arguments);
    // return number.reduce(function(thamso tich luy, tham so tiep){
    //      return thamso tich luy + tham so tiep;
    //});
    for(let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(sum( 1, 2, 3, 30));
