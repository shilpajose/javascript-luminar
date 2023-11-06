// for(i=1;i<=4;i++){
//     s=""
//     for(k=4;k>i;k--){
//         s=s+" "
//     }
//     for(j=1;j<=i;j++){
//         if(i==3 && j==2){
//             s=s+"  "
//         }else{
//             s=s+'*'+' '
//         }
//     }
//     console.log(s);
// }
// for(l=3;l>0;l--){
//     a=""
//     for(n=4;n>l;n--){
//         a=a+" "
//     }
//     for(m=1;m<=l;m++){
//         if(l==3 && m==2){
//             a=a+"  "
//         }
//         else{
//             a=a+"*"+" "
//         }
//     }
//     console.log(a);
// }


// //    * 
// //   * *
// //  *   *
// // * * * *
// //  *   *
// //   * *
// //    *

for(i=1;i<=4;i++){
    s=""
    for(j=1;j<=i;j++){
        if((i==3&&j==2) || (i==4&&j==2) || (i==4&&j==3) ){
            s=s+" "
        }
        else{
            s=s+"1"+" "
        }
    }
    console.log(s);
}
for(m=3;m>0;m--){
    a=""
    for(n=1;n<=m;n++){
   if(m==3&&n==2){
    a=a+" "
   }
   else{
    a=a+'1'+" "
   }
    }
    console.log(a);
}