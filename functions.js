// // //Function without argument
// // function addNumbers(){
// //     num1=10;
// //     num2=10;
// //     sum=num1+num2;
// //     console.log(sum);
// // }
// // addNumbers()
// // //Function with argument

// // function add(num1,num2){
// //     sum=num1+num2
// //     console.log(sum);
// // }
// // add(3,4)
// // add(7,3)/

// // problems

// // multiplication table


// // function multiplication(n){
// //     for(i=1;i<=10;i++){
// //         console.log(i,"*",n,"=",i*n);
// //     }
// // }
// // multiplication(1)
// // multiplication(2)
// // multiplication(3)
// // multiplication(4)
// // multiplication(5)

// // H/W
// //1.factorial

// // function factorial(n){
// //     fact=1;
// //     for(i=1;i<=n;i++){
// //      fact*=i;
// //     }
// //     console.log(fact);
// // }
// // factorial(5)

// // 2.fibinacci
// // function fibanocci(nterms){
// //     n1=0
// //     n2=1
// //     for(;nterms>0;nterms--){
// //         console.log(n1);
// //         n3=n1+n2;
// //         n1=n2;
// //         n2=n3;
// //     }
// // }
// // fibanocci(5)

// // 3.range prime Number

// // function primeNumbers(n1,n2){
// //     for(;n1<=n2;n1++){
// //         for(i=2;i<n1;i++){
// //             if(n1%i==0){
// //                 break
// //             }
// //         }
// //         if(n1==i){
// //             console.log(n1);
// //         }
// //     }
// // }
// // primeNumbers(10,30)

// // function with return type

// // function add(num1,num2){
// //     sum=num1+num2
// //     return sum
// // }
// // s=add(9,8)
// // console.log(s);
// // console.log(add(2,9));

// //return, interpreter exits after one iteration.
// // function displayi(){
// //     for(i=1;i<=5;i++){
// //         return i
// //     }
// // }
// // console.log(displayi());


// //+ve or -ve
// // function posNeg(n){
// //         if(n>0){
// //         return "+ve"+" "+n
// //         }else if(n<0){
// //             return "-ve"+" "+n
// //         }else{
// //             return "Zero"+" "+n
// //         }

// // }
// // console.log(posNeg(8));
// // console.log(posNeg(-8));
// // console.log(posNeg(0));

// //check for prime number
// // 1.
// // function primeNum(n) {
// //     for (i = 2; i < n; i++) {
// //         if (n % i == 0) {
// //             break
// //         }

// //     }
// //     console.log(i);
// //     if (n == i) {
// //         return "prime"
// //     }
// //     else{
// //         return "non prime"
// //     }
// // }
// // console.log(primeNum(5));

// // 2.for prime number check use this method now onwards
// // function primeNum(n) {
// //     for (i = 2; i < n; i++) {
// //         if (n % i == 0) {
// //             return "not prime"
// //         }
// //     }
// //     return "prime"
// // }
// // console.log(primeNum(6));


// ///arrow function
// // add=(n1,n2)=>{
// // return n1+n2
// // }
// // console.log(add(6,9));

// //even or odd

// // evenOrodd=n=>{
// //     if(n%2==0){
// //         return "even"
// //     }
// //     else{
// //         return "odd"
// //     }
// // }
// // console.log(evenOrodd(8));

// //square

// // square=n=>{
// //     return n**2
// // }
// // for(i=1;i<=5;i++){
// //     console.log(square(i));
// // }


// // H/w 1-10 factorial

// // // r2=5;
// // // for(;r1<=r2;r1++){
// // //     //r1 fact //r1=5
// // //     fact=1;
// // //     for(i=1;i<=r1;i++){
// // //         //1 2 3 4 5 6
// // //         fact*=i;
// // //     }
// // //     console.log('fact of',r1,fact);


 factorial = (num) => {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  };
  
  for (let i = 1; i <= 10; i++) {
    console.log(`Factorial of ${i}: ${factorial(i)}`);
  }

// //   o/p:
// // Factorial of 1: 1
// // Factorial of 2: 2
// // Factorial of 3: 6
// // Factorial of 4: 24
// // Factorial of 5: 120
// // Factorial of 6: 720
// // Factorial of 7: 5040
// // Factorial of 8: 40320
// // Factorial of 9: 362880
// // Factorial of 10: 3628800


// // or

// factorial=n=>{
//     fact=1
//         for(;n>0;n--){
//             fact*=n
//         }
//         return fact
// }
// for(i=1;i<=10;i++){
//     console.log(factorial(i));
// }



