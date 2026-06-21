const state = {
  screen: 'landing',
  profile: {},
  selectedPathway: null,
  diagnosticAnswers: {},
  resumeText: '',
  resultTab: 'dashboard',
};

function render() {
  const app = document.getElementById('app');
  let html = '';
  if (state.screen !== 'landing') {
    html += renderHeader();
    html += renderProgress();
  }
  switch (state.screen) {
    case 'landing': html += renderLanding(); break;
    case 'profile': html += renderProfile(); break;
    case 'careers': html += renderCareers(); break;
    case 'diagnostic': html += renderDiagnostic(); break;
    case 'results': html += renderResults(); break;
  }
  app.innerHTML = html;
  bindEvents();
}

function renderHeader() {
  const canGoBack = state.screen !== 'landing';
  return `<div class="header">
    <div>${canGoBack ? `<button class="header-back" onclick="goBack()">← Back</button>` : ''}</div>
    <div class="header-logo">WPI <span>Pathway Intelligence</span></div>
    <div style="width:60px"></div>
  </div>`;
}

function renderProgress() {
  const steps = { profile: 20, careers: 40, diagnostic: 60, results: 100 };
  const pct = steps[state.screen] || 0;
  return `<div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>`;
}

function goBack() {
  const order = ['landing', 'profile', 'careers', 'diagnostic', 'results'];
  const idx = order.indexOf(state.screen);
  if (idx > 0) { state.screen = order[idx - 1]; render(); }
}

// ── Landing ──
function renderLanding() {
  return `<div class="screen landing">
    <div class="landing-badge">Ontario, Canada — Prototype</div>
    <h1>Know the pathway before you spend the money.</h1>
    <p>WPI helps you understand career requirements, hidden risks, employer expectations, and your next best move.</p>
    <div class="landing-features">
      <div class="landing-feature"><strong>Pathway Fit</strong>See if a career matches your situation</div>
      <div class="landing-feature"><strong>Hidden Risks</strong>Uncover costs and barriers others miss</div>
      <div class="landing-feature"><strong>Employer Reality</strong>Learn what employers actually expect</div>
      <div class="landing-feature"><strong>Action Plan</strong>Get concrete next steps, not vague advice</div>
    </div>
    <button class="btn btn-primary" onclick="navigate('profile')">Start Pathway Check</button>
    <button class="btn btn-secondary" onclick="navigate('careers')">Explore Career Fields</button>
    <p class="text-sm text-muted" style="margin-top:24px">No account required. Your data stays on your device.</p>
  </div>`;
}

// ── Profile ──
function renderProfile() {
  const p = state.profile;
  return `<div class="screen">
    <h2 class="section-title">About You</h2>
    <p class="section-subtitle">This helps us match you to the right pathways and identify gaps.</p>
    <div class="form-group">
      <label class="form-label">Location</label>
      <select class="form-select" id="f-location">
        <option value="">Select your location</option>
        ${ONTARIO_LOCATIONS.map(l => `<option value="${l}" ${p.location === l ? 'selected' : ''}>${l}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Education Level</label>
      <select class="form-select" id="f-education">
        <option value="">Select education level</option>
        ${EDUCATION_LEVELS.map(e => `<option value="${e}" ${p.education === e ? 'selected' : ''}>${e}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Years of Work Experience</label>
      <input type="number" class="form-input" id="f-experience" placeholder="e.g. 5" value="${p.experience || ''}">
    </div>
    <div class="form-group">
      <label class="form-label">Current Job Status</label>
      <select class="form-select" id="f-jobstatus">
        <option value="">Select status</option>
        ${JOB_STATUSES.map(s => `<option value="${s}" ${p.jobStatus === s ? 'selected' : ''}>${s}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Target Income Range</label>
      <select class="form-select" id="f-income">
        <option value="">Select range</option>
        ${INCOME_RANGES.map(i => `<option value="${i}" ${p.income === i ? 'selected' : ''}>${i}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Available Training Budget</label>
      <select class="form-select" id="f-budget">
        <option value="">Select budget</option>
        ${TRAINING_BUDGETS.map(b => `<option value="${b}" ${p.budget === b ? 'selected' : ''}>${b}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Time Available for Training</label>
      <select class="form-select" id="f-time">
        <option value="">Select timeframe</option>
        ${TRAINING_TIME.map(t => `<option value="${t}" ${p.time === t ? 'selected' : ''}>${t}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Preferred Work Type <span class="form-sublabel">Select all that apply</span></label>
      <div class="form-chips" id="f-worktypes">
        ${WORK_TYPES.map(w => `<div class="form-chip ${(p.workTypes || []).includes(w) ? 'active' : ''}" data-value="${w}">${w}</div>`).join('')}
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Existing Licenses or Certifications</label>
      <input type="text" class="form-input" id="f-certs" placeholder="e.g. G license, CPR, WHMIS" value="${p.certs || ''}">
    </div>
    <div class="form-group">
      <label class="form-label">English Workplace Communication Confidence</label>
      <select class="form-select" id="f-english">
        <option value="">Select level</option>
        ${CONFIDENCE_LEVELS.map(c => `<option value="${c}" ${p.english === c ? 'selected' : ''}>${c}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Is your resume ready for job applications?</label>
      <select class="form-select" id="f-resume">
        <option value="">Select</option>
        <option value="Yes" ${p.resumeReady === 'Yes' ? 'selected' : ''}>Yes, it's up to date</option>
        <option value="Needs work" ${p.resumeReady === 'Needs work' ? 'selected' : ''}>Needs work</option>
        <option value="No resume" ${p.resumeReady === 'No resume' ? 'selected' : ''}>I don't have one</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Which best describes you?</label>
      <select class="form-select" id="f-usertype">
        <option value="">Select</option>
        ${USER_TYPES.map(u => `<option value="${u}" ${p.userType === u ? 'selected' : ''}>${u}</option>`).join('')}
      </select>
    </div>
    <button class="btn btn-primary mt-16" onclick="saveProfile()">Continue to Career Fields</button>
  </div>`;
}

function saveProfile() {
  state.profile = {
    location: document.getElementById('f-location').value,
    education: document.getElementById('f-education').value,
    experience: document.getElementById('f-experience').value,
    jobStatus: document.getElementById('f-jobstatus').value,
    income: document.getElementById('f-income').value,
    budget: document.getElementById('f-budget').value,
    time: document.getElementById('f-time').value,
    workTypes: [...document.querySelectorAll('#f-worktypes .form-chip.active')].map(c => c.dataset.value),
    certs: document.getElementById('f-certs').value,
    english: document.getElementById('f-english').value,
    resumeReady: document.getElementById('f-resume').value,
    userType: document.getElementById('f-usertype').value,
  };
  navigate('careers');
}

// ── Career Selection ──
function renderCareers() {
  return `<div class="screen">
    <h2 class="section-title">Explore Career Pathways</h2>
    <p class="section-subtitle">Select a pathway to run a diagnostic check. Data reflects Ontario, Canada.</p>
    <div class="career-grid">
      ${Object.values(PATHWAYS).map(p => `
        <div class="career-card ${state.selectedPathway === p.id ? 'selected' : ''}" onclick="selectPathway('${p.id}')">
          <div class="career-card-banner ${p.bannerClass}">
            <div class="career-card-banner-icon">${p.icon}</div>
            <div class="career-card-banner-label">${p.bannerLabel}</div>
          </div>
          <div class="career-card-body">
            <div class="career-card-header">
              <div class="career-card-title">${p.title}</div>
            </div>
            <div class="career-card-desc">${p.description}</div>
            <div class="career-card-meta">
              <div class="career-meta-item"><strong>${p.trainingTime}</strong>Training time</div>
              <div class="career-meta-item"><strong>${p.costRange}</strong>Estimated cost</div>
              <div class="career-meta-item"><strong>${p.entryDifficulty}</strong>Entry difficulty</div>
              <div class="career-meta-item"><strong>${p.firstJobBarrier}</strong>First-job barrier</div>
            </div>
          </div>
        </div>
      `).join('')}
      <div class="career-card" style="opacity:0.5; pointer-events:none;">
        <div class="career-card-banner coming-soon">
          <div class="career-card-banner-icon">🔍</div>
          <div class="career-card-banner-label">Coming Soon</div>
        </div>
        <div class="career-card-body">
          <div class="career-card-header">
            <div class="career-card-title">More Pathways Coming Soon</div>
          </div>
          <div class="career-card-desc">IT & Cybersecurity, Administration, Construction, Manufacturing, Customer Service — available in future updates.</div>
        </div>
      </div>
    </div>
    ${state.selectedPathway ? `<button class="btn btn-primary mt-24" onclick="navigate('diagnostic')">Run Pathway Diagnostic</button>` : ''}
  </div>`;
}

function selectPathway(id) {
  state.selectedPathway = id;
  state.diagnosticAnswers = {};
  render();
}

// ── Diagnostic ──
function renderDiagnostic() {
  const pw = PATHWAYS[state.selectedPathway];
  return `<div class="screen">
    <h2 class="section-title">Pathway Diagnostic</h2>
    <p class="section-subtitle">${pw.title} — Answer honestly for accurate results.</p>
    ${pw.diagnosticQuestions.map((q, i) => `
      <div class="diagnostic-question">
        <p>${i + 1}. ${q.text}</p>
        <div class="diagnostic-options">
          <div class="diagnostic-opt yes ${state.diagnosticAnswers[q.id] === 'yes' ? 'active' : ''}" onclick="answerDiag('${q.id}','yes')">Yes</div>
          <div class="diagnostic-opt unsure ${state.diagnosticAnswers[q.id] === 'unsure' ? 'active' : ''}" onclick="answerDiag('${q.id}','unsure')">Not Sure</div>
          <div class="diagnostic-opt no ${state.diagnosticAnswers[q.id] === 'no' ? 'active' : ''}" onclick="answerDiag('${q.id}','no')">No</div>
        </div>
      </div>
    `).join('')}
    <button class="btn btn-primary mt-16" onclick="navigate('results')">View Results</button>
  </div>`;
}

function answerDiag(id, val) {
  state.diagnosticAnswers[id] = val;
  render();
}

// ── Results ──
function computeScores() {
  const pw = PATHWAYS[state.selectedPathway];
  const answers = state.diagnosticAnswers;
  let totalWeight = 0, earned = 0;
  pw.diagnosticQuestions.forEach(q => {
    totalWeight += q.weight;
    if (answers[q.id] === 'yes') earned += q.weight;
    else if (answers[q.id] === 'unsure') earned += q.weight * 0.3;
  });
  const readiness = totalWeight > 0 ? Math.round((earned / totalWeight) * 100) : 0;

  const p = state.profile;
  const costRisk = (p.budget === 'Under $1,000' || p.budget === 'Need funding assistance') ? 85 : (p.budget === '$1,000–$3,000') ? 60 : 30;
  const credRisk = answers.license === 'yes' ? 25 : answers.license === 'unsure' ? 55 : 85;
  const employerRisk = answers.employer === 'yes' ? 20 : answers.employer === 'unsure' ? 50 : 80;
  const barrierRisk = answers.first90 === 'yes' ? 20 : answers.first90 === 'unsure' ? 50 : 75;
  const resumeScore = p.resumeReady === 'Yes' ? 80 : p.resumeReady === 'Needs work' ? 45 : 15;
  const commRisk = p.english === 'Very confident' ? 15 : p.english === 'Somewhat confident' ? 40 : 75;

  let fitLabel, fitClass;
  if (readiness >= 70) { fitLabel = 'Strong Fit'; fitClass = 'strong'; }
  else if (readiness >= 45) { fitLabel = 'Moderate Fit'; fitClass = 'moderate'; }
  else if (readiness >= 25) { fitLabel = 'Weak Fit'; fitClass = 'weak'; }
  else { fitLabel = 'High Risk'; fitClass = 'high-risk'; }

  const timeline = readiness >= 70 ? '1–3 months' : readiness >= 45 ? '3–6 months' : '6–12+ months';
  const nextStep = readiness >= 70
    ? 'Begin comparing training providers and verify employer requirements.'
    : readiness >= 45
    ? 'Address credential and knowledge gaps before committing to training.'
    : 'Conduct more research. Speak to people in the field before spending money.';

  return { readiness, costRisk, credRisk, employerRisk, barrierRisk, resumeScore, commRisk, fitLabel, fitClass, timeline, nextStep };
}

function riskColor(val) { return val <= 35 ? 'green' : val <= 60 ? 'yellow' : 'red'; }
function scoreColor(val) { return val >= 65 ? 'green' : val >= 40 ? 'yellow' : 'red'; }

function renderResults() {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'gaps', label: 'Gap Map' },
    { id: 'plan', label: 'Action Plan' },
    { id: 'resume', label: 'Resume' },
    { id: 'report', label: 'Report' },
  ];
  return `<div class="screen">
    <div class="tab-nav">
      ${tabs.map(t => `<button class="tab-btn ${state.resultTab === t.id ? 'active' : ''}" onclick="switchTab('${t.id}')">${t.label}</button>`).join('')}
    </div>
    <div id="tab-content">${renderTabContent()}</div>
  </div>`;
}

function switchTab(tab) {
  state.resultTab = tab;
  render();
}

function renderTabContent() {
  switch (state.resultTab) {
    case 'dashboard': return renderDashboard();
    case 'gaps': return renderGapMap();
    case 'plan': return renderActionPlan();
    case 'resume': return renderResume();
    case 'report': return renderReport();
  }
}

function renderDashboard() {
  const s = computeScores();
  const pw = PATHWAYS[state.selectedPathway];
  return `
    <div class="score-hero">
      <div class="score-hero-label">Pathway Fit Score</div>
      <div class="score-hero-value ${s.fitClass}">${s.fitLabel}</div>
      <div class="score-hero-pathway">${pw.icon} ${pw.title}</div>
    </div>
    <div class="score-grid">
      ${scoreCard('Readiness', s.readiness + '%', s.readiness, scoreColor(s.readiness))}
      ${scoreCard('Cost Risk', s.costRisk + '%', s.costRisk, riskColor(100 - s.costRisk))}
      ${scoreCard('Credential Risk', s.credRisk + '%', s.credRisk, riskColor(100 - s.credRisk))}
      ${scoreCard('Employer Risk', s.employerRisk + '%', s.employerRisk, riskColor(100 - s.employerRisk))}
      ${scoreCard('First-Job Barrier', s.barrierRisk + '%', s.barrierRisk, riskColor(100 - s.barrierRisk))}
      ${scoreCard('Resume Alignment', s.resumeScore + '%', s.resumeScore, scoreColor(s.resumeScore))}
    </div>
    <div class="result-section">
      <div class="result-section-title"><span class="icon">⏱</span> Timeline to Entry</div>
      <p class="text-sm">${s.timeline}</p>
    </div>
    <div class="result-section">
      <div class="result-section-title"><span class="icon">→</span> Recommended Next Step</div>
      <p class="text-sm">${s.nextStep}</p>
    </div>
  `;
}

function scoreCard(label, value, pct, color) {
  return `<div class="score-card">
    <div class="score-card-label">${label}</div>
    <div class="score-card-value" style="color:var(--${color})">${value}</div>
    <div class="score-card-bar"><div class="score-card-bar-fill ${color}" style="width:${pct}%"></div></div>
  </div>`;
}

function renderGapMap() {
  const pw = PATHWAYS[state.selectedPathway];
  const answers = state.diagnosticAnswers;
  const p = state.profile;

  const gapStatus = {
    credential: answers.license !== 'yes',
    license: answers.license !== 'yes',
    experience: answers.first90 !== 'yes',
    resume: p.resumeReady !== 'Yes',
    communication: p.english !== 'Very confident',
    employer: answers.employer !== 'yes',
    funding: p.budget === 'Under $1,000' || p.budget === 'Need funding assistance',
    market: answers.contact !== 'yes',
  };

  return `<div class="result-section">
    <div class="result-section-title"><span class="icon">🗺</span> Gap Map — ${pw.title}</div>
    ${Object.entries(pw.gaps).map(([key, gap]) => {
      const hasGap = gapStatus[key];
      return `<div class="gap-item">
        <div class="gap-item-header">
          <div class="gap-item-label">${gap.label}</div>
          <span class="gap-badge ${hasGap ? 'found' : 'clear'}">${hasGap ? 'Gap Found' : 'Clear'}</span>
        </div>
        ${hasGap ? `<div class="gap-item-desc">${gap.desc}</div><div class="gap-item-action">→ ${gap.action}</div>` : ''}
      </div>`;
    }).join('')}
  </div>`;
}

function renderActionPlan() {
  const pw = PATHWAYS[state.selectedPathway];
  const ap = pw.actionPlan;
  return `<div class="result-section">
    <div class="result-section-title"><span class="icon">📋</span> 30-Day Action Plan — ${pw.title}</div>
    ${actionGroup('3 Things to Verify', ap.verify)}
    ${actionGroup('3 People or Organizations to Contact', ap.contact)}
    ${actionGroup('3 Skills to Improve', ap.improve)}
    ${actionGroup('3 Mistakes to Avoid', ap.avoid)}
  </div>
  <div class="result-section">
    <div class="result-section-title"><span class="icon">📄</span> Resume Improvements</div>
    <p class="text-sm mb-12">${pw.resumeTips.summary}</p>
    <div class="action-group-title">Key skills to highlight:</div>
    <ul class="action-list">${pw.resumeTips.skills.map(s => `<li>${s}</li>`).join('')}</ul>
    <div class="action-group-title mt-16">Avoid:</div>
    <ul class="action-list">${pw.resumeTips.avoid.map(s => `<li>${s}</li>`).join('')}</ul>
  </div>
  <div class="result-section">
    <div class="result-section-title"><span class="icon">❓</span> Questions to Ask</div>
    <div class="action-group-title">Ask training providers:</div>
    <ul class="action-list">
      <li>What is your program completion and job placement rate?</li>
      <li>Is your program approved by the relevant Ontario licensing body?</li>
      <li>Do you offer payment plans or help with government funding applications?</li>
    </ul>
    <div class="action-group-title mt-16">Ask employers:</div>
    <ul class="action-list">
      <li>What do you look for beyond the basic credential?</li>
      <li>What does a typical first 90 days look like for new hires?</li>
      <li>What are the most common reasons new hires don't work out?</li>
    </ul>
  </div>`;
}

function actionGroup(title, items) {
  return `<div class="action-group">
    <div class="action-group-title">${title}</div>
    <ul class="action-list">${items.map(i => `<li>${i}</li>`).join('')}</ul>
  </div>`;
}

function renderResume() {
  const pw = PATHWAYS[state.selectedPathway];
  return `<div class="result-section">
    <div class="result-section-title"><span class="icon">📝</span> Does Your Resume Match This Pathway?</div>
    <p class="text-sm mb-12">Paste your resume content below to see how it aligns with ${pw.title} requirements.</p>
    <textarea class="form-textarea" id="resume-input" rows="8" placeholder="Paste your resume text here...">${state.resumeText}</textarea>
    <button class="btn btn-primary mt-16" onclick="analyzeResume()">Analyze Resume</button>
  </div>
  <div id="resume-results">${state.resumeText ? renderResumeResults() : ''}</div>`;
}

function analyzeResume() {
  state.resumeText = document.getElementById('resume-input').value;
  render();
}

function renderResumeResults() {
  const pw = PATHWAYS[state.selectedPathway];
  const text = state.resumeText.toLowerCase();
  const foundKw = pw.keywords.filter(k => text.includes(k.toLowerCase()));
  const missingKw = pw.keywords.filter(k => !text.includes(k.toLowerCase()));
  const foundCerts = pw.certifications.filter(c => text.includes(c.toLowerCase()));
  const missingCerts = pw.certifications.filter(c => !text.includes(c.toLowerCase()));

  const matchPct = pw.keywords.length > 0 ? Math.round((foundKw.length / pw.keywords.length) * 100) : 0;

  return `
    <div class="result-section">
      <div class="result-section-title"><span class="icon">📊</span> Resume Analysis</div>
      <div class="score-hero" style="margin-bottom:16px">
        <div class="score-hero-label">Keyword Match</div>
        <div class="score-hero-value ${matchPct >= 60 ? 'strong' : matchPct >= 30 ? 'moderate' : 'weak'}">${matchPct}%</div>
      </div>
      <div class="resume-comparison">
        <div class="resume-comparison-label">Keywords Found</div>
        ${foundKw.map(k => `<span class="resume-tag found">${k}</span>`).join('') || '<span class="text-sm text-muted">None found</span>'}
      </div>
      <div class="resume-comparison">
        <div class="resume-comparison-label">Keywords Missing</div>
        ${missingKw.map(k => `<span class="resume-tag missing">${k}</span>`).join('')}
      </div>
      <div class="resume-comparison">
        <div class="resume-comparison-label">Certifications Found</div>
        ${foundCerts.map(c => `<span class="resume-tag found">${c}</span>`).join('') || '<span class="text-sm text-muted">None found</span>'}
      </div>
      <div class="resume-comparison">
        <div class="resume-comparison-label">Certifications to Add</div>
        ${missingCerts.map(c => `<span class="resume-tag missing">${c}</span>`).join('')}
      </div>
    </div>
    <div class="result-section">
      <div class="result-section-title"><span class="icon">💡</span> Suggestions</div>
      <ul class="action-list">
        <li>Add missing keywords naturally into your experience descriptions</li>
        <li>List relevant certifications prominently — even if in progress</li>
        <li>Frame transferable skills using ${pw.title.toLowerCase()} terminology</li>
        <li>Write a role-specific summary targeting ${pw.title.toLowerCase()} positions</li>
        <li>${pw.resumeTips.summary}</li>
      </ul>
    </div>`;
}

function renderReport() {
  const s = computeScores();
  const pw = PATHWAYS[state.selectedPathway];
  const p = state.profile;
  const answers = state.diagnosticAnswers;

  const gapStatus = {
    credential: answers.license !== 'yes',
    license: answers.license !== 'yes',
    experience: answers.first90 !== 'yes',
    resume: p.resumeReady !== 'Yes',
    communication: p.english !== 'Very confident',
    employer: answers.employer !== 'yes',
    funding: p.budget === 'Under $1,000' || p.budget === 'Need funding assistance',
    market: answers.contact !== 'yes',
  };
  const gapCount = Object.values(gapStatus).filter(Boolean).length;

  return `
    <div class="result-section">
      <div class="result-section-title"><span class="icon">📑</span> WPI Pathway Report</div>
      <div class="report-section">
        <div class="action-group-title">Profile Summary</div>
        ${reportRow('Location', p.location || 'Not specified')}
        ${reportRow('Education', p.education || 'Not specified')}
        ${reportRow('Experience', p.experience ? p.experience + ' years' : 'Not specified')}
        ${reportRow('Status', p.jobStatus || 'Not specified')}
        ${reportRow('User Type', p.userType || 'Not specified')}
        ${reportRow('English Confidence', p.english || 'Not specified')}
        ${reportRow('Resume Ready', p.resumeReady || 'Not specified')}
      </div>
      <div class="report-section">
        <div class="action-group-title">Pathway Analysis</div>
        ${reportRow('Selected Pathway', pw.title)}
        ${reportRow('Fit Score', s.fitLabel)}
        ${reportRow('Readiness', s.readiness + '%')}
        ${reportRow('Cost Risk', s.costRisk + '%')}
        ${reportRow('Credential Risk', s.credRisk + '%')}
        ${reportRow('Employer Risk', s.employerRisk + '%')}
        ${reportRow('Resume Alignment', s.resumeScore + '%')}
        ${reportRow('Timeline to Entry', s.timeline)}
        ${reportRow('Gaps Identified', gapCount + ' of 8')}
      </div>
      <div class="report-section">
        <div class="action-group-title">Training Caution</div>
        <p class="text-sm text-muted">Do not commit to a training program until you have verified licensing requirements, compared at least two providers, and confirmed employer expectations in your local area. Cost alone does not indicate quality.</p>
      </div>
      <div class="report-section">
        <div class="action-group-title">Employer Reality</div>
        <p class="text-sm text-muted">Employers in ${pw.title.toLowerCase()} look beyond credentials. Reliability, safety awareness, and communication skills are consistently cited as differentiators for new hires.</p>
      </div>
      <div class="report-section">
        <div class="action-group-title">Next Step</div>
        <p class="text-sm">${s.nextStep}</p>
      </div>
    </div>
    <button class="btn btn-primary" onclick="downloadReport()">Download Report</button>
    <button class="btn btn-secondary" onclick="navigate('landing')">Start Over</button>
  `;
}

function reportRow(label, value) {
  return `<div class="report-row"><span class="report-label">${label}</span><span class="report-value">${value}</span></div>`;
}

function downloadReport() {
  const s = computeScores();
  const pw = PATHWAYS[state.selectedPathway];
  const p = state.profile;
  const answers = state.diagnosticAnswers;

  const gapStatus = {
    credential: answers.license !== 'yes',
    license: answers.license !== 'yes',
    experience: answers.first90 !== 'yes',
    resume: p.resumeReady !== 'Yes',
    communication: p.english !== 'Very confident',
    employer: answers.employer !== 'yes',
    funding: p.budget === 'Under $1,000' || p.budget === 'Need funding assistance',
    market: answers.contact !== 'yes',
  };

  let text = `WPI PATHWAY REPORT\n${'='.repeat(40)}\nGenerated: ${new Date().toLocaleDateString()}\n\n`;
  text += `PROFILE\n${'-'.repeat(20)}\n`;
  text += `Location: ${p.location || 'N/A'}\nEducation: ${p.education || 'N/A'}\nExperience: ${p.experience || 'N/A'} years\nStatus: ${p.jobStatus || 'N/A'}\nType: ${p.userType || 'N/A'}\nEnglish: ${p.english || 'N/A'}\nResume: ${p.resumeReady || 'N/A'}\n\n`;
  text += `PATHWAY: ${pw.title}\n${'-'.repeat(20)}\n`;
  text += `Fit Score: ${s.fitLabel}\nReadiness: ${s.readiness}%\nCost Risk: ${s.costRisk}%\nCredential Risk: ${s.credRisk}%\nEmployer Risk: ${s.employerRisk}%\nResume Alignment: ${s.resumeScore}%\nTimeline: ${s.timeline}\n\n`;
  text += `GAPS IDENTIFIED\n${'-'.repeat(20)}\n`;
  Object.entries(pw.gaps).forEach(([key, gap]) => {
    if (gapStatus[key]) text += `• ${gap.label}: ${gap.desc}\n  Action: ${gap.action}\n\n`;
  });
  text += `NEXT STEP\n${'-'.repeat(20)}\n${s.nextStep}\n\n`;
  text += `CAUTION\n${'-'.repeat(20)}\nDo not commit to training until you have verified licensing requirements, compared providers, and confirmed employer expectations.\n`;

  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `WPI-Report-${pw.title.replace(/\s+/g, '-')}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── Navigation & Events ──
function navigate(screen) {
  state.screen = screen;
  if (screen === 'results') state.resultTab = 'dashboard';
  render();
  window.scrollTo(0, 0);
}

function bindEvents() {
  document.querySelectorAll('#f-worktypes .form-chip').forEach(chip => {
    chip.addEventListener('click', () => chip.classList.toggle('active'));
  });
}

render();
