function addTax(rate) {
  return function (value) {
    value = value + value * rate;
    console.log(value);
  };
}

let someFunc = addTax(10);
someFunc(200);
