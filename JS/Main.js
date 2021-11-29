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

async function mapUserID() {
    let map = {}
    //Fetch of the users
    try {
        var customers = await fetch('https://site202118.tw.cs.unibo.it/api/customers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        customers = await customers.json()
        for (const customer of customers) {
            map[customer._id] = customer.username
        }
    }
    catch (error) {
        console.log(error)
    }
    return map;
}