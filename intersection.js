export function initSectionObserver(){
  const sections=document.querySelectorAll('.section');
  if(!sections.length) return;
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)'}
    });
  },{threshold:.1,rootMargin:'0px 0px -100px 0px'});
  sections.forEach(s=>{s.style.opacity='0';s.style.transform='translateY(50px)';s.style.transition='all .6s ease-out';obs.observe(s)});
}

