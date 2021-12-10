import { Passenger } from "./Passenger";
import { Point } from "./Point";
import { Vehicle } from "./Vehicle";

export class Taxi implements Vehicle {
    private _currentLocation: Point;
    private speed: number;
    private capacity: number;
    constructor(
      currentLocation: Point = { x: 0, y: 0 },
      speed: number = 25,
      capacity: number = 3
    ) {
      this._currentLocation = currentLocation;
      this.speed = speed;
      this.capacity = capacity;
    }
    functionOnlyForTaxi(): void {}
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
    //property tanımlaması Get-Set, current location _currnet Location a dönüştü
    get currentLocation() {
      return this._currentLocation;
    }
    set currentLocation(point: Point) {
      this._currentLocation.x = point.x;
      this._currentLocation.y = point.y;
    }
  }