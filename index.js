const main = document.querySelector("main");

const addCardVector = (i) => {

   let coordinate = i - 1;
   let movements = coordinate;

   if (coordinate > 0){ while (movements > 0){        

        let x = movements;
        let y = movements;

        if (movements == coordinate){  createCard(coordinate, coordinate); }

        createCard(( x - 1 ),coordinate);
        createCard(coordinate,( y - 1 ));
        
        movements--;
    }}
    else{
        createCard(coordinate,coordinate)
    }
}

const createCard = (x,y) => {

    var card = document.createElement("div");
    card.className  = `card ${x}-${y}` ;
    card.style.left = y + "%";
    card.style.top  = x + "%";

    main.appendChild(card);  
    
}



for(let i = 1; 10 >= i; i++){
    addCardVector(i)
} 


