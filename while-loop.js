// // // // // //initialization
// // // // // //while(condition){
// // // // //   //  loop code
// // // // //   // increment/decrement
// // // // // //}
// // // // // //
// // // // //       // 1-10
// // // // // // i=1;
// // // // // // while(i<=10){
// // // // // //     console.log(i);
// // // // // //     i++
// // // // // // }

// // // // // //10-1
// // // // // // i=10;
// // // // // // while(i>0){
// // // // // //     console.log(i);
// // // // // //     i--
// // // // // // }

// // // // // //2 4 6 8
// // // // // i=2;
// // // // // while(i<=8){
// // // // //     console.log(i);
// // // // //     i+=2
// // // // // }

// // // // //multiplication program

// // // // // i=1;
// // // // // n=2
// // // // // while(i<=10){
// // // // //     console.log(i,'*',n,'=',i*n);
// // // // //     i++
// // // // // }

// // // // //Factorial 

// // // // // r1=1;
// // // // // r2=5;
// // // // // for(;r1<=r2;r1++){
// // // // //     //r1 fact //r1=5
// // // // //     fact=1;
// // // // //     for(i=1;i<=r1;i++){
// // // // //         //1 2 3 4 5 6
// // // // //         fact*=i;
// // // // //     }
// // // // //     console.log('fact of',r1,fact);
// // // // // }


// // // // r1=1;
// // // // r2=5;
// // // // while(r1<=r2){
// // // //     r1++
// // // //     fact=1
// // // //     i=1
// // // //     while(i<=r1){
// // // //         fact*=i;
// // // //         i++;
// // // //     }
 
// // // //     console.log('fact of',r1,fact);
// // // // }

// // // //r1 to r5 even numbers

// // // // r1=1
// // // // r2=15
// // // // while(r1<=r2){
// // // //    if(r1%2==0){
// // // //     console.log(r1);
// // // //    }
// // // //    r1++
// // // // }

// // // //r1 to r2 divisible by 3 and odd

// // // // r1=1;
// // // // r2=15;
// // // // while(r1<=r2){
// // // //     if(r1%3==0 && r1%2!=0){
// // // //         console.log(r1);
// // // //     }
// // // //     r1++
// // // // }

// // // // n=5;
// // // // fact=1;
// // // // while(n>0){
    
// // // //     fact*=n;
// // // //     console.log(fact);
// // // //     n--
// // // // }

// // // // Break / Continue
// // // // for(i=1;i<=5;i++){
// // // //     if(i==3){
// // // //         break
// // // //     }
// // // //     console.log(i);
// // // // }
// // // // console.log('out',i);//1 2

// // // // for(i=1;i<=10;i++){
// // // //     if(i==5){
// // // //         continue
// // // //     }
// // // //     console.log(i);// 1 2 3 4 6 7 8 9 10
// // // // }

// // // // prime numbers 2 3 5 7  // divisible by 1 and same num. vere onnum pattilla.
 
// // Method 1, while loop
// // n=11;
// // i=2
// // prime=0;
// // while(i<=(n-1)){
// //     if(n%i==0){
// //         prime=1;
// //         console.log("Not a prime number");
// //         break;
// //     }
// //     i++;
// // }
// // if(prime!=1)
// // console.log("Prime Number");

// // n=5;
// // flag=0
// // for(i=2;i<n;i++)
// // {
// //     if(n%i==0){
// //         flag=1;
// //         break;
// //     }
// // }
// // if(flag==0){
// //     console.log('prime Number');
// // }
// // else{
// //     console.log('Not prime Number');
// // }

// n=5; // 2 3 4 

// for(i=2;i<n;i++)
// {
//     if(n%i==0){

//         break;
//     }
// }
// console.log(i)
// if(n==i){
//     console.log(n,"prime");
// }
// else{
//     console.log(n,"Not prime");
// }

//r1 = 10; r2=20; // print prime numbers 10-20 

// r1=20;
// r2=30;
// for(;r1<=r2;r1++){
//     for(i=2;i<r1;i++){
//         if(r1%i==0){
//             break
//         }
//     }
//     if(r1==i){
//         console.log(r1);
//     }
// }

// sum of prime numbers

r1=3
r2=10
sum=0
for(;r1<=r2;r1++){
    for(i=2;i<r1;i++){
        if(r1%i==0){
            break;
        }
    }
    if(r1==i){
        sum+=r1
    }
    
}
console.log(sum);

