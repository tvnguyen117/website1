loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')

load = 0

blurring()
blurring()
blurring()


function blurring() {
    load = load + 1
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1
    bg.style.filter = "blur(10px)"
}
