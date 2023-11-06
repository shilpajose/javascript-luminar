var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
 
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
 
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
 
      ]
    },
 
  ]

//   console.log(accounts);

// 1.Print all gpay transactions?
console.log(accounts.map(i=>i.transactions).flat().filter(i=>i.method == 'g-pay'));
console.log('--------------------------------------------------------------------------------------------------------');
//nested array yo single array = flat()

// 2.print all transaction whose amount>3000?
console.log(accounts.map(i=>i.transactions).flat().filter(i=>i.amount > 3000));
console.log('--------------------------------------------------------------------------------------------------------');

//3.print credit transaction of account 1002?
console.log(accounts.map(i=>i.transactions).flat().filter(i=>i.to==1002));
console.log('--------------------------------------------------------------------------------------------------------');


//4.print debit transaction of account 1002?
console.log(accounts.find(i=>i.acno==1002).transactions);
console.log('--------------------------------------------------------------------------------------------------------');


//5.print highest balance ac details?
console.log(accounts.reduce((n1,n2)=>n1.balance>n2.balance?n1:n2));
console.log('--------------------------------------------------------------------------------------------------------');


s="100"
s=Number(s)
console.log(typeof(s));
s=String(s)
console.log(typeof(s));
s=Number(s)
console.log(typeof(s));

//reverse()

//Armstrong Number 
number=153
temp=number
sum=0
while(temp>0){
  //finding the one's digit
  let remainder = temp % 10   //1
  console.log("remainder",remainder);
  cube=remainder**3

  sum+=cube

  //remoing last digit from te number
  temp= parseInt(temp / 10)
  console.log("temp",temp);
}
//check the condition 
if(sum == number){
  console.log(`${number} is an Armstrong number`);
}
else{
  console.log(`${number} is not an Armstrong number`);
}


// secondlast factor of the number

num=5
factor=0
for(i=1;i<num;i++){
  if(num%i==0){
    factor=i
  }
}
console.log(factor);




