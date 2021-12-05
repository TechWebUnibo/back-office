// For auth
const ACCESS_TOKEN_KEY = 'access_token'
const PUBLICKEY_KEY = 'publicKey'
const BASE_URL = '//site202118.tw.cs.unibo.it/api/auth'
const PUBLICKEY_URL = BASE_URL + '/publicKey'
const CUSTMER_LOGIN = BASE_URL + '/login/customers'
const CUSTOMER_REGISTER = BASE_URL + '/customers'

// For API
const url = '//site202118.tw.cs.unibo.it/api/'
const customersUrl = 'customers'
const rentsUrl = 'rentals'
const staffUrl = 'staff'
const invoicesUrl = 'invoices'
const productsUrl = 'products'
const itemsUrl = 'items'


// Authenticated for back-office
function authBack() {
    //authenticated?
    fetch('https://site202118.tw.cs.unibo.it/api/auth/staff/authenticated', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + getToken()
        },
    })
        .then(res => {
            if (res.status == 200) return res.json();
            else window.location.href = 'Login.html';
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (err) {
            console.log(err);
        })
}

async function apiLogin(username, password) {
    let data = `{
        "username": "${username}",
        "password": "${password}"
        }`;
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
    };
    try {
        let res = await fetch(CUSTMER_LOGIN, requestOptions);
        let status = res.status;
        res = await res.json();
        if (status === 200) {
            setToken(res.accessToken);
        }
        return status;
    } catch (e) {
        console.log(e);
    }
    return 502;
}


function logout() {
    setToken(null);
}

async function refreshPublicKey() {
    let res = await fetch(PUBLICKEY_URL, {
        method: 'GET',
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
    })
    let status = res.status
    res = await res.json()
    if (status === 200) {
        localStorage[PUBLICKEY_KEY] = res.publicKey
    }
}


async function getPublicKey() {
    if (!localStorage[PUBLICKEY_KEY] || localStorage[PUBLICKEY_KEY] === 'undefined') {
        await refreshPublicKey()
    }
    return localStorage[PUBLICKEY_KEY]
}


function setToken(token) {
    localStorage[ACCESS_TOKEN_KEY] = token
}


function getToken() {
    return localStorage[ACCESS_TOKEN_KEY]
}

async function isLogged() {
    try {
        let decoded = jwt.verify(getToken(), await getPublicKey(), { algorithm: 'RS256' })
        return decoded.role === 'customer'
    }
    catch (err) {
        console.log(err)
        return false
    }
}


async function getCustomers() {
    let res = await fetch(url + customersUrl, {
        method: 'GET',
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    })
    if (res.status === 200) {
        res = await res.json()
        return res
    }
    else {
        return []
    }
}
async function getStaff() {
    try {
        let res = await fetch(url + staffUrl, {
            method: 'GET',
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + getToken()
            },
        })
        if (res.status === 200) {
            res = await res.json()
            return res
        }
        else {
            return []
        }
    }
    catch (e) {
        console.log(e)
    }
}
async function getProducts() {
    try {
        let res = await fetch(url + productsUrl, {
            method: 'GET',
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + getToken()
            },
        })
        if (res.status === 200) {
            res = await res.json()
            return res
        }
        else {
            return []
        }
    }
    catch (e) {
        console.log(e)
    }
}
async function getRentals(query) {
    if (typeof query != 'undefined') {
        query = '?' + new URLSearchParams(query).toString()
    }
    else {
        query = ''
    }
    try {
        let res = await fetch(url + rentsUrl + query, {
            method: 'GET',
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + getToken()
            },
        })
        if (res.status === 200) {
            res = await res.json()
            return res
        }
        else {
            return []
        }
    }
    catch (e) {
        console.log(e)
    }
}
//TODO forse da eliminare
async function getRentByID(id, query) {
    id = '/' + id
    try {
        let res = await fetch(url + rentsUrl + id, {
            method: 'GET',
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + getToken()
            },
        })
        if (res.status === 200) {
            res = await res.json()
            return res
        }
        else {
            return []
        }
    }
    catch (e) {
        console.log(e)
    }
}
async function getInvoices(query) {
    if (typeof query != 'undefined') {
        query = '?' + new URLSearchParams(query).toString()
    }
    else {
        query = ''
    }
    try {
        let res = await fetch(url + invoicesUrl + query, {
            method: 'GET',
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + getToken()
            },
        })
        if (res.status === 200) {
            res = await res.json()
            return res
        }
        else {
            return []
        }
    }
    catch (e) {
        console.log(e)
    }
}
async function getItems(query) {
    if (typeof query != 'undefined') {
        query = '?' + new URLSearchParams(query).toString()
    }
    else {
        query = ''
    }
    try {
        let res = await fetch(url + itemsUrl + query, {
            method: 'GET',
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + getToken()
            },
        })
        if (res.status === 200) {
            res = await res.json()
            return res
        }
        else {
            return []
        }
    }
    catch (e) {
        console.log(e)
    }
}

async function deleteItem(id) {
    let res
    try {
        res = await fetch(url + itemsUrl + '/' + id, {
            method: 'DELETE',
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + getToken()
            },
        })
    }
    catch (e) {
        console.log(e)
    }
    let status = res.status
    return { status, body: await res.json()  }
}
async function modifyStaff(id, data) {
    try {
        let res = await fetch(url + staffUrl + '/' + id, {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify(data)
        })
        if (res.status === 200) {
            res = await res.json()
            return res
        }
        else {
            return []
        }
    }
    catch (e) {
        console.log(e)
    }
}
async function modifyItem(id, data) {
    let res
    try {
        res = await fetch(url + itemsUrl + '/' + id, {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify(data)
        })
    }
    catch (e) {
        console.log(e)
    }
    const status = res.status
    return { status, body: await res.json() }
}

async function apiRegister(name, surname, username, password, address, city, zip, avatar) {
    let data = `{
              "name": "${name}",
              "surname": "${surname}",
              "username": "${username}",
              "password": "${password}",
              "avatar": "${avatar}",
              "address":
                {
                    "city": "${city}",
                    "zip": "${zip}",
                    "residence": "${address}"
                }
              }`;
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
    };
    try {
        let res = await fetch(CUSTOMER_REGISTER, requestOptions);
        let status = res.status;
        res = await res.json();
        if (status === 200) {
            setToken(res.accessToken);
        }
        return status;
    } catch (e) {
        console.log(e);
    }
    return 502;
}

async function getUser() {
    let token = getToken()
    try {
        let decoded = jwt.verify(token, await getPublicKey(), { algorithm: 'RS256' })
        return decoded._id
    }
    catch (err) {
        console.log(err)
        return null
    }
}


async function getAvailability(id, start, end, rent) {
    try {
        start = new Date(start)
        end = new Date(end)
        start = start.toISOString().split('T')[0]
        end = end.toISOString().split('T')[0]

        let res = await fetch(url + productsUrl + `/${id}/available?start=${start}&end=${end}${rent ? '&rent=' + rent : ''}`, {
            method: "GET",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + getToken()
            }
        })
        if (res.status === 200) {
            res = await res.json()
            return res
        }
        else {
            return false
        }
    }
    catch (err) {
        // console.log(err)
    }
}

async function createRent(customer, start, end, price, products, productType) {
    start = start.toISOString().split('T')[0]
    end = end.toISOString().split('T')[0]
    const data = {
        customer: customer,
        products: products,
        productType: productType,
        start: start,
        end: end,
        price: price
    }
    const res = await fetch(url + rentsUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + getToken()
        },
        body: JSON.stringify(data)
    })
    return res.status
}
