
// //object
// // data collections
// //key value pairs

// st1 = { name: "shilpa", age: 30, gender: "female", location: "kochi" }
// // console.log(st1);

// // diff b/w array and object

// // array = no clarity in data a = [1,2,6,7]  there is no need in clarity all are numbers
// //object has more clarity because it has key and value,so there is more clarity in which data stores 
// //st1={name:"shilpa",age:30,gender:"female",location:"kochi"}

// //object is heterogeneous data collection  - can store multiple type data

// //Linear data structure
// // console.log(st1["name"]);

// // st1  blockname
// // ------------------------
// // |shilpa |  30 |  kochi  |     values
// // ------------------------
// // name      age    location      key

// //index number alla key aanu edukunnath  double quotes il venam kodukkan.

// // or

// // console.log(st1.location);  // no need of quotes

// // object access in two ways
// // console.log(st1["name"]);
// // console.log(st1.location);

// //Adding elements to the object using two methods
// st1["phone"] = 9876546789 //1
// st1.gender = "female"     //2
// st1.dept = "CSE"
// // console.log(st1);

// //Update an element to the object using two methods
// st1.age = 34
// st1["age"] = 44
// // console.log(st1);

// //To check for a key is present or not inside the object
// // console.log("name" in st1);  // in keyword   , returns True/False

// // ipo ulla age ne update cheyyuka,,,namuk ariyilla ipo ulla age ethra aanennu
// st1.age = st1.age + 1
// // console.log(st1);

// // Looping 
// // array looping = in=index and of=elements 
// // object looping in = key , of not support

// for (i in st1) {
//     // console.log(st1.i);
//     // console.log(st1[i]);
// }
// //chila case il . , [] work cheyyilla....   . work aavunnillenki [ ] nokuka,  [] illenki . nokua....it depends on the data.

// ////Problems

// // 1
// // car = {name:"honda city",manufacture:"honda",price:1500000}
// // console.log(car);
// // //find car name
// // console.log(car["name"]);
// // //check it contain manufacture
// // console.log("manufacture" in car);
// // //Increment the price by 100000
// // car.price=car.price+100000
// // // console.log(car);
// // //Add property variant(manual/automatic)
// // car.property="manual"
// // // console.log(car);
// // //Add property colors(grey,black,white)
// // car.color=["grey","black","white"]  // onnil kooduthal data store cheyyan array. //data collection
// // console.log(car);

// // split()

// // a = "Hello Hi Hello Hi Luminar Hi aaa" //s="Hello,Hi,Hello"
// // count = {}
// // b = a.split(" ") // a=s.split(",") //  string ne enganeyano separate cheyyunnath athpole thanne split() lum kodukuka...

// // console.log(b);//output array aayitt aaanu varuka...

// //h/w = count ={hello:2,h1:2,luminar:1}

// // for (i of b) {
// // count[i]?count[i]+=1:count[i]=1
// // }
// // console.log(count);

// //or
// // s = "Hello Hi Hello Hi Luminar Hi shilpa" //s="Hello,Hi,Hello"
// // a = s.split(" ")
// // count = {}
// // for(word of a){
// //     if(word in count){
// //         count[word]=count[word]+1
// //     }
// //     else{
// //         count[word]=1
// //     }
// // }
// // console.log(count);

// // or
// // s = "Hello Hi Hello Hi Luminar Hi shilpa" //s="Hello,Hi,Hello"
// // a = s.split(" ")
// // count = {}
// // for(word of a){
// //     if(word in count){
// //         count[word]=count[word]+1
// //     }
// //     else{
// //         count[word]=1
// //     }
// // }


// // reduce the code length ... removing the for loop and using the map() function
// // a.map(word=>word in count?count[word]+=1:count[word]=1)
// // a.map(i=>count[i]?count[i]+=1:count[i]=1);

// // console.log(count);


// //Recursive elements in string.... repeated elements

// // s="luminar technolab"
// // s = "shilpaaa"
// // s1 = ""
// // elements = {}
// // for (i of s) {
// //     if (i in elements) {
// //         s1 = s1 + i
// //     }
// //     elements[i] = 1
// // }
// // console.log(s1); // o/p:nla

// // or  object nte key mathram edukkan
// // s2 = {}
// // for (j in s2) {
// //     console.log(j);
// // }

// s = "luminar technolab"
// s1 = ""
// elements = {}
// for (i of s) {
//     if (i in elements) {
//         s1+= i
//     }
//     elements[i] = 1
// }
// console.log(s1);
// console.log(s1[0]); 
// console.log(s1[s1.length-1]);

// 11-july-2023
mobiles=[
    {id:1,name:"nokia",display:"lcd",nw:"4g",price:12000},
    {id:3,name:"samsung",display:"led",nw:"4g",price:14000},
    {id:2,name:"apple",display:"led",nw:"5g",price:10000},
    {id:4,name:"oppo",display:"lcd",nw:"4g",price:8000},
    {id:5,name:"nothing",display:"lcd",nw:"5g",price:56000}
]
console.log(mobiles);

//Find total no.of mobiles
// console.log(mobiles.length);

//name only
// names=mobiles.map(i=>i["name"]) 
names=mobiles.map(i=>i.name)
// console.log(names);

//display names of mobiles with lcd display
// console.log(mobiles.filter(i=>i.display == 'lcd').map(i=>i.name));

//find details of mobile with highest price
highest = mobiles.reduce((n1,n2)=>n1.price>n2.price?n1:n2)
// console.log(highest);
// or

// console.log(mobiles.reduce((a,b)=>a.price>b.price?a:b));

// find low cost 5g mobile name
// console.log(mobiles.filter(i=>i.nw =='5g').reduce((a,b)=>a.price<b.price?a:b).name);

//sort mobiles according to their id's
// console.log(mobiles.sort((a,b)=>a.id-b.id));
// console.log(mobiles.sort((a,b)=>a.price-b.price));//asec
// console.log(mobiles.sort((a,b)=>b.price-a.price));//desc

//find total price of all mobiles

// console.log(mobiles.reduce(i=>i["price"]));
// console.log(mobiles.map(i=>i.price).reduce((a,b)=>a+b));

//60000 kond led 
//check can i buy a led display mobile with 60000 rs
// console.log(mobiles.some(i=>i.display=='led'&&i.price<=60000));

//











