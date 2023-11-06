// Array
//  -----
//  data collection
//  to store collection of data
//  ,can store different datatypes->Hetrogeneous data collection
//  no limit for adding data
//  can support duplicate elements
// true=1, false=0
// algorithm  = linear ds

// pname="shilpa","anu"
// pname = ['shilpa', 29, 'steve', 4, 'midhun', 35, 5.5, 'shilpa', true, 1, false, 0]  //Hetrogenius data collection
// console.log(pname);


// algorithm  = linear ds

// array name= pname
// ---------------------------------------------------------
// |shilpa| 29|steve|4|midhun|35|5.5|shilpa|true|1|false| 0|
// ---------------------------------------------------------
//    0    1    2    3   4    5   6    7     8   9   10   11 

// same of , in like string
// for(i of s)  = elements
// for(i in s)  = index number

// students=["amal","anu","megha","vinay","krun","divya"]
// // 1.find names with starting letter a
// // console.log(students.startsWith("a"));

// for(i of students){
//             if(i[0]=="a"){
//                 console.log(i);
//             }
//         }

// // Another method

// students=["amal","anu","megha","vinay","arun","divya","anju"]

// const filteredNames = students.filter(name => name.startsWith('a'));

// console.log(filteredNames);


// Push , spread operator[...]
// a=[1,2,3]
// a.push(4,5,6,7,8,9,0)
// console.log(a);

a=[1,2,3]
a.push(4)
console.log(a);

//empty array
// a=[]
// a.push("hi")
// console.log(a);

//square
// a=[1,7,3,5,0,2]
// square=[]
// for(i of a){
//         square.push(i**2)
// }
// console.log(square);

//odd&even
// a=[1,3,6,7,9,3,2,76,87]
// a=[1,2,3,4,5,6,7,8,9,10]
// even=[]
// odd=[]
// for(i of a){
//     // if(i%2==0){
//     //     even.push(i)
//     // }
//     // else{
//     //     odd.push(i)
//     // }
//     i%2==0?even.push(i):odd.push(i)
// }
// console.log(even);
// console.log(odd);

//greatest_number
// a=[4,98,87,45,2,1000,67,54]
// largest_number=a[0] //4 
// for(i of a){ // 4 98 87 45 2 1 67 54
//     if(i>largest_number){
//         largest_number=i  //98
//     }
// }
// console.log(largest_number);

//lowest element
// a=[46,98,87,45,67,54]
// lowest=a[0]
// for(i of a){
//     if(i<lowest){
//         lowest=i
//     }
// }
// console.log(lowest);


//sum of array elements

// a=[4,87,98,45,2,1,67,54]
// a=[1,9]
// sum=0
// for(i of a){
// sum+=i
// }
// console.log(sum);

//middle element
// a=[4,87,98,45,1,67,54]
// index=Math.floor(a.length/2)   // Math.floor = parseInt
// console.log(a[index]);

//pairs
// a=[1,6,4,5,3,2]
// sum=9
// count=0
// for(i of a){ //1
//     for(j of a){ //1  6 4 5 3 2   j loop itertes till end then only the i loop iterate to second value
//         count++
//         if(i+j==sum){
//             console.log(i,j);
//         }
//     }
// }
// console.log(count);

// a=[1,6,4,5,3,2]
// e=6
// flag=0
// for(i of a){
//     if(i==e){
//         flag=1
//     }
// }
// flag==1?console.log('yes'):console.log('no');/

// function elementCheck(a,e){
//     count=0
//     for(i of a){
//         count++
//         if(i==e){
//             return "Found"
//         }
//     }
//     return "Not found"
// }
// console.log(elementCheck([1,2,3,4,5,6,7,8,9,0],8))
// console.log(count);

//time complexity
//binary algorithm
//[1,3,4,6,7,2,5,8,55]
//e=3
//flag=0
//[1,2,3,4,5,6,7,8,55]= sorting
//middleElement = 5
//e==middle   flag=1   break
//1,2,3,4
//2
//
//3,4   4
//3    3



//sorting
//ascending order
// a=[1,3,4,6,7,2,5,8,55]
// a.sort((a,b)=>a-b) b-a //descending order
// console.log(a);


// a=[1,3,4,6,7,2,5,8,55]
// e=7
// count=0
// a.sort((a,b)=>a-b)
// console.log(a);
// low=0
// upper=a.length-1
// flag=0
// while(low<=upper)
// {
//     count++
//     midIndex=Math.floor((low+upper)/2)
//     if(e==a[midIndex]){
//         flag=1
//         break
//     }else if(e>a[midIndex]){
//         low=midIndex+1
//     }else if(e<a[midIndex]){
//         upper=midIndex-1
//     }

// }
// flag==1?console.log("found"):console.log("not found");
// console.log(count);


// a=[1,4,3,2]
// sum=5
// low=0
// flag=0
// upp=a.length-1
// a.sort((a,b)=>a-b)
// for(i of a){ 
//     if(low+upp==sum){
//         flag=1
//     }
//     else if(low+upp<sum){
//         low++
//     }
//     else{
//         upp--
//     }
// }
// flag==1?console.log(low,upp):console.log("No such pair");




