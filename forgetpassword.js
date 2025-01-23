function validationforgetemailpassword() {
    var password = document.getElementById("password").value;
    var conformpassword = document.getElementById("conformpassword").value;

    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*]/;
    const minLength = 8;
    let email = document.getElementById("emailid").value;
    let emailpattern = /^[a-z0-9$.%+-_]+@[a-z0-9+-]+\.[a-z]{2,3}$/;

    if (email == "") {
      document.getElementById("erroremail").innerHTML =
        "* email should not be null";
      return false;
    } else if (!emailpattern.test(email)) {
      document.getElementById("erroremail").innerHTML = "* invalid email";
      return false;
    } else if (password == "") {
      document.getElementById("errorpassword").innerHTML =
        "* Password should not be empty";
      return false;
    } else if (password.length < minLength) {
      document.getElementById("errorpassword").innerHTML =
        "* Password must be at least 8 characters long";
      return false;
    } else if (!uppercaseRegex.test(password)) {
      document.getElementById("errorpassword").innerHTML =
        "* Password must contain at least one uppercase letter";
      return false;
    } else if (!numberRegex.test(password)) {
      document.getElementById("errorpassword").innerHTML =
        "* Password must contain at least one number";
      return false;
    } else if (!specialCharRegex.test(password)) {
      document.getElementById("errorpassword").innerHTML =
        "* Password must contain at least one special symbol like [!,@,#,$,%,^,&,*]";
      return false;
    } else if (conformpassword == "") {
      document.getElementById("errorconformpassword").innerHTML =
        "* Confirm password should not be empty";
      return false;
    } else if (password !== conformpassword) {
      document.getElementById("errorconformpassword").innerHTML =
        "* Both passwords must match";
      return false;
    }
  }