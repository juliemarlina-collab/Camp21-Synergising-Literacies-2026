function toggleSidebar(){
  document.querySelector('.sidebar')?.classList.toggle('open');
  document.querySelector('.overlay')?.classList.toggle('show');
}
function closeSidebar(){
  document.querySelector('.sidebar')?.classList.remove('open');
  document.querySelector('.overlay')?.classList.remove('show');
}
function setActiveNav(){
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a=>{
    if(a.getAttribute('href') === current || a.getAttribute('href') === '../'+current){a.classList.add('active')}
  });
}
function renderGroups(){
  const el=document.querySelector('[data-render="groups"]');
  if(!el || !window.GROUPS)return;
  el.innerHTML=GROUPS.map(g=>`<div class="card">
    <div class="role-card"><div class="role-icon">${g.id}</div><div><div class="role-title">${g.name}</div><div class="role-desc">${g.trainers}<br><strong>Current phase:</strong> ${g.phase} · ${g.status}</div></div></div>
    <div class="progress" style="margin-top:12px"><span style="width:${g.progress}%"></span></div>
  </div>`).join('');
}
function renderUpdates(){
  const el=document.querySelector('[data-render="updates"]');
  if(!el || !window.ACTIVITY_UPDATES)return;
  el.innerHTML=ACTIVITY_UPDATES.map(u=>`<div class="update-item"><div class="update-time">${u.time}</div><div class="update-text">${u.update}</div><div class="update-pic">${u.pic}</div></div>`).join('');
}
function renderPhases(){
  const el=document.querySelector('[data-render="phases"]');
  if(!el || !window.PHASES)return;
  const colors=['','orange','gold','maroon','green'];
  el.innerHTML=PHASES.map((p,i)=>`<div class="card phase-card ${colors[i]}">
    <span class="pill pill-teal">Phase ${p.no}</span>
    <div class="card-title" style="margin-top:10px">${p.name}</div>
    <ul class="list"><li><strong>Input trainer:</strong> ${p.trainer}</li><li><strong>Student output:</strong> ${p.output}</li><li><strong>SMART DT App:</strong> ${p.app}</li></ul>
  </div>`).join('');
}
function updateCountdown(){
  const target=new Date('2026-07-13T08:00:00+08:00');
  const now=new Date();
  const diff=target-now;
  const el=document.querySelector('[data-countdown]');
  if(!el)return;
  if(diff<=0){el.textContent='Camp21 is live';return}
  const d=Math.floor(diff/86400000); const h=Math.floor((diff%86400000)/3600000);
  el.textContent=`${d}d ${h}h to Camp21`;
}
document.addEventListener('DOMContentLoaded',()=>{setActiveNav();renderGroups();renderUpdates();renderPhases();updateCountdown();setInterval(updateCountdown,60000);});
