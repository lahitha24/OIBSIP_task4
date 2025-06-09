function register() {
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;
  const message = document.getElementById("message");

  if (!username || !password) {
    message.textContent = "Please fill in both fields";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[username]) {
    message.textContent = "Username already exists!";
  } else {
    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    message.style.color = "green";
    message.textContent = "Registration successful!";
  }
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const message = document.getElementById("message");

  let users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[username] && users[username] === password) {
    sessionStorage.setItem("loggedInUser", username);
    window.location.href = "dashboard.html";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid credentials!";
  }
}
