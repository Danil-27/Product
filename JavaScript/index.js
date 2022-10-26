const btn = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const html = document.querySelector('#noscroll');
const links = menu.querySelectorAll('.menu__link');
const icon = document.querySelector('.icon');
const menuBody = document.querySelector('.menu__body')

let width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;


function debounce(originalFn, timeoutMs) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout); // clear timeout every time the function is called
    timeout = setTimeout(() => originalFn(...args), timeoutMs); // call the original function once "timeoutMs" ms after the last call have elapsed
  };
}

function handlerResize() {
  width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
}

window.addEventListener("resize", debounce(handlerResize, 500)); 

window.addEventListener("click", () => {
   if ( width > 992) {
      html.classList.remove("noscroll");  
   } else {
      html.classList.add("noscroll");  
   }
});

// if (width < 992) {
//    menu.classList.remove("active");        
//    btn.classList.remove("active");       
//    html.classList.remove("noscroll");     
//    icon.classList.remove("active");        
// }

// window.onresize = function(){
//    if (width > 992) {
//       html.classList.remove("noscroll");  
//    }
// }

btn.addEventListener("click", () => {     // Если мы нажимаем на burger
  menu.classList.toggle("active");        // После нажития переопределяет класс
  btn.classList.toggle("active");         // После нажития переопределяет класс
  html.classList.toggle("noscroll");      // После нажития переопределяет класс
  icon.classList.toggle("active");        // После нажития переопределяет класс
});

// Клик на пустую область 
menu.addEventListener("click", (e) => {         
   if (width < 992 && e.target.classList.contains("menu")) {   // contains() Этот метод при проверке наличия класса в списке возвращает булевы true или false .
      menu.classList.remove("active");          // Если True , то Закрываем класс  
      btn.classList.toggle("active");           // Если True , то переопределяет класс
      html.classList.toggle("noscroll");        // Если True , то переопределяет класс
      icon.classList.toggle("active");          // Если True , то переопределяет класс
      // menuBody.classList.
   }
});

//==================================================================================