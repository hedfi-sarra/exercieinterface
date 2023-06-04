"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const criketcouach_1 = require("./criketcouach");
const Golfcoach_1 = require("./Golfcoach");
let mycricketCoach = new criketcouach_1.CriketCoach();
let myGolfCoach = new Golfcoach_1.Golfcoach();
//declarre an array for coaches ........initially empty
let ListCoaches = [];
//add the coaches to the array
ListCoaches.push(mycricketCoach);
ListCoaches.push(myGolfCoach);
//parcour avec deux methodes
//1
// for(let tempCoach of ListCoaches){
// console.log(tempCoach.getDailyWorkout());
// }
//2
ListCoaches.forEach(element => {
    console.log(element.getDailyWorkout());
});
