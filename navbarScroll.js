export function initNavbarScroll(){
  const navbar=document.querySelector('.navbar');
  if(!navbar) return;
  const onScroll=()=>{window.scrollY>50?navbar.classList.add('scrolled'):navbar.classList.remove('scrolled')};
  window.addEventListener('scroll',onScroll,{passive:true});
  onScroll();
}

