 //1.sort()  o/p =array

 //2.map()  o/p =array 

 //3.filter()o/p =array

 //4.reduce() last   sum to a sinle value(compare),arithmetic operations
 //5.reduceright() first
 //6.find()
 //7.some() TRUE/FALSE
 //8.forEach()  elements
//  a=[2,4,6,8]
//  a.forEach(i=>console.log(i**2))

 //9.includes()  false/true
// a=[1,7,8]
// console.log(a.includes(19));

 //10.flat() To change nested array to single array
a=[[12,6],[4,65],[90,67],[5,8]]
console.log(a.flat().filter(i=>i<10));
 
 //map()
 //ella input elements num corresponding output venamenkil use cheyunnu
 //ex square[]
//  a=[1,2,3,4,5,6,7,8,9]
//  console.log(a.map(i=>i**2));

// 1.
// a=[7,2,9,1,2,6] //=>[8,1,10,0,1,7]
// console.log(a.map(i=>i>5?i+1:i-1));




 //filter()
 //example ->even numbers
//  console.log(a.filter(i=>i%2==0));// console.log(a.filter(i=>i%2!=0));
// 1.a=[7,2,9,1,2,6] find divisible by 3 [9,6]
// a=[7,2,9,1,2,6] 
// console.log(a.filter(i=>i%3==0));

//pop()
// example
// var arr = ['mango','banana','jackfruit']
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.pop()
// console.log(arr);
// // 2
//push
// arr.push('kiwi')
// console.log(arr);

// 3.find()
// arr = [10,20,30,40,50]
// //print numbers greater than 20

// arr1 = arr.filter(num =>num>20)
// console.log(arr1);

// arr2 = arr.find(num =>num>20)
// console.log(arr2);

//reduce()
// a = [1,2,3,4,5,6,7]
//find the highest number from the array
// highest = a.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log('Highest value:',highest);
//find the lowest number from the array
// lowest = a.reduce((m1,m2)=>m1<m2?m1:m2)
// console.log('lowest value:',lowest);
//find the sum of the array
// sum = a.reduce((a1,b1)=>(a1+b1))
// console.log('The sum of the given array',sum);
//find the average of the given array
// avg = a.reduce((a1,b1)=>(a1+b1))/7
// console.log('The sum of the given array',avg);

//some()
// arr = [10,20,30,40,50]
//is there any number greater than 20
// a = arr.some(num=>num>120)
// console.log('is there any number greater than 20 :',a?'yes':'no');

//[id,name,designation,location,salary,experience]
// employee =[ 
//     [1000,'Neel','developer','kochi',25000,3],
//     [1001,'Max','tester','TVM',20000,2],
//     [1002,'MAxwell','QA','kochi',35000,4],
//     [1003,'Vyom','QA','kochi',45000,5],
//     [1004,'Laisha','tester','TVM',55000,7],
//     [1005,'Aahan','developer','TVM',15000,1],
//     [1006,'Aahil','QA','kochi',20000,2],
//     [1007,'Shayan','developer','kochi',30000,3],
//     [1008,'Nihaan','developer','TVM',25000,3]
// ]

//print all employee name - map

//print total number of employee -array length

//print developer employees details -filter

//print employees whose salary>30000 - filter

//print details of employee laisha
// laisha = employee.find(emp=>emp[1]=='Laisha') // we can use filter()method too
// console.log(laisha);

//sort employee based on their exp in descending order
// desc= employee.sort((a,b)=>b[5]-a[5])
// console.log(desc);

////sort employee based on their salary in ascending order
// asec = employee.sort((a,b)=>a[4]-b[4])
// console.log(asec);

//print employee with least salary
// least = employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
// console.log(least);

//print employee with highest salary
// highest = employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
// console.log(highest);

// //Is there any employee having the same nihaan
// nihaan = employee.some(emp=>emp[1]=='Nihaan')
// console.log('Is there any employee having the name nihaan',nihaan? 'yes' :'no')

// Print total salary
// total = employee.map(emp=>emp[4]).reduce((emp1,emp2)=>emp1+emp2)
// console.log('total salary :',total);













