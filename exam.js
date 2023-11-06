// const student = {
//     name: "David Rayy",
//      sclass: "VI",
//      rollno: 12
//    };
// //    delete student.rollno;
//     console.log(student);

// function isSubset(arr1, arr2) {
//     for (const item of arr1) {
//       if (!arr2.includes(item)) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2])); 
//   console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]));
//   console.log(isSubset([1, 2], [3, 5, 9, 1]));

// function capitalizeFirstLetter(str) {
//     if (str.length === 0) {
//         return str;
//     }

//     return str[0].toUpperCase() + str.slice(1);
// }


// a = "hello world";
// console.log(capitalizeFirstLetter(a));

// 2.
// function reverse(){
// a=[3,4,5,9,0,6,8]
// console.log(a.reverse(a));
// }
// reverse()

// 3
// function secondLarge(){
//     a=[2,30,150,7,180,26]
//     b=a.sort((a,b)=>b-a)
//     console.log(b[1]);
// }
// secondLarge()

for(r=1;r<=6;r++){
    s=""
    for(c=1;c<=r;c++){
        if(r==3&&c==2 ||r==4 &&c==2 ||r==4&&c==3||r==5&&c==2 ||r==5&&c==3 ||r==5&&c==4){
        s=s+"   "
        }
        else{
            s=s+"*"+" "
        }
    }
    console.log(s);

}