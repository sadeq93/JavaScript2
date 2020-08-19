// document.querySelector("#app").innerText = "Tip Calculator";
const calculateButton = document.getElementById('calculate-button');
const CalculateTip = () => {
  const amount = document.getElementById('amount');
  const service = document.getElementById('service');
  const sharingPeople = document.getElementById('sharingPeople');
  const result = document.getElementById('result');

  let tipAmount = (parseFloat(amount.value) + (parseFloat(amount.value) / 100) * parseFloat(service.value)) / parseFloat(sharingPeople.value);
  let amountFlag = false;
  let sharingPeopleFlag = false;
  if (amount.value === '' || service.value === '' || sharingPeople.value === '') {
    alert('Fill in all the fields!')
  } else {
    if (!isNaN(amount.value)) {
      amountFlag = true
    } else {
      amount.value = `invalid Number`
      amount.style.color = 'red';
    }

    if (!isNaN(sharingPeople.value)) {
      sharingPeopleFlag = true
    } else {
      sharingPeople.value = `invalid Number`
      sharingPeople.style.color = 'red';
    }
    if (amountFlag === true && sharingPeopleFlag === true) {
      if (parseFloat(sharingPeople.value) !== 1) {
        result.textContent = `TIP AMOUNT $${tipAmount} each`
      } else {
        result.textContent = `TIP AMOUNT $${tipAmount}`
      }
    
    }
  }
  console.log(amount.value);
}

calculateButton.addEventListener("click", CalculateTip);

