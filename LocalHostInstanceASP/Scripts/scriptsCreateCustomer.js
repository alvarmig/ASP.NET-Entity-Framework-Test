document.getElementById('Createbtn').disabled = true;

function check_pass(form) {
    // If password not entered
    if (document.getElementById("PasswordHash").value == '')
        alert("Please enter Password");
    // If confirm password not entered
    else if (document.getElementById("PasswordHash2").value == '')
        alert("Please enter confirm password");
    // If Not same return False.
    if (document.getElementById("PasswordHash").value != document.getElementById("PasswordHash2").value) {
        //alert("\nPassword did not match: Please try again...")
        document.getElementById('Createbtn').disabled = true;
        //document.getElementById('PasswordHash2').classList.add('is-invalid');
        return false;
    }
    // If same return True.
    else {
        document.getElementById('Createbtn').disabled = false;
        //alert("Password Match!")
        return true;
    }
}