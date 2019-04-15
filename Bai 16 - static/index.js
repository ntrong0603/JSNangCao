// static khong duoc goi boi cac instance ma duoc goi boi chinh class cua no
// dung khi khong doi hoi phai tao object moi de su dung function
class Foo{
    static someMethod(){
        console.log('some method'); 
    }

    anotherMethod(){
        console.log("another method");
    }
}

// vi du

Foo.someMethod();
// khong the goi Foo.anotherMethod() ma phai tao instance (object)
// instance la mot object duoc tao ra boi class do laf instance cua class do
// instance khong goi duoc someMethod
const foo = new Foo();
foo.anotherMethod();

