let sun_moon = document.getElementById('sun_moon')
sun_moon.onclick = function(){
const doc = document.documentElement
let data_doc= doc.getAttribute('data-theme'),
newTheme
newTheme=(data_doc=='light')?'dark':'light'
doc.setAttribute('data-theme',newTheme)
localStorage.setItem('theme',newTheme)
}