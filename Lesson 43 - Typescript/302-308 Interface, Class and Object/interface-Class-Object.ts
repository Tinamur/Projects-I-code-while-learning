import { Taxi } from "./Taxi";
import { Bus } from "./Bus";
//
//Interface ile kalıp hazırlayıp o kalıpları kullanabilirsin. böylelikle Kodlarında sorun çıkma ihtimali düşer!
//
//
/*
interface Point {
  x: number;
  y: number;
}

interface Passenger {
  id: number;
  name: String;
}

interface Vehicle {
  //capacity: number;
  //speed: number;
  //currentLocation: Point;  //private kısmı eklenince class'a bu özellikleri buradan sildik, type belirttiği için buraya private olarak tanımlanamıyorlar
  setDestination(destination: Point): void;
  addPassenger(passenger: Passenger): void;
  removePassenger(passenger: Passenger): void;
  startJourney(): void;
}

// Classlar bu interfaceleri alıp kullanır

class Taxi implements Vehicle {
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

class Bus implements Vehicle {
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
*/
// Daha sonra oluşturduğumuz Objectler bu classları kullanabilir

let taxi_1 = new Taxi();
let taxi_2 = new Taxi({ x: 4, y: 4 }, 35);
let bus_1 = new Bus({ x: 1, y: 3 }, 15, 30);
taxi_1.setDestination({ x: 21, y: 4 });
bus_1.startJourney();
taxi_2.addPassenger({ id: 1, name: "Passenger_1" });
