import { Injectable } from '@angular/core';
import { Car } from './car.model';
import { CarImage } from './car-galery.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = [
    new Car(1, 'Toyota', 'Avensis', 12000, 2007, 'xxx xxx', 1.8, [
      new CarImage('https://m.autokult.pl/autowp-ru-toyota-avensis-4075e62.jpg'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InJtaW9qcW00ZXBpdi1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.CfWRWeIaqittnn5OPeQ6qbXKLEvV9zJUJ3Bp3YpK4vA/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InphYnlsenBzdGlvbzEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.WO9Fn4mDnEgJhcuiVYEGiEfefrm876yIIxWX0H-oxCU/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im1tdGh0ejdvZ3lyczEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.z2SLochQlEseVkBLxx2dIh5WOQvyKxHsi_RxBcz9eZE/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImhoNTVoc2JuNmw2MzEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.fBcR2j5BJ2Qohgs6umB2U4bIdleUnYwkw0KP8aYc2WE/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImMxNmJwaGVhcGt6ODItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.Lai-UeFclkvmKj0PXOYcFRlTNk41bo1eAmvgreYGuWA/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Imt6dmgxb2ZqdTYzai1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.mO-xrGvw2_zO-uRZxG22fVNwrZTKXiynDakqI9rtMV4/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjNic3Axa2pxcW81bDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.wCez7eeyserbNKtQ5G3BQO01GgLfu0bnAb9WnI_UGZw/image;s=1080x720')]),
    new Car(1, 'Toyota', 'Avensis', 12000, 2007, 'xxx xxx', 1.8, [
      new CarImage('https://m.autokult.pl/autowp-ru-toyota-avensis-4075e62.jpg'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InJtaW9qcW00ZXBpdi1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.CfWRWeIaqittnn5OPeQ6qbXKLEvV9zJUJ3Bp3YpK4vA/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InphYnlsenBzdGlvbzEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.WO9Fn4mDnEgJhcuiVYEGiEfefrm876yIIxWX0H-oxCU/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im1tdGh0ejdvZ3lyczEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.z2SLochQlEseVkBLxx2dIh5WOQvyKxHsi_RxBcz9eZE/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImhoNTVoc2JuNmw2MzEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.fBcR2j5BJ2Qohgs6umB2U4bIdleUnYwkw0KP8aYc2WE/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImMxNmJwaGVhcGt6ODItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.Lai-UeFclkvmKj0PXOYcFRlTNk41bo1eAmvgreYGuWA/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Imt6dmgxb2ZqdTYzai1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.mO-xrGvw2_zO-uRZxG22fVNwrZTKXiynDakqI9rtMV4/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjNic3Axa2pxcW81bDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.wCez7eeyserbNKtQ5G3BQO01GgLfu0bnAb9WnI_UGZw/image;s=1080x720')
    ]),
    new Car(1, 'Toyota', 'Avensis', 12000, 2007, 'xxx xxx', 1.8, [
      new CarImage('https://m.autokult.pl/autowp-ru-toyota-avensis-4075e62.jpg'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InJtaW9qcW00ZXBpdi1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.CfWRWeIaqittnn5OPeQ6qbXKLEvV9zJUJ3Bp3YpK4vA/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InphYnlsenBzdGlvbzEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.WO9Fn4mDnEgJhcuiVYEGiEfefrm876yIIxWX0H-oxCU/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im1tdGh0ejdvZ3lyczEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.z2SLochQlEseVkBLxx2dIh5WOQvyKxHsi_RxBcz9eZE/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImhoNTVoc2JuNmw2MzEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.fBcR2j5BJ2Qohgs6umB2U4bIdleUnYwkw0KP8aYc2WE/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImMxNmJwaGVhcGt6ODItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.Lai-UeFclkvmKj0PXOYcFRlTNk41bo1eAmvgreYGuWA/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Imt6dmgxb2ZqdTYzai1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.mO-xrGvw2_zO-uRZxG22fVNwrZTKXiynDakqI9rtMV4/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjNic3Axa2pxcW81bDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.wCez7eeyserbNKtQ5G3BQO01GgLfu0bnAb9WnI_UGZw/image;s=1080x720')
    ]),
    new Car(1, 'Toyota', 'Avensis', 12000, 2007, 'xxx xxx', 1.8, [
      new CarImage('https://m.autokult.pl/autowp-ru-toyota-avensis-4075e62.jpg'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InJtaW9qcW00ZXBpdi1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.CfWRWeIaqittnn5OPeQ6qbXKLEvV9zJUJ3Bp3YpK4vA/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InphYnlsenBzdGlvbzEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.WO9Fn4mDnEgJhcuiVYEGiEfefrm876yIIxWX0H-oxCU/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im1tdGh0ejdvZ3lyczEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.z2SLochQlEseVkBLxx2dIh5WOQvyKxHsi_RxBcz9eZE/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImhoNTVoc2JuNmw2MzEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.fBcR2j5BJ2Qohgs6umB2U4bIdleUnYwkw0KP8aYc2WE/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImMxNmJwaGVhcGt6ODItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.Lai-UeFclkvmKj0PXOYcFRlTNk41bo1eAmvgreYGuWA/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Imt6dmgxb2ZqdTYzai1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.mO-xrGvw2_zO-uRZxG22fVNwrZTKXiynDakqI9rtMV4/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjNic3Axa2pxcW81bDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.wCez7eeyserbNKtQ5G3BQO01GgLfu0bnAb9WnI_UGZw/image;s=1080x720')
    ]),
    new Car(1, 'Toyota', 'Avensis', 12000, 2007, 'xxx xxx', 1.8, [
      new CarImage('https://m.autokult.pl/autowp-ru-toyota-avensis-4075e62.jpg'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InJtaW9qcW00ZXBpdi1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.CfWRWeIaqittnn5OPeQ6qbXKLEvV9zJUJ3Bp3YpK4vA/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InphYnlsenBzdGlvbzEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.WO9Fn4mDnEgJhcuiVYEGiEfefrm876yIIxWX0H-oxCU/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im1tdGh0ejdvZ3lyczEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.z2SLochQlEseVkBLxx2dIh5WOQvyKxHsi_RxBcz9eZE/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImhoNTVoc2JuNmw2MzEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.fBcR2j5BJ2Qohgs6umB2U4bIdleUnYwkw0KP8aYc2WE/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImMxNmJwaGVhcGt6ODItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.Lai-UeFclkvmKj0PXOYcFRlTNk41bo1eAmvgreYGuWA/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Imt6dmgxb2ZqdTYzai1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.mO-xrGvw2_zO-uRZxG22fVNwrZTKXiynDakqI9rtMV4/image;s=1080x720'),
      new CarImage('https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjNic3Axa2pxcW81bDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.wCez7eeyserbNKtQ5G3BQO01GgLfu0bnAb9WnI_UGZw/image;s=1080x720')
    ])]

  constructor() { }

  getCars() {
    return this.cars.slice();
  }

  getCarById(carId: number): Car{
    return this.cars.slice().find(c => c.id === carId)!;
  }
}
