const s1=document.getElementById('screen1');
const s2=document.getElementById('screen2');
const gift=document.querySelector('.gift');
const letter=document.getElementById('letter');
document.getElementById('open').onclick=()=>{
 gift.classList.add('open');
 for(let i=0;i<120;i++){
  const c=document.createElement('div');
  c.className='conf';
  c.style.left=Math.random()*100+'vw';
  c.style.top='-10px';
  c.style.background=['#fff','#ffb3d9','#caa8ff','#9edcff'][Math.floor(Math.random()*4)];
  c.style.animationDelay=Math.random()+'s';
  document.body.appendChild(c);
  setTimeout(()=>c.remove(),4000);
 }
 setTimeout(()=>{s1.classList.add('hidden');s2.classList.remove('hidden');},900);
};
document.getElementById('letterBtn').onclick=()=>letter.classList.toggle('hidden');
for(let i=0;i<40;i++){
 const st=document.createElement('div');
 st.className='star';
 st.textContent='✦';
 st.style.left=Math.random()*100+'vw';
 st.style.top=Math.random()*100+'vh';
 document.body.appendChild(st);
}
setInterval(()=>{
 const h=document.createElement('div');
 h.className='heart';
 h.textContent='💗';
 h.style.left=Math.random()*100+'vw';
 document.body.appendChild(h);
 setTimeout(()=>h.remove(),8000);
},900);
