# Functional analysis of existing app
    De bestaande website toont opnames van voorstellingen. Deze worden uit een database gehaald en opgebouwd in de vorm van cards. 

    Er zijn twee mogelijkheden aanwezig om te filteren door deze cards. 
    De eerste die we zien is een searchbar. Wanneer we hierin typen komen kleine versies van de cards tevoorschijn. De searchbar geeft cards met titels weer gebaseerd op de input. 
    De tweede mogelijkheid is een reeks van filterknoppen. Deze zijn onderverdeeld in doelgroepen (Volwassenen, familie) en genres (Theater, dans, ...). Wanneer we 1 knop aanklikken worden alleen de cards die daarmee overeenkomen getoond. We kunnen ook meerdere knoppen tegelijk aanklikken. Daarbij worden alle cards die minstens met 1 knop overeenkomen getoond. 

# Planning of own app
    Eerst ga ik alle data ophalen van de json file. Deze data wordt
    dan gebruikt om met een for-loop alle cards aan te maken. De cards die we zien bij de searchbar ga ik niet meteen tonen, die bij de filter knoppen wel.

    Dan wil ik alle filter knoppen aanmaken op basis van de json data. Zo ben ik zeker dat als er nieuwe categorieen of genres zijn, deze ook te zien zijn op de website.

    Daarna ga ik een event listener maken die checkt wanneer een filter knop aangeklikt wordt. Wanneer dat gebeurt, haal ik alle bestaande cards op, itereer ik daardoor en check of ze voldoen aan de voorwaarden van de filter knoppen. Als dit zo is worden ze getoond, anders niet. 

    Wanneer dit allemaal werkt, ga ik de searchbar implementeren. Daar voeg ik een event listener aan toe die checkt of er in getypt wordt. Wanneer dat zo is, toon ik bij elke getypte letter alle cards wiens titels overeenkomen met de query in de searchbar input. 

# Test functions
    Het lukte me niet om Jest te laten werken met mijn index.js bestand. Om te bewijzen dat ik wel volledig begrijp hoe test-functions/Jest werkt, heb ik twee aparte files gemaakt (addArtist, countArtists) die wel wekrne met Jest. Bij het uitvoeren van "npm test" slagen beide functies voor de test.
    
 
