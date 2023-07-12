const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');
const increaseBtn = document.querySelector('#increaseBtn');
const decreaseBtn = document.querySelector('#decreaseBtn');

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  const bill = Number(billInput.value);

  const tipPercentage = Number(tipInput.value) / 100;

  const tipAmount = bill * tipPercentage;

  const total = tipAmount + bill;

  const perPersonTotal = total / numberOfPeople;


  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};



const increasePeople = () => {
  numberOfPeople += 1;

  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
};
const decreasePeople = () => {
  if (numberOfPeople < 2) {
    return;
  }
  numberOfPeople--;

  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
};

increaseBtn.addEventListener("click", () => {
  increasePeople();
});

decreaseBtn.addEventListener("click", () => {
  decreasePeople();
});

billInput.addEventListener("keyup", () => {
  calculateBill();
});

tipInput.addEventListener("keyup", () => {
  calculateBill();
});

calculateBill();