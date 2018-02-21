// // // const loaf = {
// // //     "flour": 300,
// // //     "water": 210,
// // //     "hydration": function () {
// // //         return (this.water / this.flour) * 100;
// // //     }
// // // }

// // // console.log(loaf.flour);
// // // console.log(loaf.water);

// // // console.log(loaf.hydration());
// // let prop = {
// //     foo: 1,
// //     bar: 2,
// //     fum: 3,
// //     quux: 4,
// //     spam: 5
// // };
// // for(let newProp in prop){
// //     console.log(`${newProp} = ${prop[newProp]}`);
// // }


// // const hobbit = {
// //     'meals': ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
// // }

// // console.log(hobbit.meals[3]);

// let person1 = {
//     name:'John',
//     jobTitle:'Marketing'
// }
// let person2 = {
//     name:'Smiley',
//     jobTitle:'Salesman'
// }
// let person3 = {
//     name:'Bob',
//     jobTitle:'In-n-out'
// }
// let arr = [person1,person2,person3];

// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i].name,arr[i].jobTitle)
// }

// // arr.forEach((item,index) => {
// //     Object.keys())


// let owner = {
//     name:'John',
//     jobTitle:'Marketing'
// }
// let employee1 = {
//     name:'Smiley',
//     jobTitle:'Salesman',
//     boss: 'Juan'
// }
// let employee2 = {
//     name:'Bob',
//     jobTitle:'In-n-out',
//     boss: 'Rich'
// }

// let arr = [owner, employee1, employee2];

// for(let i = 0;i<arr.length;i++){
//     if( arr[i].boss !== undefined) {
//     console.log(`${arr[i].name} ${arr[i].jobTitle} reports to ${arr[i].boss}.`);
// } else if( arr[i].boss === undefined) {
//     console.log(`${arr[i].name} ${arr[i].jobTitle} doesn't report to anybody.`);
// }
// }



// function decode(str){
//     let cipher={
//     a: 2,
//     b: 3,
//     c: 4,
//     d: 5
//             };

// let stringArray = str.split(' ');

// }

// function decode(str){
//     var stringArray = str.split(' ');
//     var decodedString = ' ';
//     for(let i=0;i<stringArray.length;i++){
//     if(str[i][0])
//         }
//        return decodedString;
//     }


function createCharacter(name, nickName, race, origin, attack, defense) {
    return {
        name: name, 
        nickName: nickName, 
        race: race, 
        origin: origin, 
        attack: attack, 
        defense: defense,
        describe: function () {
            console.log(`${this.name} is ${this.race} from ${this.origin}`);
        },
        evaluateFight: function(opponent) {
            let x = this.attack - opponent.defense;
            let y = this.defense - opponent.attack;
            if(this.defense > opponent.attack || opponent.defense > this.attack) {
                let z = 0;
                let w = 0;
                console.log(`Your opponent takes ${z} damage and you receive ${w} damage`);
            } else {
            console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);
        }
    }
    };
}

const charA = createCharacter("Gandalf the White", "gandalf", "Wizard", "Middle Earth", 10, 6);
const charB = createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1);

charA.evaluateFight(charB);
charB.evaluateFight(charA);

// const character = {
//     name: name, 
//         nickName: nickName, 
//         race: race, 
//         origin: origin, 
//         attack: attack, 
//         defense: defense,
//         describe: function () {
//             console.log(`${this.name} is ${this.race} from ${this.origin}`);
//         }
// };


//console.log(charA);
//charA.evaluateFight(); // x = 9 && y = 4




