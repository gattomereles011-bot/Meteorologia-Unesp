export function initBackToTop(){
  const btn=document.getElementById('backToTop');
  if(!btn) return;
  const onScroll=()=>{window.pageYOffset>300?btn.classList.add('show'):btn.classList.remove('show')};
  window.addEventListener('scroll',onScroll,{passive:true});
  btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  onScroll();
}

