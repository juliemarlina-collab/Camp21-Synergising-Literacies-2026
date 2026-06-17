const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');

menuBtn?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

mainNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

const camp21Teams = [
  { code: 'G01', name: 'Wau Warriors', theme: 'Courage, flight and aspiration' },
  { code: 'G02', name: 'Batik Blaze', theme: 'Creativity, colour and bold ideas' },
  { code: 'G03', name: 'Songket Sparks', theme: 'Premium craft and bright innovation' },
  { code: 'G04', name: 'Keris Coders', theme: 'AI, logic and strategic thinking' },
  { code: 'G05', name: 'Canting Crew', theme: 'Detail, collaboration and craft' },
  { code: 'G06', name: 'Tekat Titans', theme: 'Strength, texture and excellence' },
  { code: 'G07', name: 'Lakar Legends', theme: 'Sketching, design and storytelling' },
  { code: 'G08', name: 'Anyam Alliance', theme: 'Teamwork, weaving and unity' },
  { code: 'G09', name: 'Rimba Rise', theme: 'Nature, sustainability and growth' },
  { code: 'G10', name: 'Pusaka Pulse', theme: 'Heritage, identity and future energy' }
];

const teamNameGrid = document.getElementById('teamNameGrid');
if (teamNameGrid) {
  teamNameGrid.innerHTML = camp21Teams.map(team => `
    <article class="team-name-card bento-card">
      <strong>${team.code}</strong>
      <h3>${team.name}</h3>
      <p>${team.theme}</p>
    </article>
  `).join('');
}

const phaseProgress = [
  { phase: 'Empathise', value: 0 },
  { phase: 'Define', value: 0 },
  { phase: 'Ideate', value: 0 },
  { phase: 'Prototype', value: 0 },
  { phase: 'Test', value: 0 }
];

const phaseBars = document.getElementById('phaseBars');
if (phaseBars) {
  phaseBars.innerHTML = phaseProgress.map(item => `
    <div class="phase-row">
      <span>${item.phase}</span>
      <div class="bar"><span style="width:${item.value}%"></span></div>
      <strong>${item.value}%</strong>
    </div>
  `).join('');
}

const completionNotice = document.getElementById('completionNotice');
if (completionNotice) {
  completionNotice.innerHTML = `
    <h3>Completion Notice</h3>
    <p><strong>Setup:</strong> 10 teams × 6 participants confirmed.</p>
    <p><strong>Next:</strong> Connect registration, draw lot and Smart DT App data.</p>
  `;
}

const drawLotForm = document.getElementById('drawLotForm');
const drawResult = document.getElementById('drawResult');

function drawTeam(name) {
  const cleanName = name.trim().toLowerCase();
  let score = 0;
  for (let i = 0; i < cleanName.length; i++) score += cleanName.charCodeAt(i);
  return camp21Teams[score % camp21Teams.length];
}

if (drawLotForm && drawResult) {
  drawLotForm.addEventListener('submit', event => {
    event.preventDefault();
    const nameInput = document.getElementById('participantName');
    const idInput = document.getElementById('participantId');
    const participantName = nameInput.value.trim();
    if (!participantName) return;
    const assignedTeam = drawTeam(participantName + (idInput?.value || ''));
    drawResult.innerHTML = `
      <p class="eyebrow">Group Result</p>
      <p>Welcome, <strong>${participantName}</strong>.</p>
      <div class="result-team">${assignedTeam.name}</div>
      <p><strong>Group Code:</strong> ${assignedTeam.code}</p>
      <p><strong>Theme:</strong> ${assignedTeam.theme}</p>
      <p><strong>Next Step:</strong> Proceed to Smart DT App and complete Phase 01: Empathise.</p>
    `;
  });
}
