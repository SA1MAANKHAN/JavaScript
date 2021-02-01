"use strict";

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the
 screen.

Tasks are not super-descriptive this time, so that you can figure
 out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an 
input. This function returns a promise which creates a new image 
(use document.createElement('img')) and sets the .src attribute to
 the provided image path. When the image is done loading, append it 
 to the DOM element with the 'images' class, and resolve the promise. 
 ulfilled value should be the image element itself. In case there is
  an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of 
the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using 
the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image 
(set display to 'none'), and load a second image (HINT: Use the 
  image element returned by the createImage promise to hide the 
  current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds 
again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by
 passing a wrong image path. Set the network speed to 'Fast 3G' 
 in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// const promiseImage = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve((image.src = "img-.jpg"));
//     reject(new Error("Something went wrong"));
//   }, 2000);
// });

// promiseImage.then((response) => response).catch((err) => console.error(err));

const imageContainer = document.querySelector(".container");

let img;

function createImage(path) {
  return new Promise(function (resolve, reject) {
    img = document.createElement("img");
    img.src = path;

    img.addEventListener("load", function () {
      imageContainer.appendChild(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Something went completely Wrong"));
    });
  });
}

function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

// createImage("img-1.jpg")
//   .then((curImg) => {
//     img = curImg;
//     return wait(2);
//   })
//   .then(() => {
//     img.style.display = "none";
//     return wait(2);
//   })
//   .then((curImg) => {
//     img = curImg;
//     return createImage("img-2.jpg");
//   })
//   .then((curImg) => {
//     return wait(2);
//   })
//   .then(() => {
//     img.style.display = "none";
//   })
//   .catch((err) => console.error(err));

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, 
this time using async/await (only the part where the promise is consumed).
pare the two versions, think about the big differences, and see which one
 you like more.
Don't forget to test the error handler, and to set the network speed to 
'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image
 paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the '
createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the 
array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, 
turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const loadNPause = async function () {
  try {
    const img = await createImage("img-1.jpg");
    await wait(2);
    img.style.display = "none";
    await wait(2);
    const img2 = await createImage("img-2.jpg");
    await wait(2);
    img2.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};

const loadAll = async function () {
  const arrayPromise = await Promise.race([
    createImage("img-1.jpg"),
    createImage("img-2.jpg"),
    createImage("img-3.jpg"),
  ]);

  console.log(arrayPromise);
  setTimeout(() => {
    arrayPromise.style.display = "none";
  }, 2000);
};

loadAll();
