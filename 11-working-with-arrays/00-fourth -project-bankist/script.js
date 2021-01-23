"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

// Name to intials
function ownerToUserName(account) {
  account.username = account.owner
    .split(" ")
    .map((grabber) => grabber[0])
    .join("")
    .toLowerCase();
}
accounts.map(ownerToUserName);

// displaying all movemnents or transactions
const displayMovements = function (movements, sort = false) {
  // setting html back to blank
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  let i = 1;
  for (const mov of movs) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = ` <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i} ${type}</div>
      <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
    i++;
  }
};

// displating Summary and all labels
const displaySummary = function (acc) {
  // label Balance
  labelBalance.textContent = acc.movements
    .reduce((acc, mov) => acc + mov, 0)
    .toFixed(2);

  // label IN
  labelSumIn.textContent = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
    .toFixed(2);

  // label OUT
  labelSumOut.textContent = Math.abs(
    acc.movements.filter((mov) => mov < 0).reduce((acc, mov) => acc + mov, 0)
  ).toFixed(2);

  // label INTREST
  labelSumInterest.textContent = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .reduce((acc, mov) => acc + mov, 0)
    .toFixed(2);

  // clearing input fields and removing focus
  inputLoginUsername.value = inputLoginPin.value = "";
  inputLoginPin.blur();
};

// Implementing login function
let currentAcc, timer;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAcc = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  if (currentAcc?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;
    labelWelcome.textContent = ` Hey ${
      currentAcc.owner.split(" ")[0]
    }, Welcome`;
    displaySummary(currentAcc);
    displayMovements(currentAcc.movements);

    if (timer) clearInterval(timer);
    timer = startLogoutTimer();
  } else {
    labelWelcome.textContent = "Try Again";
  }
});

// Transfers
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const recieverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);
  recieverAcc?.movements.push(amount);
  currentAcc.movements.push(-amount);
  displaySummary(currentAcc);
  displayMovements(currentAcc.movements);

  // // clearing input fields and removing focus
  // inputLoginUsername.value = inputLoginPin.value = "";
  // inputLoginPin.blur();
});

// sort
let sortState = 0;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  if (sortState === 0) {
    displayMovements(currentAcc.movements, true);
    sortState = 1;
    btnSort.textContent = "UNSORT";
  } else {
    displayMovements(currentAcc.movements, false);
    sortState = 0;
    btnSort.textContent = "SORT  ";
  }
});

// colour of movements

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) {
      row.style.backgroundColor = "#F2F2F2";
    }
  });
});

const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(timer / 60)).padStart(2, 0);
    const sec = String(Math.trunc(timer % 60)).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    if (timer === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = ` Login Again`;
      return;
    }

    timer--;
  };
  let timer = 10;

  tick();

  setInterval(tick, 1000);

  return timer;
};
