{
  class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    getCarAge(): number {
      const currentYear = new Date().getFullYear();
      console.log(currentYear - this.year);
      return 12;
    }
  }
  const carAge = new Car("Honda", "Civic", 2018);
  carAge.getCarAge();
}
