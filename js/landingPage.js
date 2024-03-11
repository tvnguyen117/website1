toggle = document.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElemetById('modal')


toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})
