let jsondata

fetch('entries.json')
    .then(
        res => res.json()
    )
    .then(
        data => jsondata = data,
        )
    .then(
        //() => console.log(jsondata)
        data => makeCards(data.items)
        )

function makeCards(data){
    for (let voorstelling of data){
        // if(data[voorstelling].category == "volwassenen"){
        //     console.log("volwassenen")
        // }else if(data[voorstelling].category == "familie"){
        //     console.log("familie")
        // }
        let voorstellingCard = document.createElement("div");
        let cardImgWrapper = document.createElement("div");
        let cardContent = document.createElement("div");
        let cardImgOverlay = document.createElement("div");
        let cardGenre = document.createElement("div");
        let cardExcerpt = document.createElement("div");
        let cardTitle = document.createElement("H3");
        let cardImg = document.createElement("img");



        voorstellingCard.className = "card";
        cardImgWrapper.className = "cardImgWrapper";
        cardContent.className = "cardContent";
        cardImg.className = "cardImg";
        cardImgOverlay.className = "cardImgOverlay";
        cardGenre.className = "cardGenre";
        cardExcerpt.className = "cardExcerpt";

        cardTitle.innerHTML = voorstelling.name;
        cardImg.src = voorstelling.thumbnail.url;
        cardGenre.innerHTML = voorstelling['genre-v2'];
        cardExcerpt.innerHTML = voorstelling.excerpt;

        cardImgOverlay.appendChild(cardGenre);
        cardContent.appendChild(cardTitle);
        cardImgWrapper.appendChild(cardImg);
        cardImgWrapper.appendChild(cardImgOverlay);
        cardContent.appendChild(cardExcerpt);

        voorstellingCard.appendChild(cardImgWrapper);
        voorstellingCard.appendChild(cardContent);


		document.getElementById("results").appendChild(voorstellingCard);
    }

}