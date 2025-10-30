export function initTabs(){
  const buttons=document.querySelectorAll('.tab-button');
  const contents=document.querySelectorAll('.tab-content');
  if(!buttons.length) return;
  buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
      const target=btn.getAttribute('data-tab');
      buttons.forEach(b=>b.classList.remove('active'));
      contents.forEach(c=>c.classList.remove('active'));
      btn.classList.add('active');
      const pane=document.getElementById(target);
      if(pane) pane.classList.add('active');
    });
  });
}

