// Document is ready
$(document).ready(function () {
    // Validate Username
    $("#usercheck").hide();
    let nameError = true;
    $("#usernames").keyup(function () {
        validateUsername();
    });
    
    function validateUsername() {
        let nameValue = $("#usernames").val();
        if (nameValue.length == "") {
        $("#usercheck").show();
        nameError = false;
        return false;
        } else if (nameValue.length < 3 || nameValue.length > 15) {
        $("#usercheck").show();
        $("#usercheck").html("**length of username must be between 3 and 15");
        nameError = false;
        return false;
        } else {
        $("#usercheck").hide();
        }
    }
    
    // Validate Email
    const email = document.getElementById("email");
    email.addEventListener("blur", () => {
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if (regex.test(s)) {
        email.classList.remove("is-invalid");
        emailError = true;
        } else {
        email.classList.add("is-invalid");
        emailError = false;
        }
    });
    
    // Validate Password
    $("#passcheck").hide();
    let passwordError = true;
    $("#password").keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwordValue = $("#password").val();
        if (passwordValue.length == "") {
        $("#passcheck").show();
        passwordError = false;
        return false;
        }
        if (passwordValue.length < 3 || passwordValue.length > 10) {
        $("#passwordcheck").show();
        $("#passwordcheck").html(
            "**length of your password must be between 3 and 10"
        );
        $("#passwordcheck").css("color", "red");
        passwordError = false;
        return false;
        } else {
        $("#passwordcheck").hide();
        }
    }
    // Submit button
    $("#submitbtn").click(function () {
        validateUsername();
        validatePassword();
        validateEmail();
        if (
        nameError == true &&
        passwordError == true &&
        emailError == true
        ) {
        return true;
        } else {
        return false;
        }
    });
    });
    