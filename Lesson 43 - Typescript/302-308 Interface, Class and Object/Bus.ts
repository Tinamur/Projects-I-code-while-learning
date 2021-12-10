import { Passenger } from "./Passenger";
import { Point } from "./Point";
import { Vehicle } from "./Vehicle";

export class Bus implements Vehicle {
  private currentLocation: Point;
  private speed: number;
  private capacity: number;
  constructor(
    currentLocation: Point = { x: 0, y: 0 },
    speed: number = 15,
    capacity: number = 20
  ) {
    this.currentLocation = currentLocation;
    this.speed = speed;
    this.capacity = capacity;
  }
  functionOnlyForBus(): void {}
  setDestination(destination: Point): void {
    console.log("Destination is Set");
  }
  addPassenger(passenger: Passenger): void {
    console.log(`${passenger.name} is now seated in this vehicle`);
  }
  removePassenger(passenger: Passenger): void {
    console.log(`${passenger.name} got out of the vehicle`);
  }
  startJourney(): void {
    console.log("The vehicle started its epic journey");
  }
}
