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
        let products = await fetch('https://site202118.tw.cs.unibo.it/api/products', {
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
    let users = await getCustomers()
    for(const user of users)
    {
        map[user._id] = user.username
    }
    return map;
}

async function mapEmployeeID() {
    let map = {}
    //Fetch of the users
    let users = await getStaff()
    for(const user of users)
    {
        map[user._id] = user.username
    }
    return map;
}

async function mapItemID() {
    let map = {}
    //Fetch of the users
    let items = await getItems()
    for(const item of items)
    {
        map[item._id] = item.name
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

function createPickers() {
    $(function () {
        datePickerController.createDatePicker({
            // Associate the text input to a DD/MM/YYYY date format                            
            formElements: { "startDate": "%Y-%m-%d" },
            noFadeEffect: true,
            labelText: ""
        });
        datePickerController.createDatePicker({
            // Associate the text input to a DD/MM/YYYY date format                            
            formElements: { "endDate": "%Y-%m-%d" },
            noFadeEffect: true,
            labelText: ""
        });
        $("#fd-but-startDate").removeClass("date-picker-control")
        $("#fd-but-startDate").addClass("input-group-text")
        $("#fd-but-endDate").removeClass("date-picker-control")
        $("#fd-but-endDate").addClass("input-group-text")
    });
}