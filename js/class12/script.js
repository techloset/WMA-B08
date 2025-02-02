class Car{
      make;
      model;
      year;
      constructor(a, b,c){
            this.make = a;
            this.model = b;
            this.year = c;
            // console.log('Car created',a,b,c);
      }

      start(){
            console.log('Engine started');
      }
      stop(){
            console.log('Engine stopped');
      }
}

let car = new Car("BMW","A3",1990);
let car2 = new Car("Honda","civic",2021);
// car2.make = 'Mercedes';
car.start()
car2.stop()


// let car = {
//       make: 'Audi',
//       model: 'A3',
//       year: 2015,
//       start: function() {
//         console.log('Engine started');
//       },
//       stop: function() {
//         console.log('Engine stopped');
//       }

// }