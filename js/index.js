// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`

  document.querySelectorAll(`.mushroom`).forEach((oneChampi) => {
    if (state.mushrooms) {
      oneChampi.style.visibility = `visible`;
    } else {
      oneChampi.style.visibility = `hidden`;
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(`.green-pepper`).forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = `visible`;
    } else {
      onePepper.style.visibility = `hidden`;
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(`.sauce`).forEach((sauce) => {
    if (state.whiteSauce) {
      sauce.style.visibility = `visible`;
    } else {
      sauce.style.visibility = `hidden`;
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(`.crust`).forEach((gluten) => {
    if (state.glutenFreeCrust) {
      gluten.style.visibility = `visible`;
    } else {
      gluten.style.visibility = `hidden`;
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  document.querySelector('.btn.btn-pepperoni').classList.toggle('active');
  document.querySelector('.btn.btn-mushrooms').classList.toggle('active');
  document.querySelector('.btn.btn-green-peppers').classList.toggle('active');
  document.querySelector('.btn.btn-sauce').classList.toggle('active');
  document.querySelector('.btn.btn-crust').classList.toggle('active');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  
  const newListPrice = document.querySelector('.panel.price strong');
  newListPrice.innerText = `$${basePrice+3}`;


  if (state.pepperoni === false) {
    basePrice += 1;
  } else {     basePrice -= 1;
  } 

  if (state.mushrooms === false) {
    basePrice += 1;
  } else {     basePrice -= 1;
  }
  if (state.greenPeppers === false) {
    basePrice += 1;
  } else {     basePrice -= 1;
  }
  
  if (state.glutenFreeCrust=== false ) {
    basePrice += 5;
  } else {basePrice -= 5;}
 
  if (state.whiteSauce=== false ) {
    basePrice += 3;
  } else {basePrice -= 3;}


}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`

document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  if (state.mushrooms === true) {
    state.mushrooms = false;
  } else if (state.mushrooms === false) {
    state.mushrooms = true;
  }
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', () => {
    if (state.greenPeppers === true) {
      state.greenPeppers = false;
    } else if (state.greenPeppers === false) {
      state.greenPeppers = true;
    }
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
