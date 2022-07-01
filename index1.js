//  1::Find the value that is not being repeated inside the given array.
//   Գտնել այն արժեքը որը ընհանրապես չի կրկնվում տրված զանգվածում


// let arr =["a","a","b","a"]
// let elem;
// function noRepeatedSimvol(arr) {
// for(let i =0;i<arr.length;i++){
//    arr[i]===elem
//    for(let j=0;j<arr.length;j++){
//     console.log(arr[j]);
//    }
// }

// }

// console.log(noRepeatedSimvol(arr));


// console.log(noRepeatedSimvol(arr));

// 2  From the given array of numbers create two arrays one containing only odd and the other only even numbers.
// Տրված թվային զանգվածից ստանալ երկու զանգվածներ, որոնցից մեկը կպարունակի միայն կենտ իսկ մյուսը միայն զույգ թվեր:

// let arr =[14, 28, 3, 8, 2];
// function findelem(arr){

//     let max = Math.max(...arr);
//     console.log(max);
//     let min = Math.min(...arr);
//     let result= [max,min]
//       return result
// }
// console.log(findelem(arr) );

//3
// From the given array of numbers create two arrays one containing only odd and the other only even numbers.
// Տրված թվային զանգվածից ստանալ երկու զանգվածներ, որոնցից մեկը կպարունակի միայն կենտ իսկ մյուսը միայն զույգ թվեր:

// let arr = [14, 28, 3, 1, 8, 2];

// function sortDighit(arr) {
//   let odd = [];
//   let even = [];

//   for (elem of arr) {
//     if (elem % 2 === 0) {
//       odd.push(elem);
//     } else {
//       even.push(elem);
//     }
//   }
//   let result = [odd, even];
//   return result;
// }
// console.log(sortDighit(arr));

// 5
// Create a function that accepts 2 arrays of words and returns the common words from each.
// Գրել ֆունկցիա որը ստանում է 2 զանգված և վերադարձնում է նրանց ընդհանուր տարրերը։
// Օրինակ։

// let arr1 = ["dog", "cat", "parrot"];
// let arr2 = ["lizard", "rat", "cat"];

// function repeatedvalues(arr1, arr2) {
//   for (elem of arr1) {
//     for (symvol of arr2) {
//       if (elem===symvol){
//        return elem
//       }
//     }
//   }
// }
// console.log(repeatedvalues(arr1,arr2) );

//6
// Write a function that accepts 2 array arguments and returns a boolean value - Does the first array contain all elements represented in the second array.
// Ստեղծել ֆունկցիա որը ստանում է 2 զանգված և վերադարձնում boolan - ստուգելով արդյոք առաջին զանգվածը պարունակում է 2-րդ զանգվածի բոլոր անդամները
// //
//  let arr1 = ["dog", "cat", "parrot"];
// let arr2 = ["lizard", "rat", "cat"];

// function repeatedvalues(arr1, arr2) {
//   for (elem of arr1) {
//     for (symvol of arr2) {
//       if (!(elem===symvol)){
//        return false
//       }else{
//         return true
//       }
//     }
//   }
// }
// console.log(repeatedvalues(arr1,arr2) );


// 7
// From the given array of numbers and strings create 2 new arrays, one containing only numbers, another one only strings.
// Տրված զանգվածից որը պարունակում թվեր և տողեր, ստեղծել նոր 2 զանգված մեկը միայն թվեր կպարունակի, մյուսը միայն տողեր

// let arr =[1,2,3,4,"d","d","D"];
// let num = [];
// let str=[];


// for(let elem of arr){
//     if(isNaN(elem)){
//        str.push(elem)
//     }else{
//        num.push(elem)
//     }
// }
// console.log(str,num);




// let arr = ["dog", "cat", "parrot", 1, 2, 3, 3];

// function sortElemOfArr(arr) {
//   let str = [];
//   let num = [];
//   for (elem of arr) {

//     console.log(typeof elem);

//     if (typeof elem === String) {
//             str.push(elem)
//       console.log(str);
//     } else if (typeof elem === Number) {
//       num.push(elem);
//     }
//   }
//   return [num, str];
// }
// console.log(sortElemOfArr(arr));


//  8   Create a function that will reverse the given string.
// Ստեղծել ֆունկցիա որը դասավորում է տողը հակառակ հերթականությամբ։


// let str = "MARGARYAN"

// function reversString(str){
//     let result = str.split("").reverse("").join("")
//     console.log(result);
// }

// console.log( reversString(str));


const payments = [
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe", // Name of the student
      payedAmount: 1600, // Amount payed with this transaction
      year: 2020, // The payment year
    },
    {
      studentId: 1, // Unique for each student
      studentName: "John Doe",
      payedAmount: 1500,
      year: 2021,
    },
    {
      studentId: 1, // Unique for each student
      studentName: "John Doe",
      payedAmount: 1400,
      year: 2022,
    },
    {
      studentId: 1, // Unique for each student
      studentName: "John Doe",
      payedAmount: 1300,
      year: 2023,
    },
    {
      studentId: 2, // Unique for each student
      studentName: "Lu Kang",
      payedAmount: 1500,
      year: 2020,
    },
    {
      studentId: 2, // Unique for each student
      studentName: "Lu Kang",
      payedAmount: 1400,
      year: 2021,
    },
    {
      studentId: 2, // Unique for each student
      studentName: "Lu Kang",
      payedAmount: 1300,
      year: 2023,
    },
    {
      studentId: 2, // Unique for each student
      studentName: "Lu Kang",
      payedAmount: 1200,
      year: 2023,
    },
  ];
  
  
  // 12. * Calculate the total sum of payment amounts made by each student. We need to return an array that contains a list of information about students, including the total paid amount by the student.
  // Հաշվել յուրաքանչյուր ուսանողի կողմից վճարված ամբողջ գումարը։ Անհրաժեշտ է վերադարձնել ուսանողների ցուցակը (array), որը ընդգրկում է ուսանողների տվյալները, նեռարյալ ուսանողի կողմից ամբողջ վճարված գումարը։
  

  alert("xkjix")