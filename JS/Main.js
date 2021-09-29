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
//TODO da completare (fare praticamente)
function isLogged(){
    accToken = localStorage.token;
    pubKey = localStorage.publicKey;

}