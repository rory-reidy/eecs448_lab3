document.getElementById("verify").addEventListener("click", validate());

function validate() {

  let p1 = document.getElementById("pass1").value;
  let p2 = document.getElementById("pass2").value;
  if (p1 != p2) {
    alert("Passwords do not match!");
  }
  else if (p1.length< 8)
  {
    alert("Password must be atleast 8 characters long.");
  }
  else {
    alert("Password is valid.");
  }
}
