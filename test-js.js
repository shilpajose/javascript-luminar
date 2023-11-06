// products=[
//     [100,'apple','5g',120000,'led'],
//     [101,'samsaung','5g',45000,'led'],
//     [102,'blackberry','4g',50000,'led'],
//     [103,'nokia','3g',1200,'lcd'],
//     [104,'motorola','4g',10000,'lcd']
// ]

// console.log(products);
//1. console.log(products.map(i=>i[1]));
// 2.console.log(products.filter(i=>i[4]=="lcd"));
// 3.console.log(products.filter(i=>i[2]=="5g").map(i=>i[1]));
//4. console.log(products.sort((a,b)=>b[3]-a[3]))
            
// n=4
// fact=1
// for(i=1;i<=n;i++){
//     fact*=i
// }
// console.log(fact);

// [ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]

covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]

//1. district having Highest +ve case
// console.log(covid_data.sort((a,b)=>a[5]-b[5]));
// console.log(covid_data[0]);
//2. district having Highest 1st dose vaccine
// console.log(covid_data.reduce((n1,n2)=>n1[5]>n2[5]?n1:n2));
// OR
// highest = covid_data.reduce((n1,n2)=>n1[5]>n2[5]?n1:n2)
// console.log('Highest value:',highest);
// 
//3. district having lowest death rate
// console.log(covid_data.reduce((n1,n2)=>n1[3]<n2[3]?n1:n2));
//4. sort data with 1st dose vaccine
// console.log(covid_data.sort((a,b)=>a[5]-b[5]));
//7.print trissur details
// console.log(covid_data.sort((a,b)=>a[1]-b[1]).reduce(n1,n2)=>n1[1]==n2[1]);
// console.log(a[1]=='Trissur');
