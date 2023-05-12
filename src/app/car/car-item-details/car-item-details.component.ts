import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-item-details',
  templateUrl: './car-item-details.component.html',
  styleUrls: ['./car-item-details.component.css']
})
export class CarItemDetailsComponent implements OnInit {
  
  ngOnInit(): void {
    console.log('CarItemDetailsComponent loaded');
  }

}
