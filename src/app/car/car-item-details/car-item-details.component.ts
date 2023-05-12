import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-item-details',
  templateUrl: './car-item-details.component.html',
  styleUrls: ['./car-item-details.component.css']
})
export class CarItemDetailsComponent implements OnInit {
  car!: Car;
  slideIndex: number = 0;

  constructor(private activeRoute: ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    console.log('CarItemDetailsComponent loaded');
    const carId = +this.activeRoute.snapshot.params['id']
    this.car = this.carService.getCarById(carId);
    console.log(this.car)
  }

  onNextSlide(currentIndex: number) {
    if (currentIndex < this.car.imageGalery.length) {
      this.slideIndex++;
    }
  }

  onPreviousSlide(currentIndex: number) {
    if (currentIndex > 0) {
      this.slideIndex--;
    }
  }

}
