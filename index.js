const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95],],
    ['John', ['node', 'CSS', 'JS', 'React'], [85, 80, 85, 80],],

]


const convertArrayToObject = (arr) => {
    let finalArray = [];
    for (const array of arr) {
        for (let i = 0; i < array.length; i++) {
            var obj3 = {
                name: array[0],
                skills: array[1],
                scores: array[2],
            };
        }
        finalArray.push(obj3)
    }
    return finalArray
}
console.log(" final array", convertArrayToObject(students))








































































































// // const students = [
// //     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
// //     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// // ]

// // convertArrayToObject
// const convertArrayToObject = (students) => {
//     let obj = {}
//     obj.name = Object.fromEntries(students)
//     return obj




// }



// // console.log(convertArrayToObject(students))

// // [
// //     {
// //         name: 'David',
// //         skills: ['HTM','CSS','JS','React'],
// //         scores: [98,85,90,95]
// //     },
// //     {
// //         name: 'John',
// //         skills: ['HTM','CSS','JS','React'],
// //         scores: [85, 80,85,80]
// //     }
// // ]



// // function toObject(arr) {
// //     var rv = {
// //         name: "",
// //         skills: "",
// //         scores: ""
// //     };
// //     for (var i = 0; i < arr.length; ++i)
// //         rv[i] = arr[i];
        
// //     return rv;
// // }

// // console.log("array", toObject(students))
// const students = [
//     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//     ['John', ['node', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// ]
// function toObject(arr) {
//     var rv = {
//         name: "",
//         skills: "",
//         scores: ""
//     };
//     let newArray=[]
//     for (var i = 1; i < arr.length; i++){
//         rv.name=arr[i][0]
//         rv.skills=arr[i][1]
//         rv.scores=arr[i][2]
//         //  rv.name=arr[0][0]
//         //  rv.skills=arr[0][1]
//         //  rv.scores=arr[0][2]
//         //  rv.name=arr[1][0]
//         //  rv.skills=arr[1][1]
//         //  rv.scores=arr[1][2]
//         //   console.log("2nd time check ",arr[i][j])
//        newArray.push(rv)
//     }
   
//     //   console.log("check",arr.length,arr)
//     return newArray
//   }
  
//   console.log(" final array",toObject(students))