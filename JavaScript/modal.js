// // const { TRUE } = require("sass");

// const modalLinks = document.querySelectorAll(".modal-links");
// const htmlModal = document.querySelector(".html__noscroll");
// const lockPadding = document.querySelectorAll(".lock-padding")

// let unlock = true; //Для того чтобы небыло  двойных нажайтий 

// const timeout = 800 // Связан с transition .8s  , для того чтобы скролл адекватно изчезал 

// if (modalLinks.length > 0) { //Проверка
//    for (let index = 0; index < modalLinks.length; index++) {
//       const modalLink = modalLinks[index];
//       modalLink.addEventListener('click' , (e) => { // событие клик
//          const modalName = modalLink.getAttribute('href').replace('#' , '') //Убираем решетку 
//          const corentModal = document.getElementById(modalName); // Получаем modal
//          modelOpen(corentModel);
//          e.preventDefault();
//       });
//    }
// };
// //Закрывает 
// const modalCloseIcon = document.querySelectorAll('.modal-close');
// if (modalCloseIcon.length > 0) {                                  // Проыерка обЪектов
//    for (let index = 0; index < modalCloseIcon.length; index++) {  // Проыерка обЪектов
//       const el = modalCloseIcon[index];
//       el.addEventListener('click' , (e) => {
//          modelClose(el.closest('.modal')); // ближайший родитель с классом modal
//          e.preventDefault();
//       });
//    }
// }

// function modalOpen(corentModal) {
//    if (corentModal && unlock) {
//       const modalActive = document.querySelector('.modal.open');
//       if (modalActive) {
//          modalClose(modalActive , false);
//       } else {
//             bodyLock();   
//       }
//       corentModal.classList.add('open');
//       corentModal.addEventListener('click' , (e) => {
//          if (!e.target,closest('.modal__content')) {
//             modalClose(e.target.closest('.modal'));
//          }
//       });
//    }
// }


// // function modalClose(modalActive, doUnlock = true) {
// //    if (unlock) {
// //    }
// // }

// function bodyLock() {
//    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

//    if (lockPadding.length > 0) {
//    for (let index = 0; index < lockPadding.length; index++) {
//       const el = lockPadding[index];
//       el.style.paddingRight = lockPaddingValue
//       }
//    }
//    body.style.paddingRight = lockPaddingValue
//    body.classList.add('lock');

//    unlock = false;
//    setTimeout(function(){
//       unlock = true;
//    }, timeout );
// }


//    function bodyUnLock() {
//       setTimeout(function() {
//          if (lockPadding.length > 0) {
//          for (let index = 0; index < lockPadding.length; index++) {
//             const el = lockPadding[index];
//             el.style.paddingRight = '0px';
//             }
//          }
//          body.style.paddingRight = '0px'
//          body.classList.remove('lock');
//       }, timeout);

//       unlock = false;
//       setTimeout(function(){
//          unlock = true;
//       }, timeout);
//    }
//    // Полифилы
//    if (!Element.prototype.matches) {
//       Element.prototype.matches = Element.prototype.msMatchesSelector || 
//                                   Element.prototype.webkitMatchesSelector;
//     }
    
//     if (!Element.prototype.closest) {
//       Element.prototype.closest = function(s) {
//         var el = this;
    
//         do {
//           if (Element.prototype.matches.call(el, s)) return el;
//           el = el.parentElement || el.parentNode;
//         } while (el !== null && el.nodeType === 1);
//         return null;
//       };
//     }