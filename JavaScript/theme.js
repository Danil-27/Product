const htmlTheme = document.querySelector(".light");
const theme = document.querySelector(".theme");
const themeBackround = document.querySelector(".theme__backround");
const decor = document.querySelector(".theme__decor");
// const bg = document.querySelector(".section_light-bg")


theme.addEventListener("click" , (e) => {
   if (e.target.classList.contains("theme")) {
      decor.classList.toggle("theme__decor");
      decor.classList.toggle("decor");
      htmlTheme.classList.toggle("light")
      htmlTheme.classList.toggle("dark")
      // bg.classList.toggle("section_light-bg")
      // bg.classList.toggle("section_dark-bg")
   }
})

themeBackround.addEventListener("click" , (e) => {
   if (e.target.classList.contains("theme__backround")) {
      decor.classList.toggle("theme__decor");
      decor.classList.toggle("decor");
      htmlTheme.classList.toggle("light")
      htmlTheme.classList.toggle("dark")
      // bg.classList.toggle("section_light-bg")
      // bg.classList.toggle("section_dark-bg")
   }
})

decor.addEventListener("click" , () => {
   decor.classList.toggle("theme__decor");
   decor.classList.toggle("decor");
   htmlTheme.classList.toggle("light")
   htmlTheme.classList.toggle("dark")
   // bg.classList.toggle("section_light-bg")
   // bg.classList.toggle("section_dark-bg")
});
