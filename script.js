const navLinks = document.querySelectorAll('nav ul li a');
const nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
 
  document.querySelectorAll('section').forEach((section) => {
    const sectionTop = section.offsetTop; 
    const sectionHeight = section.clientHeight; 
    const sectionId = section.getAttribute('id');
    
    if (window.pageYOffset >= sectionTop - nav.offsetHeight && window.pageYOffset < sectionTop + sectionHeight) {
  
      navLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
});
const say = () =>{
    alert('welcome')
}
