var Johns = {
  fname : 'John',
  mass  : 15,
  height : 2,
  calcubmi : function calBmi(){
    this.bmi =  this.mass/(this.height*this.height)
    return this.bmi
  }
}

var Marks = {
  fname : 'Mark',
  mass  : 500,
  height : 5,
  calcubmi : function calBmi(){
    this.bmi =  this.mass/(this.height*this.height)
    return this.bmi
  }
}

console.log('Johns: ' + Johns.calcubmi());
console.log('Marks: ' + Marks.calcubmi());

if (Johns.bmi > Marks.bmi) {
  console.log('Johns Bmi is Greater');
}else{
  console.log('Marks Bmi is Greater');
}
