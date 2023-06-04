import { Coach } from "./coach";
import { CriketCoach } from "./criketcouach";
import { Golfcoach } from "./Golfcoach";
let mycricketCoach=new CriketCoach();
let myGolfCoach=new Golfcoach();
//declarre an array for coaches ........initially empty
let ListCoaches:Coach[]=[];
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
   console.log(element.getDailyWorkout()) ;
});