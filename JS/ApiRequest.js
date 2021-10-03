//POST request

// GET method route

app.get('site202118.tw.cs.unibo.it/api', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('site202118.tw.cs.unibo.it/api', function (req, res) {
  res.send('POST request to the homepage');
});

var option = {
  headers: {
    'Content-Type': 'application/json'
  },
  method = 'POST',
  body: //data;
  };
fetch('/api', options);


//fetch request example GET
fetch('https://site202118.tw.cs.unibo.it/api/customers', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => {
    return res.json()
  })
  .then(data => console.log(data))
  .catch(errore => console - log('ERROR'))

//fetch request example POST
fetch('https://site202118.tw.cs.unibo.it/api/customers', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  //data is the name of the file jsonstingyfied in the html pages
  body: data
})
  .then(res => {
    //response from the server
    return res.json()
  })
  .then(data => console.log(data))
  //this error happen when the fetch goes wrong, not when the API goes wrong
  .catch(errore => console - log('ERROR'))
//to reset the form
document.getElementById("createUserForm").reset()


//DELETE staff
fetch('https://site202118.tw.cs.unibo.it/api/staff/{ID}', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  },
})
  .then(res => {
    return res.json()
  })
  .then(data => console.log(data))
  .catch(errore => console - log('ERROR'))

//CREATE staff

fetch('https://site202118.tw.cs.unibo.it/api/staff', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: data,
})
  .then(res => {
    return res.json()
  })
  .then(data => console.log(data))
  .catch(errore => console - log('ERROR'))

//CREATE category

fetch('https://site202118.tw.cs.unibo.it/api/products', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: data,
})
  .then(res => {
    return res.json()
  })
  .then(data => console.log(data))
  .catch(errore => console - log('ERROR'))

//GET all staff member

fetch('https://site202118.tw.cs.unibo.it/api/staff', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
})
  .then(res => {
    return res.json()
  })
  .then(data => console.log(data))
  .catch(errore => console - log('ERROR'))

//Login staff

  fetch('https://site202118.tw.cs.unibo.it/api//auth/login/staff', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: data,
})
  .then(res => {
    return res.json()
  })
  .then(data => console.log(data))
  .catch(errore => console - log('ERROR'))

  //GET public key

  fetch('https://site202118.tw.cs.unibo.it/api/auth/publicKey', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
})
  .then(res => {
    return res.json()
  })
  .then(data => console.log(data))
  .catch(errore => console - log('ERROR'))

  //dati per loggare

  var data = JSON.stringify({ username: "Gled", password: "prova1" }, null, '\t');

  //controllo via server con il token

  https://site202118.tw.cs.unibo.it/api/auth/staff/authenticated

  //TODO potrebbe essere che nel rental abbiamo solo la categoria e non anche l'item

//TODO Card prototype for users
//TODO password reset
  '<div class="card" style="width: 18rem;">
    <div class ="card-body">
    <h5 class ="card-title">Username: ' + data[i].username + '</h5>
    <h6>City: ' + data[i].address.city + '</h6>
    <h6>Address: ' + data[i].address.residence + '</h6>
    <h6>Zip: ' + data[i].address.zip + '</h6>
    <h6>Comment: </h6>
    </div>
  </div>'