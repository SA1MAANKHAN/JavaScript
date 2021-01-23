
var car = function(manufacturer , model , capacity , type ){
  this.manufacturer = manufacturer;
  this.model = model;
  this.capacity = capacity;
  this.type = type;
}

car.prototype.yearsOld = function(){
  return 2020 - this.model ;
}

var alto  = new car('maruti' , 2020 , 5 , 'mini');
var swift = new car ('maruti' , 2012 ,5 , 'small' )

console.log(alto)
console.log(alto.yearsOld(), swift.yearsOld())
