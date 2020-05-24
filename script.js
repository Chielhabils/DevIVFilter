
//Fetching data
fetch('entries.json')
    .then(
        res => res.json()
    )
    .then(
        data => makeCards(data.items)
        )

//Making all the cards
function makeCards(data){

    let doelgroepen = [];
    let genres = [];
    //loop to make every object in json file into a card
    for (let voorstelling of data){
        
        //creating Category buttons
        if(!doelgroepen.includes(voorstelling.category)){
            doelgroepen = [...doelgroepen, voorstelling.category];   
            let doelgroepBtn = document.createElement("button");
            doelgroepBtn.className = "categoryBtn";
            doelgroepBtn.innerHTML = voorstelling.category;
            document.getElementById("doelgroepbtns").appendChild(doelgroepBtn);
        }

        //creating Genre Buttons
        if(!genres.includes(voorstelling['genre-v2'])){
            genres = [...genres, voorstelling['genre-v2']];   
            let genreBtn = document.createElement("button");
            genreBtn.className = "genreBtn";
            genreBtn.innerHTML = voorstelling['genre-v2'];
            document.getElementById("genrebtns").appendChild(genreBtn);
        }

        //creating all elements for a standard card
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

        //creating all elements for a searchbar card
        let horizontalCard = document.createElement("div");
        let horizontalWrapper = document.createElement("div");
        let horizontalTitle = document.createElement("H3");
        let horizontalContent = document.createElement("div");
        let horizontalExcerpt = document.createElement("div");
        let horizontalImg = document.createElement("img");
        let horizontalRecorded = document.createElement("div");
        let horizontalImgOverlay = document.createElement("div");

        //adding classes to all the elements of the standard card
        voorstellingCard.className = "card";
        cardImgWrapper.className = "cardImgWrapper";
        cardContent.className = "cardContent";
        cardImg.className = "cardImg";
        cardImgOverlay.className = "cardImgOverlay";
        cardGenre.className = "cardGenre";
        cardExcerpt.className = "cardExcerpt";
        cardRecorded.className = "cardExcerpt";
        cardCategory.className = "cardCategory";

        //adding classes to all the elements of the searchbar card
        horizontalCard.className = "horizontalCard";
        horizontalWrapper.className = "horizontalWrapper";
        horizontalContent.className = "horizontalContent";
        horizontalImg.className = "horizontalImg";
        horizontalExcerpt.className = "horizontalExcerpt";
        horizontalRecorded.className = "horizontalRecorded";
        horizontalImgOverlay.className = "horizontalImgOverlay";

        //adding data from the json object to the standard card elements
        cardTitle.innerHTML = voorstelling.name;
        cardCategory.innerHTML = voorstelling.category;
        cardImg.src = voorstelling.thumbnail.url;
        cardGenre.innerHTML = voorstelling['genre-v2'];
        cardExcerpt.innerHTML = voorstelling.excerpt;
        cardRecorded.innerHTML = voorstelling['recorded-at'];

        //adding data from the json object to the searchbar card elements
        horizontalTitle.innerHTML = voorstelling.name;
        horizontalImg.src = voorstelling.thumbnail.url;
        horizontalExcerpt.innerHTML = voorstelling.excerpt;
        horizontalRecorded.innerHTML = voorstelling['recorded-at'];

        //Appending all the elements to the searchbar card to build it
        horizontalContent.appendChild(horizontalTitle);
        horizontalContent.appendChild(horizontalExcerpt);
        if(voorstelling['recorded-at'] != undefined){
            horizontalContent.appendChild(horizontalRecorded);
        }
        horizontalWrapper.appendChild(horizontalImg);
        horizontalWrapper.appendChild(horizontalImgOverlay);
        horizontalCard.appendChild(horizontalWrapper);
        horizontalCard.appendChild(horizontalContent);
        horizontalCard.style.display = 'none';


        //Appending all the elements to the standard card to build it
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

        //adding the two cards to the webpage
        document.getElementById("results").appendChild(voorstellingCard);
        document.getElementById("searchresults").appendChild(horizontalCard);
    }

    //Event listener to check if filter buttons are clicked
    document.addEventListener("click", function(e){
        let element = e.target

        //on and off switching of buttons and changing active state
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

        //checking which buttons have been activated
         var activeCategories = document.getElementsByClassName("active categoryBtn");
         var activeGenres = document.getElementsByClassName("active genreBtn");

         var activeCategoryNames = [];
         var activeGenreNames = [];

          for(let name of activeCategories){
            activeCategoryNames = [...activeCategoryNames, name.innerHTML];   
          }
          
          for(let name of activeGenres){
            activeGenreNames = [...activeGenreNames, name.innerHTML];   
          }

         //getting all standard cards to check their data
         var allCards = document.getElementsByClassName("card");
         for(let thisCard of allCards){

            //getting genre from card to compare later
             var imgWrapper = thisCard.childNodes[0];
             var imgOverlay = imgWrapper.childNodes[1];
             var genre = imgOverlay.childNodes[0];
             var genreText = genre.innerHTML;

             //getting category from card to compare later
             var cardContent = thisCard.childNodes[1];
             var category = cardContent.childNodes[2];
             var categoryText = category.innerHTML;
             
             //Comparing genre/category of card to activated buttons and showing the ones that match
             if(activeCategoryNames.length > 0 && activeGenreNames.length == 0 ){
                if(activeCategoryNames.includes(categoryText)){
                    thisCard.style.display = 'block';
                }else{
                    thisCard.style.display = 'none';
                }
             }else if(activeCategoryNames.length > 0 && activeGenreNames.length > 0){
                 if(activeCategoryNames.includes(categoryText) && activeGenreNames.includes(genreText)){
                    thisCard.style.display = 'block';
                 }else{
                    thisCard.style.display = 'none';
                 }
             }else if(activeCategoryNames.length == 0 && activeGenreNames.length > 0){
                 if(activeGenreNames.includes(genreText)){
                    thisCard.style.display = 'block';
                 }else{
                    thisCard.style.display = 'none';
                 }
             }else if(activeCategoryNames.length == 0 && activeGenreNames.length == 0){
                thisCard.style.display = 'block';
             }
            }
         })

    //getting the searchbar and adding event listener on typing
    const input = document.querySelector('input');  
    input.addEventListener('input', updateValue);
    
    //function to show cards when typing in searchbar
    function updateValue() {

        //getting the input from searchbar
        let currentInput = document.getElementById('searchInput').value;

        //getting all searchbar cards
        var allHorizontalCards = document.getElementsByClassName("horizontalCard");

        //loop to compare all searchbar cards to input value
        for(let thisCard of allHorizontalCards){

            //getting title from card
            var cardContent = thisCard.childNodes[1];
            var title = cardContent.childNodes[0];
            var titleText = title.innerHTML;

            //lowercasing both title and input to make searchbar case insensitive (like the real website)
            var titleLowercase = titleText.toLowerCase();
            var currentInputLowercase = currentInput.toLowerCase();

            //comparing card title to input and showing the ones that match
            if(titleLowercase.includes(currentInputLowercase) && currentInput.length > 0){
               thisCard.style.display = 'flex';
            }else{
                thisCard.style.display = 'none';
            }
           }
    }
}