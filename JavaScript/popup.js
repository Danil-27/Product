let closePopupButton = document.querySelector('.close-popup-1');
let popupBg = document.querySelector('.popup__bg-1');
let popup = document.querySelector('.popup-1');
let openPopupButtons = document.querySelectorAll('.open-popup-1');

openPopupButtons.forEach((button) => {
   button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
        html__noscroll.classList.add('noscroll')
      })
   });
   
   closePopupButton.addEventListener('click',() => {
      popupBg.classList.remove('active');
      popup.classList.remove('active');
      html__noscroll.classList.remove('noscroll')
   });
   
   document.addEventListener('click', (e) => {
      if(e.target === popupBg) {
         popupBg.classList.remove('active');
         popup.classList.remove('active');
         html__noscroll.classList.remove('noscroll')
      }
   });

// Второй pupop

let closePopupButton2 = document.querySelector('.close-popup-2');
let popupBg2 = document.querySelector('.popup__bg-2');
let popup2 = document.querySelector('.popup-2');
let openPopupButtons2 = document.querySelectorAll('.open-popup-2');

openPopupButtons2.forEach((button) => {
   button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg2.classList.add('active');
        popup2.classList.add('active');
        html__noscroll.classList.add('noscroll')
      })
   });
   
   closePopupButton2.addEventListener('click',() => {
      popupBg2.classList.remove('active');
      popup2.classList.remove('active');
      html__noscroll.classList.remove('noscroll')
   });
   
   document.addEventListener('click', (e) => {
      if(e.target === popupBg2) {
         popupBg2.classList.remove('active');
         popup2.classList.remove('active');
         html__noscroll.classList.remove('noscroll')
      }
   });
