const slides = document.querySelectorAll('.slide')
window.addEventListener('load', () => {
    // Как только страница загрузилась, делаем рандомную карточку активной
    let randomIndex = Math.round(Math.random() * (slides.length - 1))

    // Но мне нравится больше всего слайд с железным человеком, так что активным делаем его =)
    randomIndex = 3
    setTimeout(() => slides[randomIndex].classList.add('active'), 500)
})

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
})

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
