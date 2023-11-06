// Polymorphism:- 
//manyforms orepole = methods

//methods = same name

// handling in 2 situations
//overloading
//overriding

// 1
//overloading - same method name with diff no of arguments, javascript not supports overloading

// class A{
//     methoda(n){
//         this.n=n
//         console.log("inside A method 1".this.n);
//     }
//     methoda(){
//         console.log("inside B method 2");
//     }
// }
// obja=new A()
// obja.methoda()
// obja.methoda(5) 
//works second method only because javascript not supports overloading


// 2
//overriding - same method name and same arguments , js supports

class parent{
    buyphone(){//0
        console.log("Buy Nokia");
    }
}
class Child extends parent{
    buyphone(){//0
        console.log("Buy iphone");
    }
}
ch1 =new Child()
ch1.buyphone()

//last ezhuthiya method aanu work aakuka,,, overriding 



