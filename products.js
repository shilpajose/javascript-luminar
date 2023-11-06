products=[
    [1,"oreo",50,14],
    [2,"tiger",20,60],
    [3,"parle-g",10,25],
    [4,"hide&seek",50,10],
    [5,"dark fantasy",30,21]
]
// console.log(products);

//find product count
// console.log(products.length);

//find all prducts name
// console.log(products.map(i=>i[1]));

//sort products according to their price
// console.log(products.sort((a,b)=>a[2]-b[2]));

//find stoke value of tiger
// console.log(products.filter(i=>i[1]=='tiger').map(i=>i[3]));

// find product with lowest stoke value
// console.log(products.reduce((a,b)=>a[3]<b[3]?a:b));

// find product with highest price 
// console.log(products.reduce((a,b)=>a[2]>b[2]?a:b));  reduce= last output if there is same value
// console.log(products.reduceRight((a,b)=>a[2]>b[2]?a:b)); //reduceRight = first output if there is same value


// find names of product with price less than 35
console.log(products.filter(i=>i[2]<=35).map(i=>i[1]));