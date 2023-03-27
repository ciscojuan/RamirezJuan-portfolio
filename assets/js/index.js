const language = document.querySelector('.nav__flags')
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`/assets/language/${language}.json`);
  const texts = await requestJson.json();

  for(const textToChange of textsToChange){
    const section = textToChange.dataset.section
    const value = textToChange.dataset.value

    textToChange.innerHTML = texts[section][value]
  }
};
language.addEventListener('click', (e) =>{
  changeLanguage(e.target.dataset.language)
})


var typed = new Typed('[data-type]',{
    strings: [' SOC Security Analyst & ', ' Front End Developer &'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

window.addEventListener('scroll', function() {
    var nav = document.querySelector('.header');
    if (window.scrollY > 0) {
      nav.classList.add('blur');
    } else {
      nav.classList.remove('blur');
    }
  });
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});