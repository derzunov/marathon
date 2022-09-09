const upButton = document.querySelector( '.up-button' )
const downButton = document.querySelector( '.down-button' )

const sidebar = document.querySelector( '.sidebar' )
const container = document.querySelector( '.container' )

const mainSlide = document.querySelector( '.main-slide' )
const slidesCount = mainSlide.querySelectorAll( 'div' ).length
let activeSlideIndex = 0

// Для того чтобы сайдбар при перелистывании
// двигался в противоположном движению кртинок направлении
// совпадающие по цвету с цветом картинк блоки sidebar расположены в обратном порядке
sidebar.style.top = `-${ (slidesCount - 1) * 100 }vh` // выставляем исходное положение

upButton.addEventListener( 'click', () => {
    changeSlide( 'up' )
})

downButton.addEventListener( 'click', () => {
    changeSlide( 'down' )
})

window.addEventListener( 'keydown', ( event ) => {
    switch ( event.key ) {
        case 'ArrowDown': {
            return changeSlide( 'down' )
        }
        case 'ArrowUp': {
            return changeSlide( 'up' )
        }
    }
})

function changeSlide( direction ) {
    const height = container.clientHeight

    if ( direction === 'down' ) {
        activeSlideIndex++
        if ( activeSlideIndex === slidesCount ) {
            activeSlideIndex = 0
        }
    } else if ( direction === 'up' ) {
        activeSlideIndex--
        if ( activeSlideIndex < 0 ) {
            activeSlideIndex = slidesCount - 1
        }
    }

    mainSlide.style.transform = `translateY(-${ activeSlideIndex * height }px)`
    sidebar.style.transform = `translateY(${ activeSlideIndex * height }px)`
}
