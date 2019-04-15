// Closure là một hàm được viết lồng vào bên trong một hàm khác (hàm cha) nó có thể sử dụng biến toàn cục, 
// biến cục bộ của hàm cha và biến cục bộ của chính nó (lexical scoping)

// tim hieu grabage collector check bien khong dung nua bo ra khoi bo nho

// ung dung lam function factory
function sum(a, b){
    const c = a + b;
   
    return function(){
        console.log(c);
    };
}

sum(1, 2)();