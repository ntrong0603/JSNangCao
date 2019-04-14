// Template string
function greeting(name){
    return "Hi, " + name + "!";
}

// cac bieu thuc, ham,  trong dau ${}
// co the xuong dong trong string
function greeting2(name){
    return `Hi, 
    ${name}!`;
}


var result = greeting2('Minh');

console.log(result);