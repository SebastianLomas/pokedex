/* This code is used when the user click on magnifying glass in order to show the search screen */
const $searchIcon = document.getElementById('search-icon')
const $searchContainer = document.getElementById('search')
const $searchClose = document.getElementById('close-search')//Thie X to close this screen

$searchIcon.addEventListener('click',()=>{
    $searchContainer.style.display = "block"
    $searchContainer.classList.remove('close-animation')
    $searchContainer.classList.add('appear-animation')
})

$searchClose.addEventListener('click',()=>{
    $searchContainer.classList.remove('appear-animation')
    $searchContainer.classList.add('close-animation')
    setTimeout(()=>{
        $searchContainer.style.display = "none"
    },500)
})

/* This code is used when the screen is bigger than 415px */
const $body = document.getElementById('body')
const overTheWidth = window.matchMedia(`screen and (min-width: 415px)`)
const idealWidth = window.matchMedia('screen and (max-width: 414px)')
let img = document.createElement('img')
let errorTag = document.createElement('p')
let errorText = `sorry, but this app is just for phones. <br />Be sure you are using a phone or the width is less than 415px.`

overTheWidth.addListener(setImageForBiggerScreen)
idealWidth.addListener(widthIsIdeal)

function setImageForBiggerScreen(event) {
    if(event.matches) {
        img.src = 'https://i.imgur.com/jze3kIL.gif'
        img.style.marginBottom = '1em'
        errorTag.innerHTML = errorText
        errorTag.style.textAlign = 'center'
        $body.appendChild(img)
        $body.appendChild(errorTag)
    }
}

function widthIsIdeal(event) {
    if(event.matches) {
        $body.removeChild(img)
        $body.removeChild(errorTag)
    }
}

setImageForBiggerScreen(overTheWidth)