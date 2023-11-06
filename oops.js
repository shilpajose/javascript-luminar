//object oriented programming(oops)

// procedural/functional
// objectoriented and procedeural = javascript

//class - design pattern/plan/bluprint/structure
//object  - real-world entity
//reference - reusability of design/ storing objects as variable. acting as variable

// class Person{
//     reading(){//method
//         console.log("person is reading");
//     }
//     walking(){
//         console.log("person is walking");
//     }
// }
// pe1=new Person()
// pe1.reading()
// pe1.walking()
// pe1.reading()
// pe1.walking()


// pe2=new Person()
// pe2.reading()


// ------------------------------------------------------------------------------------------------

//instance variable
//this keyword

// class Person {
//     setValues(name, age, location) {
//         this.name1 = name //instance variable
//         this.age = age //instance variable
//         this.place = location //instance variable
//         console.log(this.name1); //pe3   inganeyum kodukkam
//     }
//     displayData() {
//         console.log(this.name1);
//         console.log(this.age);
//         console.log(this.place);
//     }
// }

// pe1 = new Person()
// pe1.setValues("anu",22,"kochi")
// pe1.displayData()

// pe2 = new Person()
// pe2.setValues("shilpa",30,"kochi")
// pe2.displayData()

// pe3 = new Person()
// pe3.setValues("aaa")


// example
// class Student{
//     setValues(name,rollno,departent){
//      this.name=name
//      this.rollno=rollno
//      this.dept=departent

//      console.log(this.name,this.rollno,this.dept);//inganeyum kodukkam  stu3
//     }
//     displayData(){
//         console.log(this.name);
//         console.log(this.rollno);
//         console.log(this.dept);
//     }
// }
//  stu1 = new Student()
//  stu1.setValues("steve",4,"LKG")
//  stu1.displayData()

//  stu2 = new Student()
//  stu2.setValues("jaiden",4,"LKG")
//  stu2.displayData()

//  stu3 = new Student()
//  stu3.setValues("Ashlin",7,2)
// --------------------------------------------------------------------------------------------
//constructor
// class Person {
//     constructor(name, age, location) {
//         this.name = name
//         this.age = age
//         this.place = location

//         console.log(this.name, this.age, this.place);
//     }
// }
// p1 = new Person("babitha", 29, "wayanad")
// p2 = new Person("shilpa", 30, "kochi")
// p3 = new Person("rohini", 29, "Chennai")

// example 
// class Calculator{
//     constructor(n1,n2){
//         this.n1=n1
//         this.n2=n2
//     }
//     add(){
//         console.log(this.n1+this.n2);
//     }
//     sub(){
//         console.log(this.n1-this.n2);
//     }
//     mul(){
//         console.log(this.n1*this.n2);
//     }
//     div(){
//         console.log(this.n1/this.n2);
//     }
//     exponent(){
//         console.log(this.n1**this.n2);
//     }
//     modulus(){
//         console.log(this.n1%this.n2);
//     }
// }

// calc1 = new Calculator(10,5)
// calc1.add()
// calc1.sub()
// calc1.mul()
// calc1.div()
// calc1.exponent()
// calc1.modulus()


//Bank
//ac create - name, acc no,balance=0 this.balance=0
//deposit - amnt
//withdrawl - amount balance?


class Bank {
    constructor(name, accno) {
        this.name = name
        this.accno = accno
        this.balance = 0

        console.log("Your bank acc created successfully");
    }
    deposit(damount) {
        this.damount=damount
        this.balance=this.balance+this.damount

        console.log(this.name);
        console.log(this.accno);
        console.log("Your account has been credited with: ",this.damount);
        console.log("The balance amount: ",this.balance);
    }
    withdrawal(wamount) {
        this.wamount = wamount
        if (this.wamount  > this.balance) {
            console.log("Insuffcient balance");
        }
        else {
            this.balance=this.balance-this.wamount
            console.log("Your acc has been debited with: ",this.wamount);
            console.log("The balance amount: ",this.balance);
        }

    }
}
p1 = new Bank("shilpa",67453434567)
p1.withdrawal(500)
p1.deposit(20000)
p1.withdrawal(1500)
p1.deposit(1000)








