
let articleArea = []

function numberOfArticles() {
    for(i = 0; i < clients; i++){
        articleArea.push( {
            id: i + 1,
            article: Math.floor(Math.random()*50)+1
        })
    }
    console.log(articleArea);  
}
