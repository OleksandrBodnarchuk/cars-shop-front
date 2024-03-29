import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  @Input() car!: Car;

  ngOnInit(): void {
  }
}
