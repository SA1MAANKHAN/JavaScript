function toCamelCase(testString) {
  stringArray = testString.split("_");
  stringArray[0] = stringArray[0].toLowerCase();
  stringArray[1] =
    stringArray[1][0].toUpperCase() + stringArray[1].slice(1).toLowerCase();

  return stringArray[0] + stringArray[1];

  //   console.log(stringArray);
}

testData = [
  "underscore_case",
  "first_name",
  "Some_Variable",
  "calculate_AGE",
  "delayed_departure",
];

let result;
let i = 1;
for (const test of testData) {
  result = toCamelCase(test);
  console.log(result.padEnd(20) + " " + "✅".repeat(i));
  i++;
}
