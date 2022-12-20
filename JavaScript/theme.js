const themeEl = document.querySelector(".theme");
const htmlElement = document.documentElement;
let theme = localStorage.getItem('theme')
setTheme(theme)

   function setTheme(theme) {
      if (theme) {
         htmlElement.dataset.theme = theme
      }
   }

   themeEl.addEventListener('click' , () => {
      let theme = htmlElement.dataset.theme === 'light' ? 'dark' : 'light'
      setTheme(theme)
      localStorage.setItem('theme' , theme)
   })

// =====================================================

