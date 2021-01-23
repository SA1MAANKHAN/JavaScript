console.log('yo wassup');

function tipCalculator(array){
  var tips = [0 , 0 , 0];
  var final = [0 , 0 , 0 ]
  var i = 0;
  for (i = 0 ; i < array.length ; i++){
    tips[i] = 0.2*array[i]
    final[i] = tips[i] + array[i];
 }
console.log(array);
console.log(tips);
console.log(final)
}

tipCalculator([50,200,250]);
