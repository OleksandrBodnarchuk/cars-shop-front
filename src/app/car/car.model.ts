import { CarImage } from "./car-galery.model";

export class Car {
    public logo!: string;
    constructor(
        public id: number,
        public brand: string,
        public model: string,
        public price: number,
        public year: number,
        public mileage: string,
        public engineSize: number,
        public imageGalery: CarImage[]
    ) { this.logo = imageGalery[0].imageUrl }

    public getShortDescription() {
        return '• ' + this.year + ' • ' + this.mileage + ' km • ' + this.engineSize + ' cm';
    }

    public getBrandModel() {
        return this.brand + ' ' + this.model;
    }
}