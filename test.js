

// function primeNumbers(n1,n2){
//         for(;n1<=n2;n1++){
//             for(i=2;i<n1;i++){
//                 if(n1%i==0){
//                     break
//                 }
//             }
//             if(n1==i){
//                 console.log(n1,'is prime');
//             }
//             else if(n1!=i){
//         console.log(n1,"is not prime");
//             }
//         }
//     }
//     primeNumbers(2,10)



// // for (i = 1; i <= 4; i++) {
// //     s = ""
// //     for (k = 4; k > i; k--) {
// //         s = s + " "
// //     }
// //     for (j = 1; j <= i; j++) {

// //         if (i == 3 && j == 2) {
// //             s = s + "  "
// //         }
// //         else {
// //             s = s + "*" + " "
// //         }
// //     }
// //     console.log(s);

// function patters(s,i){
//      for (i = 4; i>0; i--) {
//             s = ""
//             for (k = 4; k > i; k--) {
//                 s = s + " "
//             }
//             for (j = 1; j <= i; j++) {
        
//                 if (i == 3 && j == 2) {
//                     s = s + "  "
//                 }
//                 else {
//                     s = s + "*" + " "
//                 }
//             }
//             console.log(s);
// }
// for (i = 1; i <= 4; i++) {
//     s = ""
//     for (k = 4; k > i; k--) {
//         s = s + " "
//     }
//     for (j = 1; j <= i; j++) {

//         if (i == 3 && j == 2) {
//             s = s + "  "
//         }
//         else {
//             s = s + "*" + " "
//         }
//     }
//     console.log(s);
// }
// }
// patters()





// function largestFact(n){
//     for(n;n>0;n--){
//         fact=1
//         for(i=1;i<=n;i++){
//             fact*=n
//         }
//     }
// }
// largestFact(9)

// factorial=n=>{
//     n=9
//     fact=1
//         for(;n>0;n--){
//             fact*=n
//         }
//         return fact
// }
// console.log(factorial());


// factorial=n=>{
//     n=6

//     fact=1
//     for(i=1;i<=n;i++){
//         if(i==n-2){
//             break
//         }
//         console.log(i);
//     }
//         for(;n>0;n--){
//             fact*=n
//         }
//         return fact
// }
// console.log(factorial());


function primeNum(n1,n2) {
    for(;n1<=n2;n1++){
        for(i=2;i<=n1;i++){
            if(n1%i==0){
                break
            }
        }
        if(n1==i){
            console.log(n1,'prime');
        }
        else if (n1!=i) {
            console.log(n1,'not prime');
        }
    }  
}
primeNum(2,10)


// function primeNumbers(n1,n2){
//         for(;n1<=n2;n1++){
//             for(i=2;i<n1;i++){
//                 if(n1%i==0){
//                     break
//                 }
//             }
//             if(n1==i){
//                 console.log(n1,'is prime');
//             }
//             else if(n1!=i){
//         console.log(n1,"is not prime");
//             }
//         }
//     }
//     primeNumbers(2,10)
