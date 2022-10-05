const htmlTheme = document.querySelector(".light");
const theme = document.querySelector(".theme");
const themeBackround = document.querySelector(".theme__backround");
const decor = document.querySelector(".theme__decor");


theme.addEventListener("click" , (e) => {
   if (e.target.classList.contains("theme")) {
      decor.classList.toggle("theme__decor");
      decor.classList.toggle("decor");
      htmlTheme.classList.toggle("light")
      htmlTheme.classList.toggle("dark")
   }
})

themeBackround.addEventListener("click" , (e) => {
   if (e.target.classList.contains("theme__backround")) {
      decor.classList.toggle("theme__decor");
      decor.classList.toggle("decor");
      htmlTheme.classList.toggle("light")
      htmlTheme.classList.toggle("dark")
   }
})

decor.addEventListener("click" , () => {
   decor.classList.toggle("theme__decor");
   decor.classList.toggle("decor");
   htmlTheme.classList.toggle("light")
   htmlTheme.classList.toggle("dark")
});

// =====================================================