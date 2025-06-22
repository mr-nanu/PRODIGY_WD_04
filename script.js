console.log("New project initialized.");
// Smooth scroll and active link highlight for navigation
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

function setActiveLink() {
  let index = sections.length;
  while(--index && window.scrollY + 80 < sections[index].offsetTop) {}
  navLinks.forEach(link => link.classList.remove('active'));
  if (navLinks[index]) navLinks[index].classList.add('active');
}
setActiveLink();
window.addEventListener('scroll', setActiveLink);