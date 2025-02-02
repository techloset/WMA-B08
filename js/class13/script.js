



class Car{
      make = "BMW";
      model = "A3";
      year = 1990;
      constructor(a, b, c){
            this.make = a;
            this.model = b;
            this.year = c;
      }
      start( val ){
            console.log('Engine started',val);
      }
      stop(){
            console.log('Engine stopped');
      }
}


class ElectricCar extends Car{
     
      speed = 100;
      constructor(a,b,c,d){
            super(a,b,c);
            this.speed = d;
      }
      charge(){
            console.log('Battery is charging');
      }
      start(){
          
            console.log('Electric engine started');
      }
}


let electricCar = new ElectricCar('Tesla', 'Model S', 2020, 150);
electricCar.charge();
electricCar.start(10);
console.log(electricCar);


// class GasCar extends ElectricCar{
//       speed = 200;
//       fuel = "Petrol";
//       refuel(){
//             console.log('Refueling');
//       }
// }
