const main  = document.querySelector("main");
const cards = main.querySelector(".cards--");
const title = main.querySelector(".title-- h1");

var titleText = "Animation"; 

for (let i = 0; titleText.length > i; i++){
    var span = document.createElement("span");
    span.textContent = titleText[i];
    title.appendChild(span);
}

const titleAnime = () => {
    var letters = title.querySelectorAll("span");

    title.style.animation = "none"; 

    for (let i = 0; i < letters.length; i++){
        setTimeout(() => { letters[i].style.opacity = 0;}, i * 250  );
    }
}

setTimeout(() => { titleAnime(); }, 10000);



const addCards = () => {

    let x = 50;
    let y = 50;

    for(let i = 0; i <= x; i++){ 
        for(let j = 0; j <= y; j++){ createCard(i*2, j*2) }
    }

}

const createCard = (x,y) => {

    var card = document.createElement("div");
    card.className  = `card` ;
    card.id         = `c_${x}_${y}` ;
    card.style.left = y + "%";
    card.style.top  = x + "%";

    cards.appendChild(card);
}

addCards();

const vectorTranslation = (t) => {

    let translation = (t - 1) * 2;
    let movements   = t;

    var coordinates = []

    let x = 0;
    let y = translation;

    while (movements > 0 ){
        if (x == y || movements == t){ 
            coordinates.push({"axis": translation, "x": x, "y": y});
        }else{
            coordinates.push({"axis": translation, "x": x, "y": y});
        }
        x += 2;
        y -= 2;
        movements--;
    }

    return coordinates;
}

 
const animationDownwards = (coordinates, delay) => {
    coordinates.forEach((coord, index) => {
        setTimeout(() => {
            let x = coord["x"];
            let y = coord["y"];
            var card = document.querySelector(`#c_${x}_${y}`);
            if (card) {
                card.style.display = "none";
            }
        }, delay + index * 100); // Ajusta el tiempo de retardo entre cartas en la misma diagonal
    });
}

const animateDiagonals = () => {
    let maxDimension = 100; 
    for (let t = 1; t <= maxDimension; t++) {
        let coordinates = vectorTranslation(t);
        animationDownwards(coordinates, t * 100);
    }
}

setTimeout(() => {  
    animateDiagonals(); 
},"10000")