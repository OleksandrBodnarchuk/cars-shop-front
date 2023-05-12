export class Car {
    constructor(
        public brand: string,
        public model: string,
        public price: number,
        public year: number,
        public mileage: string,
        public engineSize: number,
        public logo: string
    ) { }

    public getShortDescription() {
        return '• ' + this.year + ' • ' + this.mileage + ' km • ' + this.engineSize + ' cm' ;
    }

    public getBrandModel() {
        return this.brand + ' ' + this.model;
    }
}