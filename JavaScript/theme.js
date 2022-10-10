const themeEl = document.querySelector(".theme");
const htmlEl = document.documentElement;
const theme = localStorage.getItem('theme')
if (theme === 'light') {
   htmlEl.classList.add(theme)
   htmlEl.classList.remove('dark')
   themeEl.classList.add(theme)
   themeEl.classList.remove('dark')
} else {
   htmlEl.classList.add(theme)
   htmlEl.classList.remove('light')
   themeEl.classList.add(theme)
   themeEl.classList.remove('light')
}


themeEl.addEventListener("click" , (e) => {
      if ( e.currentTarget.classList.contains('light')) {
         e.currentTarget.classList.remove('light')
         e.currentTarget.classList.add('dark')
         htmlEl.classList.remove("light")
         htmlEl.classList.add("dark")
         localStorage.setItem('theme' , 'dark')
      } else {
         e.currentTarget.classList.add('light')
         e.currentTarget.classList.remove('dark')
         htmlEl.classList.add("light")
         htmlEl.classList.remove("dark")
         localStorage.setItem('theme' , 'light')
   }
});



// =====================================================

