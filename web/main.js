let numberOfClient;
let numberOfCheckout;
let data = {
    checkoutDtos: [],
    clientDtos: []
}

function getNumberOfClient() {
    numberOfClient = document.getElementById("client_number").value;
    console.log(numberOfClient);
}

function getNumberOfCheckout() {
    numberOfCheckout = document.getElementById("checkout_number").value;
    console.log(numberOfCheckout);
}


document.getElementById("button").addEventListener("click", (event) => {
    event.preventDefault();
    getNumberOfClient();
    getNumberOfCheckout();
    numberOfArticles();
    randomVelocity();
    console.log(data);
    sendData();

})



function numberOfArticles() {
    for (i = 0; i < numberOfClient; i++) {
        data.clientDtos.push({

            numberOfItems: Math.floor(Math.random() * 50) + 1
        })
    }
}

function randomVelocity() {
    for (i = 0; i < numberOfCheckout; i++) {
        data.checkoutDtos.push({

            velocity: Math.floor(Math.random() * 50) + 1
        })
    }
}


function sendData() {
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:1212/store/automation';
    Http.open("POST", url);

    Http.setRequestHeader('Content-type', 'application/json');

    Http.onreadystatechange = function () { //Call a function when the state changes.
        if (Http.readyState == 4 && Http.status == 200) {
            alert(Http.responseText);
        }
    }
    Http.send(JSON.stringify(data));
}