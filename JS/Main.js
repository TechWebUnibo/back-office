function showPass() {
    var pass = document.getElementById("userPassword");

    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}
//TODO da completare (fare praticamente)
function isLogged() {
    accToken = localStorage.token;
    pubKey = localStorage.publicKey;

}
async function createCategory() {
    let map = {}
    //Fetch of the categories
    try {
        var products = await fetch('https://site202118.tw.cs.unibo.it/api/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        products = await products.json()
        for (const product of products) {
            map[product._id] = product.name
        }
    }
    catch (error) {
        console.log(error)
    }
    return map;
}