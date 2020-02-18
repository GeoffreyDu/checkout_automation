const form = document.getElementById('form')

let clients;
let cash;

let cashArea = []
let articleArea = []

function numberOfArticles() {
    articleArea = [];
    
    for(i = 0; i < clients; i++){
        articleArea.push( 
            {
                articles: Math.floor(Math.random()*50)+1
            }
        )
    }
    return articleArea  
}

function velocity() {
    cashArea = []

    for(i = 0; i < cash; i++){
        cashArea.push(
            {
                velocity:  Math.floor(Math.random()*50)+1   
            }
        ) 
    }
    return cashArea
}

form.addEventListener('submit', (e) => {
    clients = document.getElementById('client_input').value;
    cash = document.getElementById('cash_input').value;
    const velocities = velocity();
    const articles = numberOfArticles();
    const response = {
        checkoutDtos: velocities,
        clientDtos: articles
    }
    const json_response = JSON.stringify(response);
    console.log(json_response);
    
    axios.post({
        url: 'url',
        data: json_response,
        headers:{"Content-Type":"application/json"}
    })
    .then(function (reponse) {
        //On traite la suite une fois la réponse obtenue 
        console.log(reponse);
    })
    .catch(function (erreur) {
        //On traite ici les erreurs éventuellement survenues
        console.log(erreur);
    });   
    e.preventDefault();
})

