const CAMP21 = {
  event: {
    title: 'Camp21: Synergising Literacies 2026',
    subtitle: 'AI-Powered Design Thinking for Sustainable Cultural Heritage',
    venue: 'Kompleks Kraf Kuala Lumpur · Jalan Conlay',
    dates: '13–16 July 2026',
    groups: 6,
    participants: 60,
    trainers: 12,
    registrationLink: 'https://shorturl.at/Mo98y',
    telegramLink: 'https://t.me/+vTPGEFIaXMs5Mjhl',
    contacts: [
      {name:'Pn. Jasmine',  phone:'012-6224979', role:'General info about Camp 21'},
      {name:'Pn. Radhiah',  phone:'013-3393001', role:'General info about Camp 21'},
      {name:'Pn. Herlina',  phone:'013-8465354', role:'Registration'},
      {name:'Ustaz Alif',   phone:'014-8392936', role:'Accommodation'}
    ]
  },

  // ── Real programme schedule from official risalah ──────────────
  schedule: [
    {
      date: '12 July 2026 (Sunday)',
      theme: 'Arrival Day',
      note: 'Arrival of participants, accompanying lecturers, facilitators and speakers at their respective accommodations.',
      sessions: []
    },
    {
      date: '13 July 2026 (Monday)',
      theme: 'Heritage Immersion & Empathize DT + KL Exploration',
      sessions: [
        {time:'7:00 am',          programme:'Pick up Participants',                                          venue:'Pick up points'},
        {time:'8:30 – 9:00 am',   programme:'Registration & Breakfast',                                     venue:'Main Seminar Hall'},
        {time:'9:00 – 9:30 am',   programme:'Programme Briefing / Smart Green Briefing',                    venue:'Main Seminar Hall'},
        {time:'9:30 – 10:00 am',  programme:'Ice Breaking & Group Formation',                               venue:'Main Seminar Hall'},
        {time:'10:00 am – 12:30 pm', programme:'Guided Craft Gallery Tour / Motif Exploration & Artisan Interview', venue:'Main Seminar Hall'},
        {time:'12:30 – 2:00 pm',  programme:'Lunch / Zohor Prayer',                                        venue:'Hall & Surau'},
        {time:'3:30 – 5:00 pm',   programme:'Design Thinking Workshop: Empathize & Define',                 venue:'Main Seminar Hall'},
        {time:'5:00 – 5:30 pm',   programme:'Day 1 Reflection & Asar Prayer',                              venue:'Hall & Surau'},
        {time:'5:30 – 7:00 pm',   programme:'Dinner / Maghrib Prayer',                                     venue:'Main Seminar Hall'},
        {time:'8:30 – 10:30 pm',  programme:'KL Exploration (Hop-On Hop-Off Bus & Reflection)',             venue:'Around Kuala Lumpur'},
        {time:'10:30 pm',         programme:'Sending off Participants',                                     venue:'Kompleks Kraf'}
      ]
    },
    {
      date: '14 July 2026 (Tuesday)',
      theme: 'Ideate',
      sessions: [
        {time:'7:00 am',          programme:'Pick up Participants',                  venue:'Pick up points'},
        {time:'8:30 – 9:00 am',   programme:'Breakfast',                             venue:'Main Seminar Hall'},
        {time:'9:00 – 10:30 am',  programme:'Design Thinking Workshop: Ideate',      venue:'Main Seminar Hall'},
        {time:'10:30 am – 12:00 pm', programme:'Motif Exploration & Artisan Interview', venue:'Main Seminar Hall'},
        {time:'12:00 – 1:30 pm',  programme:'Lunch / Zohor Prayer',                 venue:'Hall & Surau'},
        {time:'1:30 – 2:30 pm',   programme:'Mind Mapping & Concept Sketching',     venue:'Main Seminar Hall'},
        {time:'2:30 – 3:30 pm',   programme:'Group Reflection',                     venue:'Main Seminar Hall'},
        {time:'7:30 – 8:30 pm',   programme:'Dinner & Maghrib Prayer',              venue:'Main Seminar Hall'},
        {time:'8:30 – 10:30 pm',  programme:'Discussion',                           venue:'Main Seminar Hall'},
        {time:'10:30 pm',         programme:'Sending off Participants',              venue:'Kompleks Kraf'}
      ]
    },
    {
      date: '15 July 2026 (Wednesday)',
      theme: 'Prototyping & Pitch Preparation',
      sessions: [
        {time:'7:00 am',          programme:'Pick up Participants',                  venue:'Pick Up Points'},
        {time:'8:30 – 9:00 am',   programme:'Breakfast',                             venue:'Main Seminar Hall'},
        {time:'9:00 – 11:00 am',  programme:'Prototyping Workshop',                  venue:'Main Seminar Hall'},
        {time:'11:00 am – 12:30 pm', programme:'Tie Dye Workshop',                  venue:'Craft Area'},
        {time:'12:30 – 1:30 pm',  programme:'Lunch / Zohor Prayer',                 venue:'Surau'},
        {time:'1:30 – 3:30 pm',   programme:'Pitch & Storytelling Preparation',     venue:'Main Seminar Hall'},
        {time:'3:30 – 5:00 pm',   programme:'Closing Rehearsal',                    venue:'Laman Wau'},
        {time:'5:30 – 8:30 pm',   programme:'Dinner / Maghrib Prayer',              venue:'Main Seminar Hall & Surau'},
        {time:'8:30 – 10:30 pm',  programme:'Discussion',                           venue:'Main Seminar Hall'},
        {time:'10:30 pm',         programme:'Sending off Participants',              venue:'Kompleks Kraf'}
      ]
    },
    {
      date: '16 July 2026 (Thursday)',
      theme: 'Pitching & Closing Ceremony',
      sessions: [
        {time:'7:00 am',          programme:'Pick up Participants',                  venue:'Pick Up Points'},
        {time:'8:30 – 9:00 am',   programme:'Breakfast',                             venue:'Main Seminar Hall'},
        {time:'9:00 – 11:30 am',  programme:'Pitching & Evaluation Session',         venue:'Laman Wau'},
        {time:'11:30 am – 12:30 pm', programme:'Panel Feedback',                    venue:'Laman Wau'},
        {time:'12:30 – 1:30 pm',  programme:'Lunch Break',                          venue:'Laman Wau'},
        {time:'1:30 – 2:30 pm',   programme:'Zohor Prayer',                         venue:'Surau'},
        {time:'2:30 – 4:00 pm',   programme:'Closing Ceremony & Prize Giving',       venue:'Laman Wau'}
      ]
    }
  ],

  // ── Accommodation options from official risalah ────────────────
  accommodation: [
    {no:1,  name:'Pullman Kuala Lumpur City Centre',      address:'No. 4, Jalan Conlay',          tel:'+60 3-2170 8888', rate:'From RM340+',    dist:'0.24 km'},
    {no:2,  name:'KLoe Hotel',                            address:'227, Jalan Bukit Bintang',     tel:'+60 3-2772 1313', rate:'From RM260+',    dist:'0.3 km'},
    {no:3,  name:'J-Hotel by Dorsett',                    address:'Jalan Imbi',                   tel:'+60 3-2716 1000', rate:'From RM180++',   dist:'0.3 km'},
    {no:4,  name:'Royale Chulan Kuala Lumpur',            address:'No. 5, Jalan Conlay',          tel:'+60 3-2688 9688', rate:'From RM235+',    dist:'0.20 km'},
    {no:5,  name:'Wyndham Suites KLCC',                   address:'Jalan Sultan Ismail',          tel:'+60 3-2030 1888', rate:'From RM340+',    dist:'0.4 km'},
    {no:6,  name:'Banyan Tree Kuala Lumpur',               address:'2, Jalan Conlay',              tel:'+60 3-2113 1888', rate:'From RM1,190+',  dist:'0.45 km'},
    {no:7,  name:'Pavilion Hotel KL Managed By Banyan Tree', address:'170, Jalan Bukit Bintang', tel:'+60 3-2117 2888', rate:'From RM575+',    dist:'0.5 km'},
    {no:8,  name:'JW Marriott Hotel Kuala Lumpur',        address:'183, Jalan Bukit Bintang',     tel:'+60 3-2715 9000', rate:'From RM472+',    dist:'0.7 km'},
    {no:9,  name:'Grand Hyatt Kuala Lumpur',              address:'12, Jalan Pinang',             tel:'+60 3-2182 1234', rate:'From RM522+',    dist:'0.85 km'},
    {no:10, name:'Traders Hotel Kuala Lumpur',            address:'KLCC',                         tel:'+60 3-2332 9888', rate:'From RM493+',    dist:'1.0 km'}
  ],

  pickupPoints: [
    'Avenue K Drop-Off Bay (Jalan Ampang entrance)',
    'Pavilion KL Bus / Coach Bay (Jalan Bukit Bintang side) near Pavilion Kuala Lumpur'
  ],

  updates: [
    {time:'Now',      title:'Batik Discovery Workshop',   detail:'Cultural motif exploration underway at Studio 1.',   img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/card-batik-discovery.png'},
    {time:'10:30 AM', title:'Songket Weave Lab',          detail:'Prototype session and craft observation.',           img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/define-weave-card.png'},
    {time:'11:15 AM', title:'Wau Innovation Studio',      detail:'Ideation in progress.',                             img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/card-wau-innovation.png'},
    {time:'12:00 PM', title:'Gallery Walk',               detail:'Exhibition space open.',                            img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/card-testing-treasure.png'}
  ],

  phases: [
    {no:'01', title:'Empathise', desc:'Interview artisans and understand the real cultural heritage challenge.', icon:'♡'},
    {no:'02', title:'Define',    desc:'Frame the right problem rooted in craft and community need.',             icon:'⌕'},
    {no:'03', title:'Ideate',    desc:'Generate AI-powered heritage-inspired ideas.',                           icon:'💡'},
    {no:'04', title:'Prototype', desc:'Build and test with AI visuals, mockups or video.',                      icon:'□'},
    {no:'05', title:'Pitch',     desc:'Deliver a 10-min visionary pitch aligned to SDG 11.',                   icon:'📣'}
  ],

  experiences: [
    {title:'Batik Discovery',      desc:'Explore motifs, meanings and the art of batik.',                    img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/card-batik-discovery.png',  icon:'✺'},
    {title:'Songket Weave Lab',    desc:'Learn, weave and innovate with timeless elegance.',                 img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/define-weave-card.png',    icon:'▧'},
    {title:'Wau Innovation Studio',desc:'Design the skies with tradition and imagination.',                  img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/card-wau-innovation.png',       icon:'✦'},
    {title:'Ukiran Heritage',      desc:'Carve stories. Preserve craft. Inspire future.',                    img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/card-ukiran-heritage.png',  icon:'❖'},
    {title:'Gallery Walk',         desc:'Celebrate creativity through exhibitions.',                         img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/card-testing-treasure.png',     icon:'▣'},
    {title:'Judge Portal',         desc:'For esteemed judges and evaluators.',                               img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/card-judge-portal.png',    icon:'⚖'},
    {title:'SMART DT App',         desc:'AI-powered companion for your DT journey.',                        img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/card-smartdt-app.png',      icon:'▣'},
    {title:'Participants\u2019 Corner', desc:'Resources, guides and tools to support your journey.',        img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/card-partipants-corner.png',    icon:'👥'}
  ],

  // Rubric from official pitching task PDF
  rubric: [
    {criteria:'Content & Innovative Thinking', weight:30, desc:'Creative integration of AI and Design Thinking.'},
    {criteria:'Presentation & Communication',  weight:30, desc:'Clear, confident, engaging delivery and visual design.'},
    {criteria:'Feasibility & Impact',          weight:20, desc:'Realistic plan, measurable impact, SDG 11 alignment.'},
    {criteria:'Team Collaboration',            weight:10, desc:'Balanced participation and cohesive teamwork.'},
    {criteria:'Q&A Handling',                  weight:10, desc:'Ability to address judges\u2019 questions effectively.'}
  ],

  pitchRules: [
    '10-minute maximum pitch per group.',
    'Bell rings once at the 9th minute.',
    'Bell rings twice when the 10-minute limit is exceeded.',
    '5 minutes for Q&A — maximum 2 questions from judges.',
    'All 4 members must have an equal speaking part.',
    'AI must be part of the solution, not only used to decorate slides.'
  ],

  groups: Array.from({length:6},(_,i)=>({
    id:i+1,
    name:['Team Warisan','Team Tenun','Team Batik','Team Songket','Team Ukiran','Team Wau'][i],
    participants:10,
    trainers:`Trainer ${i*2+1} + Trainer ${i*2+2}`,
    status:i<2?'In Progress':i===2?'Needs Support':'Pending'
  })),

  trainers: [
    ['Lead Trainer',       'Madam Julie',  'Overall programme flow, quality control and trainer coordination'],
    ['Phase 01 Input',     'Trainer A',    'Empathy, interview and observation input'],
    ['Phase 02 Input',     'Trainer B',    'Define, POV and HMW input'],
    ['Phase 03 Input',     'Trainer C',    'Ideation, SCAMPER and AI idea generation'],
    ['Phase 04 Input',     'Trainer D',    'Prototype, mockup and AI visual concept'],
    ['Phase 05 Input',     'Trainer E',    'Testing, gallery walk, pitch and reflection'],
    ['Tech/App Support',   'To assign',    'SMART DT App access, QR code, troubleshooting'],
    ['Documentation Team', 'To assign',    'Photos, video, activity updates and evidence board']
  ]
};
