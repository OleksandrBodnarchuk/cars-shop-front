import { Injectable } from '@angular/core';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = [
    new Car('Toyota', 'Avensis', 12000, 2007, 'xxx xxx', 1.8, 'https://m.autokult.pl/autowp-ru-toyota-avensis-4075e62.jpg'),
    new Car('Toyota', 'Avensis', 12000, 2007, 'xxx xxx', 1.8, 'https://m.autokult.pl/autowp-ru-toyota-avensis-4075e62.jpg'),
    new Car('Toyota', 'Avensis', 12000, 2007, 'xxx xxx', 1.8, 'https://m.autokult.pl/autowp-ru-toyota-avensis-4075e62.jpg'),
    new Car('Toyota', 'Avensis', 12000, 2007, 'xxx xxx', 1.8, 'https://m.autokult.pl/autowp-ru-toyota-avensis-4075e62.jpg'),
    new Car('Toyota', 'Avensis', 12000, 2007, 'xxx xxx', 1.8, 'https://m.autokult.pl/autowp-ru-toyota-avensis-4075e62.jpg'),
    new Car('Toyota', 'Avensis', 12000, 2007, 'xxx xxx', 1.8, 'https://m.autokult.pl/autowp-ru-toyota-avensis-4075e62.jpg'),
    new Car('Toyota', 'Avensis', 12000, 2007, 'xxx xxx', 1.8, 'https://m.autokult.pl/autowp-ru-toyota-avensis-4075e62.jpg'),
    new Car('Toyota', 'Avensis', 12000, 2007, 'xxx xxx', 1.8, 'https://m.autokult.pl/autowp-ru-toyota-avensis-4075e62.jpg'),
  ];

  constructor() { }

  getCars() {
    return this.cars.slice();
  }
}
