// operators

//     1. assignment operators  =
//     2. arithmatic operators  +, -, * ,/ ,**(exponent) ,%(modulus -> reminder when divition)

num1 = 5;
num2 = 2;

console.log("add" , num1+num2);//7
console.log("substract" , num1 - num2);//3
console.log("multi" , num1*num2);//10
console.log("divide", num1/num2);//2.5
console.log("exponent", num1**num2);//25
console.log("module", num1%num2);//1

// 3. Relational operator <> <= >= == != === -> output true/false

console.log(4<8);
console.log(4>9);
console.log(9<=9);
console.log(10>=80);
console.log(1==true);
console.log(5==8);
console.log(true!=false);
console.log(1>false);

// == will check for the content/value not check the datatype
// === will check the value and datatype also.

a="10";
b=10;
console.log(a==b);
console.log(a===b);

// 4. Increment ++ & decrement --
num=5;
// num=num+1;//6
// num=num+1;//6
num++;//6
num--;//5
num--;//4
console.log(num);

//important
num=5;
// console.log(num++); //display first then add one to the value
console.log(++num); //first add one to the value then displays it

//same for decrement.

// 5.compound assignment / shorthand operator(+=,-=,*=,**=,/=,%=)

num=8;
// num=num+2; // we can write it in a shortest way num+=2;

// num+=2;console.log(num);
// num-=2;console.log(num);
// num*=2;console.log(num);
// num**=2;console.log(num);
// num/=2;console.log(num);
num%=2;console.log(num);

// 6.Logical operators  && - and , || or , ! - not 

console.log(3<8 && 50>15);
console.log(3<8 || 50>15);
console.log(!(3<8 && 50>15));

//true && true = true
//true && false = false
//false && true = false
//false && false = false

//true || true = true
//true || false = true
//false || true = true
//false || false = false

//!true = false -> opposite value aanu edukuka
//!false = true -> opposite value aanu edukuka






