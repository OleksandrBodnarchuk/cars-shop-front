import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { Car } from './car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car-main-page.component.html',
  styleUrls: ['./car-main-page.component.css']
})
export class CarComponent implements OnInit {
  cars!: Car[];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }


}
