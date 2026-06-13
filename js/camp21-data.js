const CAMP21 = {
  event: {
    title: 'Camp21: Synergising Literacies 2026',
    subtitle: 'AI-Powered Design Thinking for Sustainable Cultural Heritage',
    venue: 'Kompleks Kraf Kuala Lumpur · Jalan Conlay',
    dates: '13–16 July 2026',
    groups: 6,
    participants: 60,
    trainers: 12
  },
  updates: [
    {time:'Now', title:'Batik Discovery Workshop', detail:'Cultural motif exploration underway at Studio 1.', img:'assets/images/batik-discovery.svg'},
    {time:'10:30 AM', title:'Songket Weave Lab', detail:'Prototype session and craft observation.', img:'assets/images/songket-weave.svg'},
    {time:'11:15 AM', title:'Wau Innovation Studio', detail:'Ideation in progress.', img:'assets/images/wau-studio.svg'},
    {time:'12:00 PM', title:'Gallery Walk', detail:'Exhibition space open.', img:'assets/images/gallery-walk.svg'}
  ],
  phases: [
    {no:'01', title:'Empathise', desc:'Understand people, culture and context.', icon:'♡'},
    {no:'02', title:'Define', desc:'Frame the right challenge.', icon:'⌕'},
    {no:'03', title:'Ideate', desc:'Generate heritage-inspired ideas.', icon:'💡'},
    {no:'04', title:'Prototype', desc:'Build, test and refine with AI.', icon:'□'},
    {no:'05', title:'Pitch', desc:'Present solutions that create impact.', icon:'📣'}
  ],
  experiences: [
    {title:'Batik Discovery', desc:'Explore motifs, meanings and the art of batik.', img:'assets/images/batik-discovery.svg', icon:'✺'},
    {title:'Songket Weave Lab', desc:'Learn, weave and innovate with timeless elegance.', img:'assets/images/songket-weave.svg', icon:'▧'},
    {title:'Wau Innovation Studio', desc:'Design the skies with tradition and imagination.', img:'assets/images/wau-studio.svg', icon:'✦'},
    {title:'Ukiran Heritage Stories', desc:'Carve stories. Preserve craft. Inspire future.', img:'assets/images/ukiran-heritage.svg', icon:'❖'},
    {title:'Gallery Walk', desc:'Celebrate creativity through exhibitions.', img:'assets/images/gallery-walk.svg', icon:'▣'},
    {title:'Judge Portal', desc:'For esteemed judges and evaluators.', img:'assets/images/kompleks-kraf.svg', icon:'⚖'},
    {title:'SMART DT App', desc:'AI-powered companion for your DT journey.', img:'assets/images/ai-heritage.svg', icon:'▣'},
    {title:'Participants’ Corner', desc:'Resources, guides and tools to support your journey.', img:'assets/images/kl-skyline.svg', icon:'👥'}
  ],
  groups: Array.from({length:6},(_,i)=>({
    id:i+1, name:['Team Warisan','Team Tenun','Team Batik','Team Songket','Team Ukiran','Team Wau'][i],
    participants:10, trainers:`Trainer ${i*2+1} + Trainer ${i*2+2}`, status:i<2?'In Progress':i===2?'Needs Support':'Pending'
  })),
  trainers: [
    ['Lead Trainer','Madam Julie','Overall programme flow, quality control and trainer coordination'],
    ['Phase 01 Input','Trainer A','Empathy, interview and observation input'],
    ['Phase 02 Input','Trainer B','Define, POV and HMW input'],
    ['Phase 03 Input','Trainer C','Ideation, SCAMPER and AI idea generation'],
    ['Phase 04 Input','Trainer D','Prototype, mockup and AI visual concept'],
    ['Phase 05 Input','Trainer E','Testing, gallery walk, pitch and reflection'],
    ['Tech/App Support','To assign','SMART DT App access, QR code, troubleshooting'],
    ['Documentation Team','To assign','Photos, video, activity updates and evidence board']
  ]
};
