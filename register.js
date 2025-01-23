function Registrationvalidationall() 
{
    let firstname = document.getElementById("firstname").value.trim();
    let lastname = document.getElementById("lastname").value.trim();
    var password = document.getElementById("password").value;
    var conformpassword = document.getElementById("conformpassword").value;

    
    const uppercaseRegex = /[A-Z]/; 
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*]/; 
    const minLength = 8;


    let mobilenumber = document.getElementById("mobilenumber").value.trim();
    let email = document.getElementById("emailid").value;
    let emailpattern = /^[a-z0-9$.%+-_]+@[a-z0-9+-]+\.[a-z]{2,3}$/;

    let address=document.getElementById("address").value.trim();

    // Reset error messages
    document.getElementById("errorfirstname").innerHTML = "";
    document.getElementById("errorlastname").innerHTML = "";
    document.getElementById("errorpassword").innerHTML = "";
    document.getElementById("errorconformpassword").innerHTML = "";
    document.getElementById("errormobilenumber").innerHTML = "";
    document.getElementById("erroremail").innerHTML = "";
    document.getElementById("errorgender").innerHTML = "";
    document.getElementById("erroraddress").innerHTML = "";
    document.getElementById("erroragreetermsandconsitions").innerHTML = "";
    

    // Validation checks
    if (firstname == "") {
        document.getElementById("errorfirstname").innerHTML = "* Firstname should not be empty";
        return false;
    }
    else if (!isNaN(firstname)) {
        document.getElementById("errorfirstname").innerHTML = "* Firstname should contain only characters";
        return false;
    }
    else if (lastname == "") {
        document.getElementById("errorlastname").innerHTML = "* Lastname should not be empty";
        return false;
    }
    else if (!isNaN(lastname)) {
        document.getElementById("errorlastname").innerHTML = "* Lastname should contain only characters";
        return false;
    }
    else if (password == "") {
        document.getElementById("errorpassword").innerHTML = "* Password should not be empty";
        return false;
    }
    
    else if (password.length < minLength) {
        document.getElementById("errorpassword").innerHTML = "* Password must be at least 8 characters long";
        return false;
    }
    else if (!uppercaseRegex.test(password)) {
        document.getElementById("errorpassword").innerHTML = "* Password must contain at least one uppercase letter";
        return false;
    }
    else if (!numberRegex.test(password)) {
        document.getElementById("errorpassword").innerHTML = "* Password must contain at least one number";
        return false;
    }
    else if (!specialCharRegex.test(password)) {
        document.getElementById("errorpassword").innerHTML = "* Password must contain at least one special symbol like [!,@,#,$,%,^,&,*]";
        return false;
    }
    else if (conformpassword == "") {
        document.getElementById("errorconformpassword").innerHTML = "* Confirm password should not be empty";
        return false;
    }
    else if (password !== conformpassword) {
        document.getElementById("errorconformpassword").innerHTML = "* Both passwords must match";
        return false;
    }
    else if (mobilenumber == "") {
        document.getElementById("errormobilenumber").innerHTML = "* mobile number should not be null";
        return false;
    }
    else if (mobilenumber.length != 10) {
        document.getElementById("errormobilenumber").innerHTML = "* mobile number should contain 10 digits";
        return false;
    }
    else if (email == "") {
        document.getElementById("erroremail").innerHTML = "* email should not be null";
        return false;
    }
    else if (!(emailpattern.test(email))) {
        document.getElementById("erroremail").innerHTML = "* invalid email";
        return false;
    }
    else if(document.getElementById("male").checked==false && document.getElementById("female").checked==false && document.getElementById("other").checked==false)
    {
        document.getElementById("errorgender").innerHTML = "* please select gender";
        return false;
    }
    else if(address=="")
    {
        document.getElementById("erroraddress").innerHTML = "* please provide address";
        return false;  
    }
    else if(document.getElementById("agreetermsandconsitions").checked==false)
    {
        document.getElementById("erroragreetermsandconsitions").innerHTML = "* agree terms and conditions";
        return false;  
    }


    // If all validations pass, return true
    return true;
}