document.getElementById("btn-withdraw").addEventListener("click", function () {
  //Grabbing Withdraw value
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmount = parseFloat(withdrawField.value);

  //Clearing deposit field
  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a number");
    return;
  }

  //Updating the total withdraw in the HTML
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

  //Setting the balance value after withhdraw
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalance = parseFloat(balanceTotalElement.innerText);

  if (newWithdrawAmount > previousBalance) {
    alert("Not enough balance");
    return;
  }
  //This portion was dragged here to stop updating withdraw in the html when withdraw is > than previous balance
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const currentBalance = previousBalance - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalance;
});
