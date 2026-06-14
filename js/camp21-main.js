(function(){
  const $ = (s,root=document)=>root.querySelector(s);
  const $$ = (s,root=document)=>Array.from(root.querySelectorAll(s));

  // Resolve asset path relative to repo root regardless of page depth
  function imgPath(path){
    // Count how many directory levels deep we are
    const depth = location.pathname.replace(/\/[^/]*$/, '').split('/').filter(p=>p&&p!=='').length;
    // For GitHub Pages: juliemarlina-collab.github.io/Camp21-Synergising-Literacies-2026/
    // index.html is at depth 1, pages/*.html at depth 2
    // From pages/ we need '../' prefix, from root we need nothing
    if(location.pathname.includes('/pages/')) return '../' + path;
    return path;
  }

  function renderLiveUpdates(){
    const box=$('[data-live-updates]'); if(!box) return;
    box.innerHTML = CAMP21.updates.map(u=>`
      <div class="update-row">
        <img src="${imgPath(u.img)}" alt="${u.title}" onerror="this.style.background='#2d4a8a';this.removeAttribute('src')">
        <div><b>${u.title}</b><span>${u.detail}</span><span>${u.time}</span></div>
      </div>`).join('') +
      `<a class="btn btn-outline btn-small" href="${location.pathname.includes('/pages/')?'activity-updates.html':'pages/activity-updates.html'}">View all updates →</a>`;
  }

  function renderExperiences(){
    const grid=$('[data-experiences]'); if(!grid) return;
    const links = ['pages/programme.html','pages/trainers.html','pages/groups.html','pages/dt-journey.html','pages/gallery-walk.html','pages/judges.html','pages/resources.html','pages/logistics.html'];
    const linksFromPages = ['programme.html','trainers.html','groups.html','dt-journey.html','gallery-walk.html','judges.html','resources.html','logistics.html'];
    const fromPages = location.pathname.includes('/pages/');
    grid.innerHTML = CAMP21.experiences.map((e,i)=>`
      <a class="exp-card ${i>3?'small':''}" href="${fromPages ? linksFromPages[i]||'#' : links[i]||'#'}">
        <img src="${imgPath(e.img)}" alt="${e.title}" onerror="this.style.background='#1a2744';this.removeAttribute('src')">
        <div class="exp-content">
          <div class="exp-icon">${e.icon}</div>
          <h3>${e.title}</h3>
          <p>${e.desc}</p>
        </div>
        <div class="arrow">→</div>
      </a>`).join('');
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
    const box=document.querySelector('[data-render="updates"]'); if(!box||!window.CAMP21) return;
    box.innerHTML = CAMP21.updates.map(u=>`
      <div class="update-item">
        <div class="update-time">${u.time}</div>
        <div class="update-text"><strong>${u.title}</strong><br>${u.detail}</div>
        <img src="${imgPath(u.img)}" alt="${u.title}" style="width:54px;height:44px;object-fit:cover;border-radius:8px" onerror="this.style.background='#2d4a8a';this.removeAttribute('src')">
      </div>`).join('');
  }

  function renderCountdown(){
    const el=document.querySelector('[data-countdown]'); if(!el||!window.CAMP21) return;
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
    const current=location.pathname.split('/').pop()||'index.html';
    document.querySelectorAll('a[href]').forEach(a=>{
      const href=a.getAttribute('href').split('/').pop();
      if(href===current) a.classList.add('active');
    });
  }

  function mobileNav(){
    const btn=$('.menu-btn'), links=$('.nav-links'); if(!btn||!links) return;
    btn.addEventListener('click',()=>{
      const isOpen = links.style.display==='flex';
      links.style.display = isOpen ? 'none' : 'flex';
      if(!isOpen){
        Object.assign(links.style,{position:'absolute',left:'12px',right:'12px',top:'74px',background:'rgba(6,26,61,.98)',padding:'14px',borderRadius:'18px',flexDirection:'column',alignItems:'stretch',zIndex:'999'});
      }
    });
  }

  renderLiveUpdates();
  renderExperiences();
  renderGroups();
  renderTrainers();
  renderPhases();
  renderLegacyUpdates();
  renderCountdown();
  setActiveLink();
  mobileNav();
})();
