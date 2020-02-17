let numberOfClient;

function getNumberOfClient() {
    numberOfClient = document.getElementById("client_number").value;
    console.log(numberOfClient);
}


document.getElementById("button").addEventListener("click", () => {
    getNumberOfClient();
    console.log("ok");
})

