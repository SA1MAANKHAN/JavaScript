const apiKey = "fd716ec13df2448a93c2bc46b2eba808";

// elements
const homepage = document.querySelector(".homepage");

// cards
foodFacts = document;

// functions

const randomFoodTrivia = async function () {
  const response = await fetch(
    `https://api.spoonacular.com/food/trivia/random?apiKey=${apiKey}`
  );

  const data = await response.json();
  console.log(
    "---------------------------Random Food Trivia ---------------------"
  );
  console.log(data);
};

// randomFoodTrivia();

const searchAboutFood = async function (input) {
  const response = await fetch(
    `https://api.spoonacular.com/food/search?query=${input}&apiKey=${apiKey}`
  );

  const data = await response.json();

  console.log(
    "-------------------Search About Food from Ingrediesnts-----------------"
  );
  console.log(data);

  //   renderImage(data.searchResults[0].results[1].image);
};

// searchAboutFood("cheese");

const searchRecipes = async function (input) {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${input}&apiKey=${apiKey}`
  );

  const data = await response.json();

  console.log(
    "-------------------Search Recipes  from Ingrediesnts-----------------"
  );
  console.log(data);
};

// searchRecipes("cheese");

const randomFoodJoke = async function () {
  const response = await fetch(
    `https://api.spoonacular.com/food/jokes/random?apiKey=${apiKey}`
  );

  const data = await response.json();
  console.log("----------------------Random Food Joke ---------------------");
  console.log(data);
};

// randomFoodJoke();

const randomRecipies = async function () {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`
  );

  const data = await response.json();
  console.log("----------------------Random Recipies ---------------------");
  console.log(data);
};

// randomRecipies();

const getQueriesAnswered = async function (inputQuery) {
  const query = inputQuery.toLowerCase().replaceAll(" ", "+");

  const response = await fetch(
    `https://api.spoonacular.com/food/converse?text=${query}&apiKey=${apiKey}`
  );

  const data = await response.json();
  console.log("------------------------Talk to bot ---------------------");
  console.log(data);
};

// getQueriesAnswered("tell me a joke");

const searchByIngredients = async function (ingredients) {
  const ing = ingredients.split(" ").join(",+");

  const response = await fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ing}&apiKey=${apiKey}`
  );

  const data = await response.json();
  console.log(
    "------------------------Search By Ingredients ---------------------"
  );
  console.log(data);
};

// searchByIngredients("tell me a joke");

//  auto-complete https://api.spoonacular.com/recipes/autocomplete?number=10&query=chick

//  search-ingredient-substitute https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=butter

//  quick-answers https://api.spoonacular.com/recipes/quickAnswer?q=How+much+vitamin+c+is+in+2+apples

//  POST-image-classification https://api.spoonacular.com/food/images/analyze

// functionality
const renderImage = function (src) {
  const html = `<img src="${src}" alt="">`;
  homepage.insertAdjacentHTML("afterend", html);
};
