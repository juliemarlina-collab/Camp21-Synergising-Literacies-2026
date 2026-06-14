const CAMP21 = {
  event: {
    title: 'Camp21: Synergising Literacies 2026',
    subtitle: 'AI-Powered Design Thinking for Sustainable Cultural Heritage',
    venue: 'Kompleks Kraf Kuala Lumpur · Jalan Conlay',
    dates: '13–16 July 2026',
    registrationLink: 'https://shorturl.at/Mo98y',
    telegramLink: 'https://t.me/+vTPGEFIaXMs5Mjhl'
  },

  // ── Live updates shown on activity-updates.html ONLY ─────────────────
  updates: [
    {time:'Now',      title:'Batik Discovery Workshop',  detail:'Cultural motif exploration underway at Studio 1.',  img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/batik-discovery.png'},
    {time:'10:30 AM', title:'Songket Weave Lab',         detail:'Prototype session and craft observation.',          img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/songket-weave.png'},
    {time:'11:15 AM', title:'Wau Innovation Studio',     detail:'Ideation in progress.',                            img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/wau-studio.png'},
    {time:'12:00 PM', title:'Gallery Walk',              detail:'Exhibition space open.',                           img:'/Camp21-Synergising-Literacies-2026/assets/craft-cards/gallery-walk.png'}
  ],

  // ── DT phases — icons from Canva row 2-3 ─────────────────────────────
  phases: [
    {no:'01', title:'Empathise', desc:'Interview artisans and understand the real cultural heritage challenge.', img:'/Camp21-Synergising-Literacies-2026/assets/Icons/icon-empathy.png'},
    {no:'02', title:'Define',    desc:'Frame the right problem rooted in craft and community need.',            img:'/Camp21-Synergising-Literacies-2026/assets/Icons/icon-define.png'},
    {no:'03', title:'Ideate',    desc:'Generate AI-powered heritage-inspired ideas.',                          img:'/Camp21-Synergising-Literacies-2026/assets/Icons/icon-ideate.png'},
    {no:'04', title:'Prototype', desc:'Build and test with AI visuals, mockups or video.',                     img:'/Camp21-Synergising-Literacies-2026/assets/Icons/icon-prototype.png'},
    {no:'05', title:'Test',      desc:'Gather feedback, refine and prepare your pitch.',                       img:'/Camp21-Synergising-Literacies-2026/assets/Icons/icon-test.png'}
  ],

  // ── Experience grid
  // img  = CRAFT CARD (full photo background)
  // icon = SMALL ICON (overlay badge) — from Canva named icons
  // ─────────────────────────────────────────────────────────────────────
  experiences: [
    {
      title: 'Programme Flow',
      desc:  'Day-by-day schedule for all 4 days.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/batik-discovery.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-event.png',
      link:  'pages/programme.html'
    },
    {
      title: 'Trainers & Duties',
      desc:  'Phase trainers and group facilitation team.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/songket-weave.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-trainer.png',
      link:  'pages/trainers.html'
    },
    {
      title: 'Group Missions',
      desc:  '6 groups, 10 participants each, 2 trainers per group.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/wau-studio.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-participants.png',
      link:  'pages/groups.html'
    },
    {
      title: 'DT Journey',
      desc:  '5-phase Design Thinking from empathy to pitch.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/ukiran-heritage.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-dt-journey.png',
      link:  'pages/dt-journey.html'
    },
    {
      title: 'Gallery Walk',
      desc:  'Heritage exhibition and creativity showcase.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/gallery-walk.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-activity.png',
      link:  'pages/gallery-walk.html'
    },
    {
      title: 'Judge Portal',
      desc:  'Evaluation rubric and live score submission.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/card-judge-portal.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-test.png',
      link:  'pages/judges.html'
    },
    {
      title: 'Evidence Board',
      desc:  'Capture and submit DT templates T01–T16.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/hero-smartdt.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-define.png',
      link:  'pages/evidence-board.html'
    },
    {
      title: "Participants' Corner",
      desc:  'Resources, logistics and essentials to bring.',
      img:   '/Camp21-Synergising-Literacies-2026/assets/craft-cards/kompleks-kraf.png',
      icon:  '/Camp21-Synergising-Literacies-2026/assets/Icons/icon-participants.png',
      link:  'pages/logistics.html'
    }
  ],

  // ── Schedule ──────────────────────────────────────────────────────────
  schedule: [
    {
      date:'12 July 2026 (Sunday)', theme:'Arrival Day',
      note:'Participants, accompanying lecturers, facilitators and speakers arrive at their respective accommodations.',
      sessions:[]
    },
    {
      date:'13 July 2026 (Monday)', theme:'Heritage Immersion & Empathize DT + KL Exploration',
      sessions:[
        {time:'7:00 am',             prog:'Pick up Participants',                                           venue:'Pick up points'},
        {time:'8:30 – 9:00 am',      prog:'Registration & Breakfast',                                      venue:'Main Seminar Hall'},
        {time:'9:00 – 9:30 am',      prog:'Programme Briefing / Smart Green Briefing',                     venue:'Main Seminar Hall'},
        {time:'9:30 – 10:00 am',     prog:'Ice Breaking & Group Formation',                                venue:'Main Seminar Hall'},
        {time:'10:00 am – 12:30 pm', prog:'Guided Craft Gallery Tour / Motif Exploration & Artisan Interview', venue:'Main Seminar Hall'},
        {time:'12:30 – 2:00 pm',     prog:'Lunch / Zohor Prayer',                                         venue:'Hall & Surau'},
        {time:'3:30 – 5:00 pm',      prog:'Design Thinking Workshop: Empathize & Define',                  venue:'Main Seminar Hall'},
        {time:'5:00 – 5:30 pm',      prog:'Day 1 Reflection & Asar Prayer',                               venue:'Hall & Surau'},
        {time:'5:30 – 7:00 pm',      prog:'Dinner / Maghrib Prayer',                                      venue:'Main Seminar Hall'},
        {time:'8:30 – 10:30 pm',     prog:'KL Exploration (Hop-On Hop-Off Bus & Reflection)',              venue:'Around Kuala Lumpur'},
        {time:'10:30 pm',            prog:'Sending off Participants',                                      venue:'Kompleks Kraf'}
      ]
    },
    {
      date:'14 July 2026 (Tuesday)', theme:'Ideate',
      sessions:[
        {time:'7:00 am',             prog:'Pick up Participants',                                          venue:'Pick up points'},
        {time:'8:30 – 9:00 am',      prog:'Breakfast',                                                    venue:'Main Seminar Hall'},
        {time:'9:00 – 10:30 am',     prog:'Design Thinking Workshop: Ideate',                             venue:'Main Seminar Hall'},
        {time:'10:30 am – 12:00 pm', prog:'Motif Exploration & Artisan Interview',                        venue:'Main Seminar Hall'},
        {time:'12:00 – 1:30 pm',     prog:'Lunch / Zohor Prayer',                                        venue:'Hall & Surau'},
        {time:'1:30 – 2:30 pm',      prog:'Mind Mapping & Concept Sketching',                            venue:'Main Seminar Hall'},
        {time:'2:30 – 3:30 pm',      prog:'Group Reflection',                                            venue:'Main Seminar Hall'},
        {time:'7:30 – 8:30 pm',      prog:'Dinner & Maghrib Prayer',                                     venue:'Main Seminar Hall'},
        {time:'8:30 – 10:30 pm',     prog:'Discussion',                                                  venue:'Main Seminar Hall'},
        {time:'10:30 pm',            prog:'Sending off Participants',                                     venue:'Kompleks Kraf'}
      ]
    },
    {
      date:'15 July 2026 (Wednesday)', theme:'Prototyping & Pitch Preparation',
      sessions:[
        {time:'7:00 am',             prog:'Pick up Participants',                                         venue:'Pick Up Points'},
        {time:'8:30 – 9:00 am',      prog:'Breakfast',                                                   venue:'Main Seminar Hall'},
        {time:'9:00 – 11:00 am',     prog:'Prototyping Workshop',                                        venue:'Main Seminar Hall'},
        {time:'11:00 am – 12:30 pm', prog:'Tie Dye Workshop',                                            venue:'Craft Area'},
        {time:'12:30 – 1:30 pm',     prog:'Lunch / Zohor Prayer',                                        venue:'Surau'},
        {time:'1:30 – 3:30 pm',      prog:'Pitch & Storytelling Preparation',                            venue:'Main Seminar Hall'},
        {time:'3:30 – 5:00 pm',      prog:'Closing Rehearsal',                                           venue:'Laman Wau'},
        {time:'5:30 – 8:30 pm',      prog:'Dinner / Maghrib Prayer',                                     venue:'Main Seminar Hall & Surau'},
        {time:'8:30 – 10:30 pm',     prog:'Discussion',                                                  venue:'Main Seminar Hall'},
        {time:'10:30 pm',            prog:'Sending off Participants',                                     venue:'Kompleks Kraf'}
      ]
    },
    {
      date:'16 July 2026 (Thursday)', theme:'Pitching & Closing Ceremony',
      sessions:[
        {time:'7:00 am',             prog:'Pick up Participants',                                         venue:'Pick Up Points'},
        {time:'8:30 – 9:00 am',      prog:'Breakfast',                                                   venue:'Main Seminar Hall'},
        {time:'9:00 – 11:30 am',     prog:'⭐ Pitching & Evaluation Session',                            venue:'Laman Wau'},
        {time:'11:30 am – 12:30 pm', prog:'Panel Feedback',                                              venue:'Laman Wau'},
        {time:'12:30 – 1:30 pm',     prog:'Lunch Break',                                                 venue:'Laman Wau'},
        {time:'1:30 – 2:30 pm',      prog:'Zohor Prayer',                                                venue:'Surau'},
        {time:'2:30 – 4:00 pm',      prog:'🏆 Closing Ceremony & Prize Giving',                          venue:'Laman Wau'}
      ]
    }
  ],

  groups: Array.from({length:6},(_,i)=>({
    id: i+1,
    name: ['Team Warisan','Team Tenun','Team Batik','Team Songket','Team Ukiran','Team Wau'][i],
    participants: 10,
    trainers: `Trainer ${i*2+1} + Trainer ${i*2+2}`,
    status: i<2 ? 'In Progress' : i===2 ? 'Needs Support' : 'Pending'
  })),

  trainers:[
    ['Lead Trainer',       'Madam Julie', 'Overall programme flow, quality control and trainer coordination'],
    ['Phase 01 Input',     'To assign',   'Empathy, interview and observation input'],
    ['Phase 02 Input',     'To assign',   'Define, POV and HMW input'],
    ['Phase 03 Input',     'To assign',   'Ideation, SCAMPER and AI idea generation'],
    ['Phase 04 Input',     'To assign',   'Prototype, mockup and AI visual concept'],
    ['Phase 05 Input',     'To assign',   'Testing, gallery walk, pitch and reflection'],
    ['Tech/App Support',   'To assign',   'SMART DT App access, QR code, troubleshooting'],
    ['Documentation Team', 'To assign',   'Photos, video, activity updates and evidence board']
  ],

  rubric:[
    {criteria:'Content & Innovative Thinking', weight:30, desc:'Creative integration of AI and Design Thinking.'},
    {criteria:'Presentation & Communication',  weight:30, desc:'Clear, confident, engaging delivery and visual design.'},
    {criteria:'Feasibility & Impact',          weight:20, desc:'Realistic plan, measurable impact, SDG 11 alignment.'},
    {criteria:'Team Collaboration',            weight:10, desc:'Balanced participation and cohesive teamwork.'},
    {criteria:'Q&A Handling',                  weight:10, desc:'Ability to address judges\u2019 questions effectively.'}
  ]
};
