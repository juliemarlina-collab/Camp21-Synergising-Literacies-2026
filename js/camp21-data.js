/* CAMP21 DATA LAYER
   Replace these values with Google Sheets values later.
   Recommended sheets:
   - Groups
   - Trainers
   - Phase_Trainers
   - Activity_Updates
   - Evidence_Board
   - Judge_Scores
   - Resources
*/

const CAMP21 = {
  theme: 'Camp21: Synergising Literacies 2026',
  tagline: 'AI-Powered Design Thinking for Sustainable Cultural Heritage',
  moodline: 'Inspired by Malaysian Arts · Driven by Ideas · Powered by AI',
  date: '13–16 July 2026',
  venue: 'Kompleks Kraf Kuala Lumpur',
  participants: 60,
  groups: 6,
  groupSize: 10,
  trainers: 12,
  smartDtUrl: '#REPLACE_WITH_SMART_DT_APP_LINK',
  judgeFormUrl: '#REPLACE_WITH_GOOGLE_FORM_LINK',
  activityFormUrl: '#REPLACE_WITH_ACTIVITY_UPDATE_FORM_LINK',
  evidenceFolderUrl: '#REPLACE_WITH_DRIVE_FOLDER_LINK'
};

const GROUPS = [
  {id:1,name:'Group 1 · Team Warisan',trainers:'Trainer 1 + Trainer 2',phase:'Empathy',progress:20,status:'In progress'},
  {id:2,name:'Group 2 · Team Tenun',trainers:'Trainer 3 + Trainer 4',phase:'Define',progress:40,status:'In progress'},
  {id:3,name:'Group 3 · Team Batik',trainers:'Trainer 5 + Trainer 6',phase:'Ideate',progress:60,status:'Needs check'},
  {id:4,name:'Group 4 · Team Songket',trainers:'Trainer 7 + Trainer 8',phase:'Prototype',progress:75,status:'On track'},
  {id:5,name:'Group 5 · Team Ukiran',trainers:'Trainer 9 + Trainer 10',phase:'Pitch Prep',progress:85,status:'On track'},
  {id:6,name:'Group 6 · Team Wau',trainers:'Trainer 11 + Trainer 12',phase:'Pitch Prep',progress:90,status:'Ready soon'}
];

const ACTIVITY_UPDATES = [
  {time:'08:30', update:'Registration and breakfast in progress. Students to scan hub QR and join their groups.', pic:'Secretariat'},
  {time:'09:30', update:'Group formation completed. Trainers please confirm group roles and SMART DT App recorder.', pic:'Lead Trainer'},
  {time:'10:00', update:'Guided craft gallery tour begins. Capture observation notes, photos and interview evidence.', pic:'Documentation'},
  {time:'15:30', update:'Empathy & Define workshop starts. Submit T01–T06 before Day 1 reflection.', pic:'Phase Trainer'},
  {time:'17:00', update:'Group trainers to update progress board and identify groups needing support.', pic:'Group Trainers'}
];

const PHASES = [
  {no:'01',name:'Empathy',trainer:'Phase Input Trainer A',output:'Interview Guide, Empathy Map, Persona, User Needs Summary',app:'T01–T04'},
  {no:'02',name:'Define',trainer:'Phase Input Trainer B',output:'POV Problem Statement and HMW Questions',app:'T05–T06'},
  {no:'03',name:'Ideation',trainer:'Phase Input Trainer C',output:'Brainstorming, SCAMPER, Idea Matrix, Final Idea',app:'T07–T10'},
  {no:'04',name:'Prototype',trainer:'Phase Input Trainer D',output:'Prototype Plan, Version Log, Prototype Evidence',app:'T11–T13'},
  {no:'05',name:'Test & Pitch',trainer:'Phase Input Trainer E',output:'Feedback, Improvement Plan, Final Reflection, Pitch Deck',app:'T14–T16'}
];
