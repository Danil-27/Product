const popupButtons = document.querySelectorAll('[data-modal]')
const popupBg = document.querySelectorAll('.popup__bg')
const popupCloseButtons = document.querySelectorAll('.popup__close')

popupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault()
    let modal = e.currentTarget.dataset.modal
    document.getElementById(modal).classList.add('active')
    document.documentElement.classList.add('noscroll')
  })
})
function closePopup(id) {
   document.getElementById(id).classList.remove('active')
   document.documentElement.classList.remove('noscroll')
}
popupBg.forEach((bg) => {
   bg.addEventListener('click', (event) => {
       let id = event.target.closest('.popup').id
       closePopup(id)
   })
})
popupCloseButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    let id = event.target.closest('.popup').id
    closePopup(id)
  })
})

