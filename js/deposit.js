document.getElementById("btn-deposit").addEventListener("click", function () {
  //Grabbing Deposit value
  const depositField = document.getElementById("deposit-field");
  const newDepositAmount = parseFloat(depositField.value);

  //Clearing deposit field
  depositField.value = "";

  if (isNaN(newDepositAmount)) {
    alert("Please provide a number");
    return;
  }

  //Updating the total deposit in the HTML
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotal = parseFloat(depositTotalElement.innerText);

  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  depositTotalElement.innerText = currentDepositTotal;

  //Setting the balance value after deposit
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalance = parseFloat(balanceTotalElement.innerText);

  const currentBalance = previousBalance + newDepositAmount;
  balanceTotalElement.innerText = currentBalance;
});
