(function(){
  const $ = (s,root=document)=>root.querySelector(s);
  const $$ = (s,root=document)=>Array.from(root.querySelectorAll(s));
  function imgPath(path){
    if(location.pathname.includes('/pages/')) return '../'+path;
    return path;
  }
  function renderLiveUpdates(){
    const box=$('[data-live-updates]'); if(!box) return;
    box.innerHTML = CAMP21.updates.map(u=>`<div class="update-row"><img src="${imgPath(u.img)}" alt=""><div><b>${u.title}</b><span>${u.detail}</span><span>${u.time}</span></div></div>`).join('') + `<a class="btn btn-outline btn-small" href="${location.pathname.includes('/pages/')?'activity-updates.html':'pages/activity-updates.html'}">View all updates →</a>`;
  }
  function renderExperiences(){
    const grid=$('[data-experiences]'); if(!grid) return;
    grid.innerHTML = CAMP21.experiences.map((e,i)=>`<a class="exp-card ${i>3?'small':''}" href="${location.pathname.includes('/pages/')?'#':'pages/dt-journey.html'}"><img src="${imgPath(e.img)}" alt="${e.title}"><div class="exp-content"><div class="exp-icon">${e.icon}</div><h3>${e.title}</h3><p>${e.desc}</p></div><div class="arrow">→</div></a>`).join('');
  }
  function renderGroups(){
    const body=$('[data-groups]'); if(!body) return;
    body.innerHTML = CAMP21.groups.map(g=>`<tr><td><strong>${g.name}</strong></td><td>${g.participants}</td><td>${g.trainers}</td><td><span class="status ${g.status==='In Progress'?'progress':g.status==='Pending'?'pending':'progress'}">${g.status}</span></td></tr>`).join('');
  }
  function renderTrainers(){
    const body=$('[data-trainers]'); if(!body) return;
    body.innerHTML = CAMP21.trainers.map(t=>`<tr><td><strong>${t[0]}</strong></td><td>${t[1]}</td><td>${t[2]}</td></tr>`).join('');
  }
  function renderPhases(){
    const wrap=$('[data-phases]'); if(!wrap) return;
    wrap.innerHTML = CAMP21.phases.map((p,i)=>`<div class="step"><div class="step-icon s${i+1}">${p.icon}</div><b>${p.no} · ${p.title}</b><span>${p.desc}</span></div>`).join('');
  }
  function mobileNav(){
    const btn=$('.menu-btn'), links=$('.nav-links'); if(!btn||!links)return;
    btn.addEventListener('click',()=>{links.style.display=links.style.display==='flex'?'none':'flex';links.style.position='absolute';links.style.left='12px';links.style.right='12px';links.style.top='74px';links.style.background='rgba(6,26,61,.98)';links.style.padding='14px';links.style.borderRadius='18px';links.style.flexDirection='column';links.style.alignItems='stretch';});
  }
  renderLiveUpdates(); renderExperiences(); renderGroups(); renderTrainers(); renderPhases(); mobileNav();
})();
