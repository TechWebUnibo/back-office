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
function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}