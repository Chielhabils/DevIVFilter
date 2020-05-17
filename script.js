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
        data => makeCategories(data.items)
        )

function makeCategories(data){
    for (voorstelling in data){
        
    }
    console.log(data)

}