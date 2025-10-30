export function initLayers(){
  const layers=document.querySelectorAll('.layer');
  const details=document.querySelectorAll('.detail-card');
  if(!layers.length) return;
  layers.forEach(layer=>{
    layer.addEventListener('click',()=>{
      const type=layer.getAttribute('data-layer');
      layers.forEach(l=>l.classList.remove('active'));
      details.forEach(d=>d.classList.remove('active'));
      layer.classList.add('active');
      const card=document.getElementById(`${type}-detail`);
      if(card) card.classList.add('active');
    });
  });
}

