// // const loaf = {
// //     "flour": 300,
// //     "water": 210,
// //     "hydration": function () {
// //         return (this.water / this.flour) * 100;
// //     }
// // }

// // console.log(loaf.flour);
// // console.log(loaf.water);

// // console.log(loaf.hydration());
// let prop = {
//     foo: 1,
//     bar: 2,
//     fum: 3,
//     quux: 4,
//     spam: 5
// };
// for(let newProp in prop){
//     console.log(`${newProp} = ${prop[newProp]}`);
// }


// const hobbit = {
//     'meals': ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
// }

// console.log(hobbit.meals[3]);

let person1 = {
    name:'John',
    jobTitle:'Marketing'
}
let person2 = {
    name:'Smiley',
    jobTitle:'Salesman'
}
let person3 = {
    name:'Bob',
    jobTitle:'In-n-out'
}
let arr = [person1,person2,person3];

for(let i = 0;i<arr.length;i++){
    console.log(arr[i].name,arr[i].jobTitle)
}
// arr.forEach((item,index) => {
//     Object.keys())



