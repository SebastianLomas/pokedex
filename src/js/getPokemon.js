const searchBar = document.getElementById('search-bar')
const imgPokemon = document.getElementById('img-pokemon')
const ENTER = 13

insertPokemon(1)

/* Whem the users press ENTER, this event calls insertPokemon() and the paramete
    comes from the input bar
*/

//$searchContainer is from change-screen.js
searchBar.addEventListener('keypress',key =>{
    if(key.keyCode === ENTER) {
        insertPokemon(searchBar.value)
        $searchContainer.classList.remove('appear-animation')
        $searchContainer.classList.add('close-animation')
        setTimeout(()=>{
            $searchContainer.style.display = "none"
        },500)
    }
})

async function searchPokemon(id) {
    let pokeId = `${id}`;
    pokeId = pokeId.toLowerCase()
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
    let pokemon = await data.json()
    return pokemon
}

async function insertPokemon(id) {
    let pokeInfo = await searchPokemon(id)
    let img = document.createElement('img')
    img.src = pokeInfo.sprites.front_default
    imgPokemon.innerHTML = ''
    imgPokemon.appendChild(img)
}
