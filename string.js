
// // - string
// // ..........
// // data collection

// // linear data structure: same line/same order 
// //                      : index numbers 0,1,2,3,4
// //                    s
// //                      ------------------------------------------
// //                      | l | u |m |i| n|a| r| 
// //                      ------------------------------------------
// //                         0     1   2 3 4 5 ......

// s="luminar technolab"

// // console.log(s);
// // console.log(s[9]);

// // linear data structure:
// //itertaion using index

// for(i of s){ //index values
//     console.log(i);
// }
// for(i in s){  //index number
//     console.log(i);
// }
// for(i in s){  //values using index number
//     console.log(s[i]);
// }


//  elementCount=(s,e)=>{

//    count=0
//    for(i of s){
//     if(i==e){
//         count++
//     }
//    }
// return count
// }
// console.log(elementCount("luminar technolab",'r'));

// vowelsCount=s=>{
//        count=0
//        for(i of s){
//         if(i=='a'|| i=='e'||i=='i'||i=='o'||i=='u'){
//             count++
//         }
//        }
//     return count
//     }
//     console.log(vowelsCount("luminar technolab"));

// s="abcd"
// console.log(s.length);

// text="Hello world"
// console.log(text.length);

//print vowels and constant separetly

// vowelAndconstant=s=>{
//     constant=0
//     vowel=0
//     for(i of s){
//         if(i=='a'|| i=='e'||i=='i'||i=='o'||i=='u'){
//             vowel++
//         }
//         else{
//             constant++
//         }
//     }
// return 'Vowel count:'+ vowel +"   "+'Constant count:' + constant
// }
// console.log(vowelAndconstant("kochinluminartechnolabmearnmayshilpajose"));//space um calculate cheyyum


// another method

// function counts(s){
//     v=""
//     c=""
//     for(i of s){
//         if(i=='a'|| i=='e'||i=='i'||i=='o'||i=='u'){
//             v+=i
//         }
//         else{
//             c+=i
//         }
//     }
//     console.log(v,v.length);
//     console.log(c,c.length);
// }
// counts("shilpa jose")

// function lastElement(s){
//     last=""
//     for(i of s){
//         if(i==s){
//             last+=i
//         }
//     }
//     console.log(i);
// }
// lastElement('luminar')


// s='luminars'
// i=s.length-1
// console.log(s[i]);


// function Lastletter(s) {
//     v=""
//     for(i of s){
//         i=s.length-1
//     }
//     console.log(s[i]);
// }
// Lastletter('shilpu')

//second last vowel
// function secondLastvowel(s) {
//     sec_last=""
//     for(i of s){
//         if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
//             sec_last+=i
//         }
//     }
//     console.log(sec_last,sec_last[sec_last.length-2]);
// }
// secondLastvowel('luminar')

//middle element

// floaring - convert float value to integer

// function middleElement(s) {
//     index = parseInt((s.length - 1) / 2)
//     console.log(s[index]);
// }
// middleElement('luminar') //index= parseInt(s.length/2)
// middleElement('apple')  // index= parseInt(s.length/2)
// middleElement('ball')   // index= parseInt((s.length-1)/2)


// n='07070707'
// // o/p= 7777


// i=parseInt(n.length/2)
// console.log(n[i]);
// n="9050870"
// s=''
// for(i of n){
//     if(i!="0"){
//         s=s+i
//     }
// }
// console.log(s);


//find index of zero

// n = "9888820987"
// for (i in n) {
//     if (n[i] == "0") {
//         console.log(i);
//         break
//     }
// }


// s="luminar"
// console.log(s.startsWith('lum'));
// console.log(s.endsWith('ar'));
// console.log(s.startsWith('lumaaa'));
// console.log(s.endsWith('arrrr'));

// function checkInvalid(phone) {
//     return phone.startsWith('+91')&&phone.length==13?"valid":"invalid"
    
// }
// console.log(checkInvalid('+919876578673'));
// console.log(checkInvalid('+919876673'));
// console.log(checkInvalid('+9198765789999673'));
// console.log(checkInvalid('19876578673'));
// console.log(checkInvalid('+19876578673'));

//Slice
//substring creation  slice     ---------------------------
                                //  a p p l e
                                //  l u m i n a r
                                //  0 1 2 3 4 5 6
                                // -7-6-5-4-3-2-1
// 1.
//    s="apple"
//    console.log(s.slice(0,3));
//    console.log(s.slice(2,-1));
//    console.log(s.slice(-2));
//    console.log(s.slice(1));

// 2. 2 element rotation
//luminar == arlumin
// function twoElementRotation (s) {
//     // console.log(s.slice(5)+s.slice(0,5)); 
//     // return console.log(s.slice(5)+s.slice(0,5));
//     return console.log(s.slice(-2)+s.slice(0,-2));

// }
// twoElementRotation('luminar')
// twoElementRotation('shilpaj')



