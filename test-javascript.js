countryData=[
    {
      "name": "India",
      "topLevelDomain": [
        ".in"
      ],
      "alpha2Code": "IN",
      "alpha3Code": "IND",
      "callingCodes": [
        "91"
      ],
      "capital": "New Delhi",
      "altSpellings": [
        "IN",
        "Bhārat",
        "Republic of India",
        "Bharat Ganrajya"
      ],
      "subregion": "Southern Asia",
      "region": "Asia",
      "population": 1380004385,
      "latlng": [
        20.0,
        77.0
      ],
      "demonym": "Indian",
      "area": 3287590.0,
      "gini": 35.7,
      "timezones": [
        "UTC+05:30"
      ],
      "borders": [
        "AFG",
        "BGD",
        "BTN",
        "MMR",
        "CHN",
        "NPL",
        "PAK",
        "LKA"
      ],
      "nativeName": "भारत",
      "numericCode": "356",
      "flags": {
        "svg": "https://flagcdn.com/in.svg",
        "png": "https://flagcdn.com/w320/in.png"
      },
      "currencies": [
        {
          "code": "INR",
          "name": "Indian rupee",
          "symbol": "₹"
        }
      ],
      "languages": [
        {
          "iso639_1": "hi",
          "iso639_2": "hin",
          "name": "Hindi",
          "nativeName": "हिन्दी"
        }
      ],
      
      "flag": "https://flagcdn.com/in.svg",
      "regionalBlocs": [
        {
          "acronym": "SAARC",
          "name": "South Asian Association for Regional Cooperation"
        }
      ],
      "cioc": "IND",
      "independent": true
    }
  ]
//   console.log(countryData);

  //1- Find The Capital?
// console.log(countryData.map(i=>i.capital))

  //2.Find Population?
//   console.log(countryData.map(i=>i.population));
  //3.display list of borders ?
//   console.log(countryData.map(i=>i.borders));
  //4.Find Language name?
//   console.log(countryData.map(i=>i.languages).flat().find(i=>i.name).name);
// console.log(countryData.map(i=>i.languages).flat().find(i=>i.name).name);


  //5.find currency code?
//   console.log(countryData.map(i=>i.currencies).flat().find(i=>i.code).code);

  //6.Find total count of borders?
   
        // console.log(countryData.map(i=>i.borders.length));


  //7.a=[10,20,10,20,20,30,10,20,20,30]  create an element count object for array a?  
//   a=[10,20,30,10,20,20,30]
//   b=[]
//   b.count=a.length
//   console.log(b);

  //8.code for the following pattern?
  //9.Find the longest and shortest names from array names
// names=["amal","vinu","ashok ram","amal","arun","anu","vonod "]
// names=["amal","vinu","ashok ram","amal","arun","anu","vonod "]

// function longest_str_in_array(arra)
//   {
//     var max_str = arra[0].length;
//     var ans = arra[0];
//     for (var i = 1; i < arra.length; i++) {
//         var maxi = arra[i].length;
//         if (maxi > max_str) {
//             ans = arra[i];
//             max_str = maxi;
//         }
//     }
//     return ans;
// }
// console.log(longest_str_in_array(["amal","vinu","ashok ram","amal","arun","anu","vonod "]));

// names = ["amal","vinu","ashok ram","amal","arun","anu","vonod "];
// names.sort(function(a, b) {
//     return a.length - b.length;
//   });
  
//   console.log('Shortest Name :',names[0]);
//   names.sort(function(a, b) {
//   return b.length - a.length;
// });

// console.log('Longest Name :',names[0]);

//10.program to print the given pattern
//11. create a function to find missing numbers in given array a=[1,2,4,5,6,8,10]?

// function findMissingnumber(numbers) {
    
// }
// a=[1,2,4,5,6,8,10]
// findMissingnumber(a)

function findMissingNumber(arr) {
     sumOfElements = arr.reduce((acc, curr) => acc + curr, 0);
  
     n = arr.length + 1;
     expectedSum = (n * (n + 1)) / 2;
     missingNumber = expectedSum - sumOfElements;
  
    return missingNumber;
  }
  
  // Example usage:
   a = [1,2,4,5,6,8,10];
   missingNumber = findMissingNumber(a);
  console.log("The missing number is:", missingNumber);