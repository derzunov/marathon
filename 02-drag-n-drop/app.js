const item = document.querySelector( '.item' )
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener( 'dragstart', dragstart )
item.addEventListener( 'dragend', dragend )

placeholders.forEach( ( placeholder ) => {
    placeholder.addEventListener( 'dragover', dragover )
    placeholder.addEventListener( 'dragenter', dragenter )
    placeholder.addEventListener( 'dragleave', dragleave )
    placeholder.addEventListener( 'drop', dragdrop )
} )

function dragstart( event ) {
    event.target.classList.add( 'hold' )

    // Event loop trick for hiding just a column element
    setTimeout( () => {
        event.target.classList.add( 'hide' )
    }, 0 )
}

function dragend( event ) {
    event.target.classList.remove( 'hold', 'hide' )
}

function dragover( event ) {
    event.preventDefault()
}
function dragenter( event ) {
    event.target.classList.add( 'hovered' )
}
function dragleave( event ) {
    event.target.classList.remove( 'hovered' )
}
function dragdrop( event ) {
    // prevent default action (open as link for some elements)
    event.preventDefault()
    event.target.append( item )
    event.target.classList.remove( 'hovered' )
}
