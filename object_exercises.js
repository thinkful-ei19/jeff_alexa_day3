// const loaf = {
//     "flour": 300,
//     "water": 210,
//     "hydration": function () {
//         return (this.water / this.flour) * 100;
//     }
// }

// console.log(loaf.flour);
// console.log(loaf.water);

// console.log(loaf.hydration());
let prop = {
    foo: 1,
    bar: 2,
    fum: 3,
    quux: 4,
    spam: 5
};
for(let newProp in prop){
    console.log(`${newProp} = ${prop[newProp]}`);
}
