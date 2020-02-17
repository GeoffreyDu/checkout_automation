const caisses = document.getElementById('button');
let cash;

let cashArea = []

function velocity() {
    cashArea = []

    for(i = 0; i < cash; i++){
        cashArea.push(
            {
            id: i+1,
            velocity:  Math.floor(Math.random()*50)+1
                
            }
        ) 
    }
    console.log(cashArea);
    
}
button.addEventListener('click', () => {
    cash = document.getElementById('cash_input').value;
    velocity();
})