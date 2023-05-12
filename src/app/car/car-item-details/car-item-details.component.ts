import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-item-details',
  templateUrl: './car-item-details.component.html',
  styleUrls: ['./car-item-details.component.css']
})
export class CarItemDetailsComponent implements OnInit {
  car!: Car;
  slideIndex: number = 0;
  carImages: string[] = [
    'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InJtaW9qcW00ZXBpdi1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.CfWRWeIaqittnn5OPeQ6qbXKLEvV9zJUJ3Bp3YpK4vA/image;s=1080x720',
    'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InphYnlsenBzdGlvbzEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.WO9Fn4mDnEgJhcuiVYEGiEfefrm876yIIxWX0H-oxCU/image;s=1080x720',
    'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im1tdGh0ejdvZ3lyczEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.z2SLochQlEseVkBLxx2dIh5WOQvyKxHsi_RxBcz9eZE/image;s=1080x720',
    'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImhoNTVoc2JuNmw2MzEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.fBcR2j5BJ2Qohgs6umB2U4bIdleUnYwkw0KP8aYc2WE/image;s=1080x720',
    'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImMxNmJwaGVhcGt6ODItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.Lai-UeFclkvmKj0PXOYcFRlTNk41bo1eAmvgreYGuWA/image;s=1080x720',
    'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Imt6dmgxb2ZqdTYzai1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.mO-xrGvw2_zO-uRZxG22fVNwrZTKXiynDakqI9rtMV4/image;s=1080x720',
    'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjNic3Axa2pxcW81bDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.wCez7eeyserbNKtQ5G3BQO01GgLfu0bnAb9WnI_UGZw/image;s=1080x720'
  ]
  ngOnInit(): void {
    console.log('CarItemDetailsComponent loaded');
  }

  onNextSlide(currentIndex: number) {
    if (currentIndex < this.carImages.length) {
      this.slideIndex++;
    }
  }

  onPreviousSlide(currentIndex: number){
    if (currentIndex > 0) {
      this.slideIndex--;
    }
  }

}
