import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { ActivatedRoute, Params } from '@angular/router';
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
   
    this.activeRoute.params.subscribe((params: Params) => {
      this.car = this.carService.getCarById(+params['id']);
      console.log(this.car)
    })
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
