// var car = [[2021,"honda","red",12414],"2022","toyota","blue",12414,"2023","ford","green",12414];

// price  ---> 12414
// company ---> honda
// modal ---> 2021
// color ---> red


var car  =  {
      price : 12414,
      company : "honda",
      modal : 2021,
      color : "red"
}

car.automatic = true;
car.company = "toyota";

delete car.color;
console.log(car);



var car2 = {
      price : 12414,
      company : "toyota",
      modal : 2022,
      color : "blue"
}

var car3 = {
      price : 12414,
      company : "ford",
      modal : 2023,
      color : "green"
}

var cars = [{ 
      price : 88230,
      company : "honda",
      modal : 2021,
      color : "red"
},{
      price : 12414,
      company : "toyota",
      modal : 2022,
      color : "blue"
},{
      price : 9124,
      company : "ford",
      modal : 2023,
      color : "green"
}];

// console.log(cars[0].company + " " + cars[0].price);
// console.log(cars[1].company + " " + cars[1].price);
// console.log(cars[2].company + " " + cars[2].price);

for(var i = 0; i < cars.length; i++){
      console.log(cars[i].company + " " + cars[i].price);
}