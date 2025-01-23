function validationemailpassword() {
    var email = document.getElementById("loginemail").value;
    let password = document.getElementById("LoginPassword").value;
    const pattern = /^[a-z0-9+$-%.]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

    if (email == "") {
      document.getElementById("loginemailerror").innerHTML =
        "* email should not be empty";
      return false;
    } else if (!pattern.test(email)) {
      document.getElementById("loginemailerror").innerHTML =
        "* invalid email";
      return false;
    } else if (password == "") {
      document.getElementById("loginpassworderror").innerHTML =
        "* password should not be empty";
      return false;
    } else if (password.length < 8) {
      document.getElementById("loginpassworderror").innerHTML =
        "* Password should contain atleast 8 characters long";
      return false;
    } else {
      document.getElementById("loginemailerror").innerHTML = "";
      return true;
      document.getElementById("loginpassworderror").innerHTML = "";
      return true;
    }
  }

  function welcomehomepage() {
    alert("WellCome to Registration Page ^_-");
    return true;
  }