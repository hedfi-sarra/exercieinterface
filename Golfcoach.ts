import { Coach } from "./coach";
export class Golfcoach implements Coach{
    getDailyWorkout(): string {
      return("Hit 100 balls at the golf range.");
    }

}