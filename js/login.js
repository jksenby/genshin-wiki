localStorage.setItem("jksenby", "20052003");
localStorage.setItem("zhanik", "zhanik555");
localStorage.setItem("abdu", "abdullah");
localStorage.setItem("kali", "kali2000");
$("form").on("submit", function (e) {
  e.preventDefault();
  const login = $("#login").val(),
    password = $("#password").val(),
    verification = $("#verification").val();
  if (login.length < 6) {
    alert("Login is too short");
  } else if (login.length > 30) {
    alert("Login is too long");
  } else if (password.length < 8) {
    alert("At least 8 symbols in password field");
  } else if (password.length > 40) {
    alert("Not more than 40 symbols in password filed");
  } else if (password !== verification) {
    alert("Passwords don't match");
  } else if (password !== localStorage.getItem(login)) {
    alert("There is no such user");
  } else {
    alert(`You signed in!\nLogin: ${login}\nPassword: ${password}`);
    $("#login").val("");
    $("#password").val("");
    $("#verification").val("");
  }
});
