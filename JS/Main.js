function showPass(){
    var pass = document.getElementById("userPassword");

    if(pass.type === "password")
    {
        pass.type = "text";
    } else 
    {
        pass.type = "password";
    }
}