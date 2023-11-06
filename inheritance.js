//inheritance  : to use properties(methods and attributes) of one class in another class
//extends keyword

//single inheritance :- oru child nu oru parent (parent nte gunangal makkalkk kittille )
// class A { //parent class/base/super
//     methoda() {
//         console.log("inside method a");
//     }
// }
// class B extends A{//child class/sub class/derived class
//     methodb(){
//         console.log("inside method b");
//     }
// }
// obj = new B()
// obj.methodb()
// obj.methoda()
// --------------------------------------------------------------------------------------------------
//Multiple Inheritance : more than one parent, javascript not supporting multiple inheritance
// --------------------------------------------------------------------------------------------------
// Multilevel/ Heirarchiel inheritance  (grandparent nte gunangal grand child nu kittille)

class A{
    methoda(){
        console.log("inside a");
    }
}
class B extends A{
    methodb(){
        console.log("inside b");
    }
}
class C extends B{
    methodc(){
        console.log("inside c");
    }
}
objc = new C()
objc.methodc()
objc.methodb()
objc.methoda()

//here class B acts as both parent and child


