


// 8.  Find the max payment
//     Գտնել մեծագույն կատարված վճարումը

// function getMaxElem(payments){
//     let max =[];
//     let result ;
//     for(let  key in payments){
//        max.push(payments[key].payedAmount)

//     }
//    result =Math.max(...max)

//     return result
// }

// console.log( getMaxElem(payments ) );

// Calculate the sum of all payments
//     Հաշվել վճարումների ամբողջ գումարը

// function sumofpayedAmount(payments){

//     let result= 0;
//     for(let  key in payments){
//   result+= payments[key].payedAmount

//     }

//     return result
// }

// console.log(sumofpayedAmount(payments ) );

// function FindpayedAmount(payments){
//     for(let  key in payments){
//         if (payments[key].payedAmount>1500){
//             return (payments[key].payedAmount);
//         }else {
//             console.log(" say esim inch");
//         }
//             }
// }

// console.log( FindpayedAmount(payments));

// // 11.  Calculate the average of all payments
// // Հաշվել բոլոր կատարված վճարուների թվաբանական միջինը

// function midleofpayedAmount(payments){
//   let count = 0;
//     let sum= 0;
//     let result=0;
//     for(let  key in payments){
//         count++
//   sum+= payments[key].payedAmount

//     }
//     result =sum/count

//     return result
// }

// console.log(midleofpayedAmount(payments ) );

// 12
// 12. * Calculate the total sum of payment amounts made by each student. We need to return an array that contains a list of information about students, including the total paid amount by the student.
// Հաշվել յուրաքանչյուր ուսանողի կողմից վճարված ամբողջ գումարը։ Անհրաժեշտ է վերադարձնել ուսանողների ցուցակը (array), որը ընդգրկում է ուսանողների տվյալները, նեռարյալ ուսանողի կողմից ամբողջ վճարված գումարը։

// function midleofpayedAmount(payments){
//   let count = 0;
//     let sum= 0;
//     let result=0;
//     for(let  key in payments){
//         count++
//   sum+= payments[key].payedAmount

//     }
//     result =sum/count

//     return result
// }

// console.log(midleofpayedAmount(payments ) );

// const evaluations = [
//   {
//     studentId: 1, // Unique identifier for each student
//     studentName: "John Doe",
//     courseId: 1, // Unique identifier for each course
//     courseName: "JS Bootcamp",
//     score: 70,
//   },
//   {
//     studentId: 1, // Unique identifier for each student
//     studentName: "John Doe",
//     courseId: 2, // Unique identifier for each course
//     courseName: "JS Level 0",
//     score: 60,
//   },
//   {
//     studentId: 1, // Unique identifier for each student
//     studentName: "John Doe",
//     courseId: 3, // Unique identifier for each course
//     courseName: "JS Level 1",
//     score: 50,
//   },
//   {
//     studentId: 2, // Unique identifier for each student
//     studentName: "Tom Colins",
//     courseId: 1, // Unique identifier for each course
//     courseName: "JS Bootcamp",
//     score: 60,
//   },
//   {
//     studentId: 2, // Unique identifier for each student
//     studentName: "Tom Colins",
//     courseId: 2, // Unique identifier for each course
//     courseName: "JS Level 0",
//     score: 50,
//   },
//   {
//     studentId: 2, // Unique identifier for each student
//     studentName: "Tom Colins",
//     courseId: 3, // Unique identifier for each course
//     courseName: "JS Level 1",
//     score: 40,
//   },
//   {
//     studentId: 3, // Unique identifier for each student
//     studentName: "Sarah Conor",
//     courseId: 1, // Unique identifier for each course
//     courseName: "JS Bootcamp",
//     score: 45,
//   },
//   {
//     studentId: 3, // Unique identifier for each student
//     studentName: "Sarah Conor",
//     courseId: 2, // Unique identifier for each course
//     courseName: "JS Level 0",
//     score: 35,
//   },
//   {
//     studentId: 3, // Unique identifier for each student
//     studentName: "Sarah Conor",
//     courseId: 3, // Unique identifier for each course
//     courseName: "JS Level 1",
//     score: 25,
//   },
// ];

// 13.  Return  the evaluation record with the lowest evaluation score,
// Վերադարձնել ամենացածր գնահատականով(score) քննության արդյունքը։

// function getLowestScore(evaluations){
//     let min =[];
// for(let key in evaluations){
//    min.push(evaluations[key].score);
//    console.log(evaluations[key].score,evaluations[key].studentName);
// }
// let result = Math.min(...min)
// return result
// }

//console.log(getLowestScore(evaluations));

// function getNameLowestScore(evaluations) {
//   let min = [];
//   for (let key in evaluations) {
//     min.push(evaluations[key].score);
//     //console.log(evaluations[key].score);
//    var resolv = evaluations[key].studentName;
//   }
//   let result = Math.min(...min);

//   if (resolv === result) {
//     console.log(resolv);
//   }

//   return [resolv,result];
// }


// console.log(getNameLowestScore(evaluations));



// 15.  Return array of students that have any evaluation more than 60․
// Վերադարձնել այն ուսանողների ցուցակը, որոնք ունեն որևէ արդյունք որը մեծ է 60-ից։
// function getobj(evaluations){
//   for(let key in  evaluations){
//     if(evaluations[key].score>60 ){
//      console.log(evaluations[key]);
   
//     }
//     return
//    }
// }
// console.log(getobj(evaluations));




  
  
  // 12. * Calculate the total sum of payment amounts made by each student. We need to return an array that contains a list of information about students, including the total paid amount by the student.
  // Հաշվել յուրաքանչյուր ուսանողի կողմից վճարված ամբողջ գումարը։ Անհրաժեշտ է վերադարձնել ուսանողների ցուցակը (array), որը ընդգրկում է ուսանողների տվյալները, նեռարյալ ուսանողի կողմից ամբողջ վճարված գումարը։
