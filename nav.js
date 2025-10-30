export function initNavigation(){
  const hamburger=document.querySelector('.hamburger');
  const navMenu=document.querySelector('.nav-menu');
  const navLinks=document.querySelectorAll('.nav-link');
  if(!hamburger||!navMenu) return;
  hamburger.addEventListener('click',()=>{hamburger.classList.toggle('active');navMenu.classList.toggle('active')});
  navLinks.forEach(l=>l.addEventListener('click',()=>{hamburger.classList.remove('active');navMenu.classList.remove('active')}))
}

