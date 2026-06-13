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

  function renderLegacyUpdates(){
    const box=document.querySelector('[data-render="updates"]'); if(!box || !window.CAMP21) return;
    box.innerHTML = CAMP21.updates.map(u=>`<div class="update-item"><div class="update-time">${u.time}</div><div><div class="update-text"><strong>${u.title}</strong><br>${u.detail}</div></div><div class="update-pic">Camp21</div></div>`).join('');
  }
  function renderCountdown(){
    const el=document.querySelector('[data-countdown]'); if(!el || !window.CAMP21) return;
    el.textContent = CAMP21.event?.dates || '13–16 July 2026';
  }
  window.toggleSidebar = function(){
    const side=document.querySelector('.sidebar');
    const overlay=document.querySelector('.overlay');
    if(side) side.classList.toggle('open');
    if(overlay) overlay.classList.toggle('show');
  };
  window.closeSidebar = function(){
    const side=document.querySelector('.sidebar');
    const overlay=document.querySelector('.overlay');
    if(side) side.classList.remove('open');
    if(overlay) overlay.classList.remove('show');
  };
  function setActiveLink(){
    const current=location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('a[href]').forEach(a=>{
      const href=a.getAttribute('href').split('/').pop();
      if(href===current) a.classList.add('active');
    });
  }

  function mobileNav(){
    const btn=$('.menu-btn'), links=$('.nav-links'); if(!btn||!links)return;
    btn.addEventListener('click',()=>{links.style.display=links.style.display==='flex'?'none':'flex';links.style.position='absolute';links.style.left='12px';links.style.right='12px';links.style.top='74px';links.style.background='rgba(6,26,61,.98)';links.style.padding='14px';links.style.borderRadius='18px';links.style.flexDirection='column';links.style.alignItems='stretch';});
  }
  renderLiveUpdates(); renderExperiences(); renderGroups(); renderTrainers(); renderPhases(); renderLegacyUpdates(); renderCountdown(); setActiveLink(); mobileNav();
})();
