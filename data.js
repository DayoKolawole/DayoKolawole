const PATHWAYS = {
  trucking: {
    id: 'trucking',
    title: 'Trucking & Logistics',
    icon: '🚛',
    trainingTime: '3–8 weeks',
    costRange: '$3,000–$10,000',
    entryDifficulty: 'Moderate',
    licensingRequired: 'Yes — AZ/DZ license required',
    firstJobBarrier: 'Moderate',
    description: 'Long-haul and local delivery driving, freight coordination, warehouse logistics.',
    diagnosticQuestions: [
      { id: 'license', text: 'Do you understand that you need an AZ or DZ license to drive commercially in Ontario?', weight: 3 },
      { id: 'employer', text: 'Have you verified what specific employers in your area require beyond a license (e.g., clean abstract, CVOR)?', weight: 2 },
      { id: 'training', text: 'Have you compared at least 2 MELT-approved training providers on cost, schedule, and pass rates?', weight: 2 },
      { id: 'wage', text: 'Do you know that entry-level long-haul drivers in Ontario typically earn $45,000–$60,000/year?', weight: 1 },
      { id: 'first90', text: 'Do you understand that most new drivers start with less desirable routes and schedules for the first 6–12 months?', weight: 2 },
      { id: 'physical', text: 'Are you able to pass a medical exam (including vision and hearing) required for a commercial license?', weight: 3 },
      { id: 'hidden', text: 'Are you aware of hidden costs like fuel deposits, safety gear, and time away from home?', weight: 2 },
      { id: 'contact', text: 'Have you spoken with at least one working truck driver about the day-to-day reality of the job?', weight: 1 },
    ],
    gaps: {
      credential: { label: 'Credential Gap', desc: 'AZ or DZ license is mandatory. Without it, no employer will consider you.', action: 'Enroll in a MELT-approved training program. Budget $4,000–$8,000 and 4–8 weeks.' },
      license: { label: 'License Gap', desc: 'Ontario requires MELT (Mandatory Entry-Level Training) completion before road test.', action: 'Contact DriveTest Ontario to understand the full licensing pathway and book your G-class upgrade if needed.' },
      experience: { label: 'Experience Gap', desc: 'Most carriers prefer 1+ year of experience. New drivers face limited options.', action: 'Target carriers with new-driver programs (e.g., Challenger, Kriska). Accept less ideal routes initially.' },
      resume: { label: 'Resume Gap', desc: 'Trucking resumes need to highlight safety record, route experience, and endorsements.', action: 'Rewrite your resume to emphasize reliability, safety, physical fitness, and any driving experience.' },
      communication: { label: 'Communication Gap', desc: 'Dispatchers, shippers, and border agents require clear English communication.', action: 'Practice logistics vocabulary and phone communication with dispatch scenarios.' },
      employer: { label: 'Employer Expectation Gap', desc: 'Employers check CVOR, criminal record, and driving abstract. Any issues are disqualifying.', action: 'Obtain your driving abstract and CVOR early. Address any issues before applying.' },
      funding: { label: 'Funding Gap', desc: 'Training costs $3,000–$10,000. Some programs accept Second Career or OSAP.', action: 'Apply to Second Career program through Employment Ontario. Check if your training provider accepts installments.' },
      market: { label: 'Local Market Gap', desc: 'Trucking demand varies by region and season in Ontario.', action: 'Research demand in your area on Job Bank Canada. Consider relocating to high-demand corridors (401, 400 series).' },
    },
    keywords: ['AZ license', 'DZ license', 'MELT', 'CVOR', 'long-haul', 'freight', 'logistics', 'commercial driving', 'clean abstract', 'hours of service'],
    certifications: ['AZ License', 'DZ License', 'MELT Certificate', 'TDG (Transportation of Dangerous Goods)', 'WHMIS'],
    resumeTips: {
      summary: 'Focus on safety record, physical stamina, reliability, and willingness to travel.',
      skills: ['Pre-trip inspection', 'Hours of service compliance', 'Load securement', 'GPS/ELD operation', 'Defensive driving'],
      avoid: ['Listing unrelated retail or office skills prominently', 'Omitting your driving abstract status', 'Generic objective statements'],
    },
    actionPlan: {
      verify: ['Confirm your G-class license is valid and your abstract is clean', 'Verify MELT training requirements with DriveTest Ontario', 'Check if your medical condition meets MTO standards'],
      contact: ['Employment Ontario office for Second Career funding eligibility', 'Two MELT-approved training schools for cost and schedule comparison', 'A working driver through a trucking forum or local trucking company'],
      improve: ['Practice backing and parking with a large vehicle if possible', 'Study the Ontario Highway Traffic Act commercial vehicle sections', 'Improve English communication for dispatch and border interactions'],
      avoid: ['Paying for non-MELT-approved training programs', 'Signing contracts with carriers that charge for training and lock you in', 'Ignoring the physical demands and lifestyle impact of long-haul driving'],
    },
  },
  healthcare: {
    id: 'healthcare',
    title: 'Healthcare Support',
    icon: '🏥',
    trainingTime: '4–12 months',
    costRange: '$2,000–$15,000',
    entryDifficulty: 'Moderate to High',
    licensingRequired: 'Yes — PSW certification or equivalent',
    firstJobBarrier: 'Low to Moderate',
    description: 'Personal support work, home care, long-term care facilities, hospital support roles.',
    diagnosticQuestions: [
      { id: 'license', text: 'Do you understand that PSW (Personal Support Worker) roles in Ontario require completion of an approved training program?', weight: 3 },
      { id: 'employer', text: 'Have you verified whether employers in your area require additional certifications like CPR/First Aid?', weight: 2 },
      { id: 'training', text: 'Have you compared PSW programs at different colleges and private career colleges on cost, length, and clinical placement quality?', weight: 2 },
      { id: 'wage', text: 'Do you know that PSWs in Ontario typically earn $18–$25/hour, with long-term care often paying more than home care?', weight: 1 },
      { id: 'first90', text: 'Do you understand that the first months involve physically and emotionally demanding work with vulnerable populations?', weight: 2 },
      { id: 'physical', text: 'Are you physically able to lift, transfer, and assist patients, and emotionally prepared for end-of-life care?', weight: 3 },
      { id: 'hidden', text: 'Are you aware of costs like uniform, shoes, police vulnerable sector check, and immunization records?', weight: 2 },
      { id: 'contact', text: 'Have you spoken with a working PSW about shift work, patient ratios, and workplace realities?', weight: 1 },
    ],
    gaps: {
      credential: { label: 'Credential Gap', desc: 'PSW certificate from a NACC-recognized or Ministry-approved program is required.', action: 'Enroll in an approved PSW program. Public college programs cost less but have waitlists.' },
      license: { label: 'License Gap', desc: 'PSW is not a regulated profession in Ontario, but employers require the certificate.', action: 'Complete an approved PSW program (600+ hours including clinical placement).' },
      experience: { label: 'Experience Gap', desc: 'Clinical placement hours are essential. Home care agencies may hire new grads faster.', action: 'Maximize your clinical placement performance. Volunteer at a long-term care home if possible.' },
      resume: { label: 'Resume Gap', desc: 'Healthcare resumes must highlight empathy, physical capability, and relevant training.', action: 'Highlight caregiving experience, volunteer work, and any medical terminology knowledge.' },
      communication: { label: 'Communication Gap', desc: 'Clear English is critical for patient safety, charting, and team communication.', action: 'Practice medical terminology and patient communication scenarios. Take a healthcare English course if needed.' },
      employer: { label: 'Employer Expectation Gap', desc: 'Employers require vulnerable sector police check, TB test, CPR, and immunization records.', action: 'Start your police check early (takes 2–8 weeks). Get CPR/First Aid certified. Update immunizations.' },
      funding: { label: 'Funding Gap', desc: 'PSW programs range from $2,000 (public) to $15,000 (private). OSAP may cover public colleges.', action: 'Apply to public college programs first. Check OSAP eligibility. Ask about employer-sponsored training.' },
      market: { label: 'Local Market Gap', desc: 'PSW demand is very high across Ontario, especially in long-term care and home care.', action: 'Research employers in your area. Long-term care homes, home care agencies, and hospitals all hire PSWs.' },
    },
    keywords: ['PSW', 'personal support worker', 'patient care', 'long-term care', 'home care', 'clinical placement', 'NACC', 'CPR', 'First Aid', 'vital signs'],
    certifications: ['PSW Certificate', 'CPR/First Aid', 'WHMIS', 'Food Handler Certificate', 'Gentle Persuasive Approaches (GPA)'],
    resumeTips: {
      summary: 'Emphasize compassion, physical stamina, attention to detail, and commitment to patient dignity.',
      skills: ['Patient transfers and mobility assistance', 'Vital signs monitoring', 'Personal hygiene care', 'Meal preparation and feeding', 'Documentation and charting'],
      avoid: ['Listing unrelated technical skills prominently', 'Omitting volunteer caregiving experience', 'Using clinical jargon without context'],
    },
    actionPlan: {
      verify: ['Confirm your chosen PSW program is Ministry-approved or NACC-recognized', 'Check whether your immunization records are up to date', 'Verify the police vulnerable sector check processing time in your area'],
      contact: ['A public college PSW program coordinator for waitlist and intake information', 'A local home care agency (e.g., SE Health, ParaMed) about hiring timelines', 'A working PSW through a healthcare worker forum or union chapter'],
      improve: ['Complete a CPR/First Aid certification', 'Study basic medical terminology', 'Practice patient transfer techniques through online demonstrations'],
      avoid: ['Enrolling in a non-approved private career college without checking reviews', 'Underestimating the physical and emotional demands of the role', 'Ignoring the importance of clinical placement quality in your training program'],
    },
  },
  trades: {
    id: 'trades',
    title: 'Skilled Trades',
    icon: '🔧',
    trainingTime: '2–5 years (apprenticeship)',
    costRange: '$1,000–$5,000 (in-school portions)',
    entryDifficulty: 'Moderate',
    licensingRequired: 'Yes — Certificate of Qualification for compulsory trades',
    firstJobBarrier: 'Moderate to High',
    description: 'Electrician, plumber, HVAC technician, welder, carpenter, millwright, and other skilled trades.',
    diagnosticQuestions: [
      { id: 'license', text: 'Do you understand that many trades in Ontario are compulsory (e.g., electrician, plumber) and require a Certificate of Qualification?', weight: 3 },
      { id: 'employer', text: 'Have you identified employers or unions willing to sponsor apprentices in your chosen trade?', weight: 2 },
      { id: 'training', text: 'Have you explored pre-apprenticeship programs that can help you get started without an employer sponsor?', weight: 2 },
      { id: 'wage', text: 'Do you know that apprentice wages start at 40–60% of journeyperson rate and increase each year?', weight: 1 },
      { id: 'first90', text: 'Do you understand that apprenticeships require 4–5 years of on-the-job and in-school training?', weight: 2 },
      { id: 'physical', text: 'Are you physically capable of performing trade-specific tasks (lifting, climbing, working in confined spaces)?', weight: 3 },
      { id: 'hidden', text: 'Are you aware of costs for tools, safety equipment, union dues, and exam fees?', weight: 2 },
      { id: 'contact', text: 'Have you spoken with a journeyperson or apprentice in your chosen trade about the reality of the work?', weight: 1 },
    ],
    gaps: {
      credential: { label: 'Credential Gap', desc: 'Compulsory trades require a Certificate of Qualification. Voluntary trades benefit from certification.', action: 'Register as an apprentice through the Ontario College of Trades (now Skilled Trades Ontario).' },
      license: { label: 'License Gap', desc: 'You must complete apprenticeship hours and pass the C of Q exam to work independently in compulsory trades.', action: 'Find an employer sponsor or enroll in a pre-apprenticeship program to begin your pathway.' },
      experience: { label: 'Experience Gap', desc: 'Apprenticeships require thousands of on-the-job hours. Finding a sponsor is the biggest barrier.', action: 'Apply to union apprenticeship programs. Attend job fairs. Consider pre-apprenticeship programs.' },
      resume: { label: 'Resume Gap', desc: 'Trade resumes need to show hands-on ability, safety awareness, and tool proficiency.', action: 'Highlight any hands-on experience, construction work, maintenance, or relevant volunteer work.' },
      communication: { label: 'Communication Gap', desc: 'Tradespeople must read blueprints, follow codes, and communicate with teams and inspectors.', action: 'Practice reading technical drawings. Study the Ontario Building Code basics for your trade.' },
      employer: { label: 'Employer Expectation Gap', desc: 'Employers want reliable, safety-conscious workers who show up on time and learn quickly.', action: 'Get safety certifications (Working at Heights, WHMIS) before applying. Demonstrate reliability.' },
      funding: { label: 'Funding Gap', desc: 'Apprentices earn while learning. In-school costs are modest. Tools can be expensive.', action: 'Apply for apprenticeship grants (Ontario Apprenticeship Training Tax Credit). Budget for tools gradually.' },
      market: { label: 'Local Market Gap', desc: 'Trades demand varies. Electricians, plumbers, and HVAC are in high demand across Ontario.', action: 'Research demand for your specific trade in your region through Skilled Trades Ontario and Job Bank.' },
    },
    keywords: ['apprenticeship', 'journeyperson', 'Certificate of Qualification', 'Skilled Trades Ontario', 'Red Seal', 'blueprint reading', 'Ontario Building Code', 'compulsory trade'],
    certifications: ['Certificate of Qualification', 'Red Seal Endorsement', 'Working at Heights', 'WHMIS', 'Fall Protection', 'Confined Space Entry'],
    resumeTips: {
      summary: 'Highlight hands-on skills, safety record, tool proficiency, and reliability.',
      skills: ['Blueprint and schematic reading', 'Hand and power tool operation', 'Safety protocol compliance', 'Problem-solving in field conditions', 'Team coordination on job sites'],
      avoid: ['Omitting any construction or maintenance experience, even informal', 'Not mentioning safety certifications', 'Using vague descriptions instead of specific tasks performed'],
    },
    actionPlan: {
      verify: ['Confirm whether your chosen trade is compulsory or voluntary in Ontario', 'Check pre-apprenticeship program availability at your nearest college', 'Verify whether your international credentials can be assessed through Skilled Trades Ontario'],
      contact: ['Skilled Trades Ontario for apprenticeship registration requirements', 'A local union hall for apprenticeship intake schedules', 'A pre-apprenticeship program coordinator at a community college'],
      improve: ['Complete Working at Heights and WHMIS certifications', 'Practice basic math and measurement skills used in your trade', 'Build familiarity with common tools through workshops or online tutorials'],
      avoid: ['Paying for unaccredited trade training programs', 'Skipping safety certifications that employers consider mandatory', 'Underestimating the time commitment of a full apprenticeship'],
    },
  },
};

const EDUCATION_LEVELS = [
  'Less than high school',
  'High school diploma or GED',
  'Some college or trade school',
  'College diploma or certificate',
  'Bachelor\'s degree',
  'Master\'s degree or higher',
  'International credential (not yet assessed)',
];

const JOB_STATUSES = [
  'Unemployed — actively looking',
  'Unemployed — not currently looking',
  'Employed — looking to switch',
  'Employed — underemployed',
  'Student',
  'New to Canada',
];

const INCOME_RANGES = [
  'Under $30,000/year',
  '$30,000–$45,000/year',
  '$45,000–$60,000/year',
  '$60,000–$80,000/year',
  '$80,000+/year',
  'Not sure yet',
];

const TRAINING_BUDGETS = [
  'Under $1,000',
  '$1,000–$3,000',
  '$3,000–$5,000',
  '$5,000–$10,000',
  '$10,000+',
  'Need funding assistance',
];

const TRAINING_TIME = [
  'Less than 1 month',
  '1–3 months',
  '3–6 months',
  '6–12 months',
  '1–2 years',
  '2+ years',
];

const WORK_TYPES = [
  'Hands-on / physical',
  'Office / administrative',
  'Driving / transportation',
  'Technical / IT',
  'Healthcare / caregiving',
  'Logistics / warehouse',
  'Customer-facing / sales',
  'Remote / work from home',
];

const USER_TYPES = [
  'Newcomer to Canada',
  'Career switcher',
  'Student or recent graduate',
  'Experienced worker looking to upskill',
  'Returning to workforce',
];

const CONFIDENCE_LEVELS = [
  'Very confident',
  'Somewhat confident',
  'Need improvement',
  'Significant barrier',
];

const ONTARIO_LOCATIONS = [
  'Toronto / GTA',
  'Ottawa',
  'Hamilton',
  'London',
  'Kitchener-Waterloo',
  'Windsor',
  'Sudbury',
  'Thunder Bay',
  'Barrie',
  'Kingston',
  'Other Ontario location',
];
