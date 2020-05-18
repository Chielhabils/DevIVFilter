let jsondata;
let doelgroepen = [];
let genres = [];

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
        if(!doelgroepen.includes(voorstelling.category)){
            doelgroepen.push(voorstelling.category)
            let doelgroepBtn = document.createElement("button");
            doelgroepBtn.className = "categoryBtn";
            doelgroepBtn.innerHTML = voorstelling.category;
            document.getElementById("doelgroepbtns").appendChild(doelgroepBtn);
        }

        if(!genres.includes(voorstelling['genre-v2'])){
            genres.push(voorstelling['genre-v2'])
            let genreBtn = document.createElement("button");
            genreBtn.className = "genreBtn";
            genreBtn.innerHTML = voorstelling['genre-v2'];
            document.getElementById("genrebtns").appendChild(genreBtn);
        }

        let voorstellingCard = document.createElement("div");
        let cardCategory = document.createElement("div");
        let cardImgWrapper = document.createElement("div");
        let cardContent = document.createElement("div");
        let cardImgOverlay = document.createElement("div");
        let cardGenre = document.createElement("div");
        let cardExcerpt = document.createElement("div");
        let cardTitle = document.createElement("H3");
        let cardImg = document.createElement("img");
        let cardRecorded = document.createElement("div");

        voorstellingCard.className = "card";
        cardImgWrapper.className = "cardImgWrapper";
        cardContent.className = "cardContent";
        cardImg.className = "cardImg";
        cardImgOverlay.className = "cardImgOverlay";
        cardGenre.className = "cardGenre";
        cardExcerpt.className = "cardExcerpt";
        cardRecorded.className = "cardExcerpt";
        cardCategory.className = "cardCategory"

        cardTitle.innerHTML = voorstelling.name;
        cardCategory.innerHTML = voorstelling.category;
        cardImg.src = voorstelling.thumbnail.url;
        cardGenre.innerHTML = voorstelling['genre-v2'];
        cardExcerpt.innerHTML = voorstelling.excerpt;
        cardRecorded.innerHTML = voorstelling['recorded-at'];

        cardImgOverlay.appendChild(cardGenre);
        cardContent.appendChild(cardTitle);
        cardImgWrapper.appendChild(cardImg);
        cardImgWrapper.appendChild(cardImgOverlay);
        cardContent.appendChild(cardExcerpt);
        cardContent.appendChild(cardCategory);
        if(voorstelling['recorded-at'] != undefined){
            cardContent.appendChild(cardRecorded);
        }
    
        voorstellingCard.appendChild(cardImgWrapper);
        voorstellingCard.appendChild(cardContent);

		document.getElementById("results").appendChild(voorstellingCard);
    }

    document.addEventListener("click", function(e){
        let element = e.target

        if (element.classList.contains('categoryBtn')){
         if(element.classList.contains('active')){
            element.classList.remove("active");
            }else if(!element.classList.contains('active')){
            element.classList.add("active");
            }
        }
        if(element.classList.contains('genreBtn')){
            if(element.classList.contains('active')){
                element.classList.remove("active");
                }else if(!element.classList.contains('active')){
                element.classList.add("active");
         }
        }

         var activeFilters = document.getElementsByClassName("active");
         var activeCategories = [];
         var activeGenres = [];
         for(let name of activeFilters){
             if(name.classList.contains('categoryBtn')){
                activeCategories.push(name.innerHTML);
             }
             if(name.classList.contains('genreBtn')){
                activeGenres.push(name.innerHTML);
             }
             
         }

         var allCards = document.getElementsByClassName("card");
         for(let thisCard of allCards){

             var imgWrapper = thisCard.childNodes[0];
             var imgOverlay = imgWrapper.childNodes[1];
             var genre = imgOverlay.childNodes[0];
             var genreText = genre.innerHTML;

             var cardContent = thisCard.childNodes[1];
             var category = cardContent.childNodes[2];
             var categoryText = category.innerHTML;
             
             if(activeCategories.length > 0 && activeGenres.length == 0 ){
                if(activeCategories.includes(categoryText)){
                    thisCard.style.display = 'block';
                }else{
                    thisCard.style.display = 'none';
                }
             }else if(activeCategories.length > 0 && activeGenres.length > 0){
                 if(activeCategories.includes(categoryText) && activeGenres.includes(genreText)){
                    thisCard.style.display = 'block';
                 }else{
                    thisCard.style.display = 'none';
                 }
             }else if(activeCategories.length == 0 && activeGenres.length > 0){
                 if(activeGenres.includes(genreText)){
                    thisCard.style.display = 'block';
                 }else{
                    thisCard.style.display = 'none';
                 }
             }else if(activeCategories.length == 0 && activeGenres.length == 0){
                thisCard.style.display = 'block';
             }
            }
         })

    const input = document.querySelector('input');
    input.addEventListener('input', updateSearch);

    function updateSearch(e) {

    }


}