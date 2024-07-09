const languages = document.querySelectorAll('[data-language]')
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`https://github.com/ciscojuan/RamirezJuan-portfolio/blob/main/assets/language/${language}.json`);
  const texts = await requestJson.json();

  for(const text of textsToChange){
    const section = text.dataset.section
    const value = text.dataset.value

    text.innerHTML = texts[section][value]
  }
};

languages.forEach(language => {
  language.addEventListener('click', (e) => {
    changeLanguage(e.target.dataset.language);
    console.log(`${e.target.dataset.language}`);
  });
});


var typed = new Typed('[data-type]',{
    strings: [' Systems Engineer ', ' Front End Developer &', 'Cybersecurity Analyst'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})

window.addEventListener('scroll', function() {
    var nav = document.querySelector('header');
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