export function initSmoothScroll(){
  document.querySelectorAll('.nav-link').forEach(link=>{
    link.addEventListener('click',e=>{
      const id=link.getAttribute('href');const target=document.querySelector(id);
      if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}
    });
  });
}

