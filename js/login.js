document.getElementById("btn-submit").addEventListener("click", function () {
  //Grabing email from the input
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  //Grabing password from the input
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  if (email === "test@test.com" && password === "@1234") {
    window.location.href = "bank.html";
  } else {
    window.alert("Wrong email and password combination");
  }
});
