const users=[
    {id:100,first_name:"ram",email:"ram@gmail.com",dept:"sales",salary:25000},
    {id:101,first_name:"ravi",email:"ravi@gmail.com",dept:"it",salary:28000},
    {id:102,first_name:"raju",email:"raju@gmail.com",dept:"ba",salary:35000},
    {id:103,first_name:"rahul",email:"rahul@gmail.com",dept:"devop",salary:45000},
    {id:104,first_name:"akhil",email:"akhil@gmail.com",dept:"devop",salary:55000},
    {id:105,first_name:"aravind",email:"aravind@gmail.com",dept:"qa",salary:65000},
    {id:106,first_name:"ajay",email:"ajay@gmail.com",dept:"qa",salary:28000},

]

//// 1.find total number of users
// console.log(users.length);

// 2.print names of develop
// console.log(users.filter(i=>i.dept=='devop').map(i=>i.first_name));

// 3.print the mail id of user whose user id is 102
// console.log(users.filter(i=>i.id == 102).map(i=>i.email));  //find

//4.print the user dept who have highest salary
// a=users.reduce((n1,n2)=>n1.salary>n2.salary?n1:n2)
// console.log(a["dept"]);

//5.salary of users whose dept is devop
// console.log(users.filter(i=>i.dept == 'devop').map(i=>i.salary));

//6.sort the users according to their salaries
// console.log(users.sort((a,b)=>a.salary-b.salary));

//7.find the user who have lowest salary
// lowest= users.reduce((n1,n2)=>n1.salary<n2.salary?n1:n2)
// console.log(lowest["first_name"]);

console.log(users.reduce((n1,n2)=>n1.salary<n2.salary?n1:n2).first_name);

// users.sort((a,b)=>a-b)
// console.log(users[0]);



