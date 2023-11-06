// a=[[1,34],[5,6],[12,9],[98,23]]
// // console.log(a);
// //print 10 above value
// for(i of a){
//     // console.log(i);
//     for(j of i){
//         if(j>=10){
//             console.log(j);
//         }
//     }
// }/

employee = [
    [1, "amal", "developer", "kochi", 55000, 2],
    [3, "anu", "developer", "calicut", 50000, 1],
    [5, "arun", "tester", "kochi", 75000, 3],
    [2, "mega", "tester", "kochi", 30000, 1],
    [4, "nived", "develper", "trissur", 60000, 2]
]
console.log(employee);
// console.log(employee.map(i=>i[1]));

//display all employees name
// console.log(employee.map(i=>i[1]));


// for (i of employee) {
//     console.log(i[1]); //console.log(i[1],i[2]);
// }

//print name of employees which the location is kochi
// console.log(employee.filter(i=>i[3]=="kochi").map(i=>i[1]));


// for(i of employee){
//     if(i[3]=="kochi"){
//         console.log(i);
//     }
// }

//display name of testers from kochi
// console.log(employee.filter(i=>i[3]=="kochi"&&i[2]=="tester").map(i=>i[1]));

// for(i of employee){
//     if(i[3]=='kochi' && i[2]=='tester'){
//         console.log(i[1]);
//     }
// }

//sort array in asec order accor-to employee id

// employee.sort((a,b)=>a[0]-b[0]);
// console.log(employee);

//find name of employee with highest salary
// employee.sort((a,b)=>b[4]-a[4])
// console.log(employee[0][1]);

//find designation of employees with 1 year exp

// console.log(employee.filter(i=>i[5]==1).map(i=>i[2]));
// for(i of employee){
//     if(i[5]==1){
//         console.log(i[2]);
//     }
// }


// find employee id of megha
// console.log(employee.filter(i=>i[1]=='mega').map(i=>i[0]));
// console.log(employee.filter(i=>i[1]=='mega')[0][0]);

// for(i of employee){
//     if(i[1]=='mega'){
//         console.log(i[0]);
//     }
// }


