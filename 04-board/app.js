const board = document.querySelector( '#board' )
const colors = [ '#ec5a39', '#017e8b', '#eb5f84', '#fa0038',
    '#2400F9', '#209cff', '#d72301', '#84fab0' ]
const SQUARES_NUMBER = 400 // Board 20x20

for ( let i = 0; i < SQUARES_NUMBER; i++ ) {
    const square = document.createElement( 'div' )
    square.classList.add( 'square' )

    square.addEventListener( 'mouseover', () => {
        setColor( square )
    } )

    square.addEventListener( 'mouseleave', () => {
        removeColor( square )
    } )

    board.append( square )
}

function setColor( element ) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${ color }, 0 0 7px ${ color }`
}

function removeColor( element ) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor( Math.random() * colors.length )
    return colors[ index ]
}
