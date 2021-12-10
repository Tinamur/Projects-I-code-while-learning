import { Point } from "./Point";
import { Passenger } from "./Passenger";
export interface Vehicle {
  //capacity: number;
  //speed: number;
  //currentLocation: Point;  //private kısmı eklenince class'a bu özellikleri buradan sildik, type belirttiği için buraya private olarak tanımlanamıyorlar
  setDestination(destination: Point): void;
  addPassenger(passenger: Passenger): void;
  removePassenger(passenger: Passenger): void;
  startJourney(): void;
}
