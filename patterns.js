// // for(i=1;i<=5;i++){ //1
// //     for(j=1;j<=5;j++){ //1
// //         console.log(i,j);
// //     }
// // }
// // o/p

// // 1 1
// // 1 2
// // 1 3
// // 1 4
// // 1 5
// // 2 1
// // 2 2
// // 2 3
// // 2 4
// // 2 5
// // 3 1
// // 3 2
// // 3 3
// // 3 4
// // 3 5
// // 4 1
// // 4 2
// // 4 3
// // 4 4
// // 4 5
// // 5 1
// // 5 2
// // 5 3
// // 5 4
// // 5 5


// // 2.
// sum=6
// for(i=1;i<=5;i++){
//     for(j=1;j<=5;j++){
//         if((i+j)==sum){
//             console.log(i,j);
//         }
//     }
// }
// // o/p 
// // 1 5
// // 2 4
// // 3 3
// // 4 2
// // 5 1

// // 3.
// // a=10
// // b="10"
// // c=a+b
// // console.log(c);// o/p = 1010 oru string nte koode vere eath datatype add cheythalum output nte datatype string aayirikum.

// // a=10
// // d=10
// // b="10"
// // c=a+b
// // console.log(c);//2010

// // a=10
// // b="10"
// // g=10
// // c=a+b+g
// // console.log(c);//101010

// //4
// //*
// //* *
// //* * *
// //* * * *

// // for(row=1;row<=4;row++){//row=5
// //     s= "" col<=3
// //     for(col=1;col<=row;col++){col=4
// //         s=s+"*"+" "
// //     }
// //     console.log(s);
// // }

// // for(row=4;row>=1;row--){
// //     s= ""
// //     for(col=1;col<=row;col++){
// //         s=s+"*"+" "
// //     }
// //     console.log(s);
// // }
// //* * * * 
// //* * *
// //* *
// //*
// // OR
// // for(row=1;row<=5;row++){
// //     s= ""
// //     for(col=5;col>=row;col--){
// //         s=s+"*"+" "
// //     }
// //     console.log(s);
// // }

// // 5.
// for(row=1;row<=5;row++){
//     s=""
//     for(col=1;col<=row;col++){
//         s=s+col+" "  // 1  1 2  1 2 3 1 2 3 4 
//     }
//     console.log(s);
// }

// // for(row=1;row<=5;row++){
// //     s=""
// //     for(col=1;col<=row;col++){
// //         s=s+row+" "//1 2 2 3 3 3 4 4 4 5 5 5
// //     }
// //     console.log(s);
// // }

// // for(row=1;row<=5;row++){
// //         s=""
// //         for(col=1;col<=row;col++){
// //             s=s+(row*col)+" "  // 1  2 4 3 6 9 4 8 12 16 5 10 15 20 25  
// //         }
// //         console.log(s);
// //     }
// // 6  

// // 1
// // 2 3
// // 4 5 6
// // 7 8 9 10

// // for(row=1;row<=5;row++){
// //     s=""
// //     for(col=1;col<=row;col++){
// //         s=s+(col+row)+" "  // 1  1 2  1 2 3 1 2 3 4 
// //     }
// //     console.log(s);
// // }

// n=1
// for(row=1;row<=4;row++){
//     s=''
//     for(col=1;col<=row;col++){
//         s=s+n+" "
//         n++
//     }
//     console.log(s);
// }

// // 7. 
// // for(row=1;row<=5;row++){
// //     s=""
// //     for(col=1;col<=5;col++){
// //         s=s+"*"+ " "
// //     }
// // console.log(s);
// // }

// // * * * * * 
// // * * * * *
// // * * * * *
// // * * * * *
// // * * * * *

// // 8.
// // for(i=1;i<=5;i++){
// //     s=""
// //     for(j=1;j<=i;j++){
// //         if(j==2&&i==3){
// //             s=s+"  "
// //         }else{
// //             s+="*"+" "
// //         }
// //     }console.log(s);
// // }
// // * 
// // * *
// // *   *
// // * * * *
// // * * * * * hollow

// //9

// // for(row=1;row<=5;row++){
// //     s=""
// //     {
// //         for(col=1;col<=row;col++){
// //             if((row==4&&col==2)||(row==3&&col==2||(row==4&&col==3))){
// //                 s=s+"  "
// //             }
// //             else{
// //                 s+="*"+" "
// //             }
// //         }
// //     }
// //     console.log(s);
// // }

// // * 
// // * *
// // *   *
// // *     *
// // * * * * *

// // 10.

// // for(i=1;i<=5;i++){
// //     s=''
// //     for(k=5;k>i;k--){//5 4 3 2 1
// //         s=s+" "
// //     }
// //     for(j=1;j<=i;j++){
// //         s+="*"+" "
// //     }
// //     console.log(s);
// // }

// //     * 
// //    * *
// //   * * *
// //  * * * *
// // * * * * *

// // 11.
// // for(i=1;i<=5;i++){
// //     s=""
// //     for(k=1;k<=i;k++){
// //         s=s+" "
// //     }
// //     for(j=1;j<=5;j++){
// //         s=s+"* "
// //     }
// //     console.log(s);
// // }
// // o/p:
// // * * * * * 
// //   * * * * *
// //    * * * * *
// //     * * * * *
// //      * * * * *

// // h/w
// // 1
// //   * * * *
// //    * * *
// //     * *
// //      *  
// n = 4
// for (i = 4; i > 0; i--) {
//     s = ""
//     for (k = 1; k <= n; k++) {//5 4 3 2 1 (or) k=4;k>0;k--
//         s = s + " "
//     }
//     n++
//     for (j = 1; j <= i; j++) {
//         s = s + "*" + " "
//     }
//     console.log(s);
// }

// // 2

// //      *
// //     * *
// //    *   *
// //   * * * *

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

// // 3.
// // * * *
// // *   *
// // * * *

// for (i = 1; i <= 3; i++) {
//     s = ""
//     for (j = 1; j <= 3; j++) {
//         if (i == 2 && j == 2) {
//             s = s + "  "
//         }
//         else {
//             s = s + "* "
//         }
//     }
//     console.log(s);
// }


// // *
// // * *
// // * * *
// // * * * *
// // * * * * *
// // * * * *
// // * * *
// // * *
// // *

// for(i=1;i<=3;i++){
//     s=""
//     for(j=1;j<=i;j++){
//         s=s+"*"+" "
//     }
//     console.log(s);
// }
// for(k=2;k>0;k--){
//     s=""
//     for(n=1;n<=k;n++){
//         s=s+"*"+" "
//     }
//     console.log(s);
// }


