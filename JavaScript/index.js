const btn = document.querySelector('.burger');
const nav = document.querySelector('.navbar');
const htmlEl = document.documentElement

let width = window.innerWidth || htmlEl.clientWidth || document.body.clientWidth


function debounce(originalFn, timeoutMs) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout); // clear timeout every time the function is called
    timeout = setTimeout(() => originalFn(...args), timeoutMs); // call the original function once "timeoutMs" ms after the last call have elapsed
  };
}

function handlerResize() {
  width = window.innerWidth || htmlEl.clientWidth || document.body.clientWidth
  if (nav.classList.contains('active')) {
    closeNav()
  }
}

window.addEventListener("resize", debounce(handlerResize, 500)); 

btn.addEventListener('click', (e) => {
  let btn = e.currentTarget 
  nav.classList.toggle('active')
  btn.classList.toggle('active')
  htmlEl.classList.toggle('noscroll')
})

if (width < 992) {
  nav.addEventListener('click', (e) => {
    if (!nav.children[0].contains(e.target)) {
      closeNav()
    }
  })    
}

function closeNav() {
  nav.classList.remove('active')
  btn.classList.remove('active')
  htmlEl.classList.remove('noscroll')  
}
