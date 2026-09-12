import { RoadmapStep, CoreCapability, ProjectItem, SkillItem, SocialLink } from '../types';

export const PORTFOLIO_META = {
  name: 'Sidra tul Muntaha',
  title: 'AI Automation Specialist',
  established: 'July 2025 – Present',
  niche: 'Dentists & Health Coaches',
  primaryPromise: {
    hoursSaved: '17+ hrs/week',
    appointmentsGained: '9+ appointments/mo',
  },
  location: 'Lahore, Pakistan // Remote Global Deployments',
  status: 'Available for Practice Automations',
  email: 'maliksidra.ms@gmail.com',
  instagram: 'https://www.instagram.com/maliksidraaa',
  instagramHandle: '@maliksidraaa',
  coordinates: '31°31′13″ N, 74°21′31″ E',
  systemBuild: 'SYS.AUTO-25.07',
};

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    phase: 'PHASE // 01',
    stepNumber: '01',
    title: 'Discovery & Friction Audit',
    timeline: 'Days 1–3',
    deliverables: [
      'Front-desk call recording analysis',
      'No-show & drop-off bottleneck mapping',
      'PMS / Calendar schema inspection',
    ],
    workflowSnippet: 'INBOUND_CALLS → BOTTLENECK_AUDIT → SCHEMA_DEF',
    technicalNote: 'Zero staff disruption; audits historic patient loss vectors.',
  },
  {
    phase: 'PHASE // 02',
    stepNumber: '02',
    title: 'Autonomous Logic Build',
    timeline: 'Days 4–9',
    deliverables: [
      'Custom LLM prompt & triage guardrails',
      'Two-way CalDAV / PMS real-time sync',
      'HIPAA / privacy-compliant fallback logic',
    ],
    workflowSnippet: 'INTAKE_TRIGGER → TRIAGE_GATE → REALTIME_SLOT_LOCK',
    technicalNote: 'Precision prompt tuning for clinical terminology & urgency.',
  },
  {
    phase: 'PHASE // 03',
    stepNumber: '03',
    title: 'Shadow Mode & Launch',
    timeline: 'Days 10–12',
    deliverables: [
      'Parallel human-in-the-loop validation',
      'Staff handoff & escalation protocol',
      'Live channel cutover (SMS/Voice/Web)',
    ],
    workflowSnippet: 'SIMULATED_LOAD → STAFF_OVERRIDE_TEST → PRODUCTION_GO',
    technicalNote: '100% confidence threshold before autonomous patient outreach.',
  },
  {
    phase: 'PHASE // 04',
    stepNumber: '04',
    title: 'Results & Continuous Tuning',
    timeline: 'Ongoing',
    deliverables: [
      'Weekly saved-hours telemetry report',
      'No-show reduction audit',
      'Autonomous recall volume optimization',
    ],
    workflowSnippet: 'METRIC_HARVEST → REENGAGEMENT_LOOP → ROI_TELEMETRY',
    technicalNote: 'Guaranteed 17+ hrs reclaimed and +9 net booked appointments.',
  },
];

export const CORE_CAPABILITIES: CoreCapability[] = [
  {
    id: 'booking',
    code: 'CAP-01',
    title: 'Autonomous Appointment Booking',
    tagline: 'Never lose an after-hours patient or high-intent inbound lead to voicemail.',
    description:
      'Natural-language conversation agents across Web, WhatsApp, and SMS that qualify patient symptoms, verify insurance providers, and secure firm appointments directly into dental PMS or coaching calendars in real time.',
    workflowNodes: ['Patient Query', 'Symptom Triage', 'Calendar Lock', 'SMS Confirmation'],
    keyMetric: 'Sub-60s booking completion vs. 48hr email lag',
  },
  {
    id: 'scheduling',
    code: 'CAP-02',
    title: 'Intelligent Dynamic Scheduling',
    tagline: 'Fill last-minute cancellations without front-desk phone tag.',
    description:
      'Predictive calendar management that buffers emergency slots for dentists, clusters hygiene appointments efficiently, and automatically triggers waiting-list standby alerts when a patient reschedules.',
    workflowNodes: ['Cancellation Event', 'Standby Queue Filter', 'Fast-Fill SMS Ping', 'Instant Reslot'],
    keyMetric: 'Zero empty chair gaps; +9 appointments reclaimed',
  },
  {
    id: 'followup',
    code: 'CAP-03',
    title: 'Patient & Client Follow-up Systems',
    tagline: 'Systematic care continuity that drives retention and re-activates lost revenue.',
    description:
      'Automated post-op check-ins for dental surgeries and daily accountability milestones for health coaching clients. Flags adverse symptoms or disengaged clients for immediate human coach/dentist intervention.',
    workflowNodes: ['Treatment Complete', 'Check-in Cadence', 'Sentiment Analysis', 'Escalation Alert'],
    keyMetric: '92% adherence rate & 38+ dormant recalls reactivated',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'orthoflow',
    number: 'PROJECT // 01',
    title: 'OrthoFlow AI Pipeline',
    subtitle: 'Dental Clinic Autonomous Booking & Emergency Triage Engine',
    category: 'Dental Clinic',
    timeframe: 'July 2025 – August 2025 // Production Active',
    clientProblem:
      'A 4-chair private dental practice was losing 20+ after-hours calls weekly to competitor clinics. During peak clinic hours (9 AM–12 PM), the receptionist spent 3.5 hours playing phone tag to confirm visits, leading to empty operatory chairs and delayed check-ins.',
    systemSolution:
      'Engineered an autonomous conversational triage pipeline connected to their PMS calendar (Dentrix API bridge via Webhooks). Inbound callers and website visitors interact with a calm, medically guarded AI that categorizes pain levels, books hygiene or emergency exams instantly, and syncs intake forms before arrival.',
    hoursSavedWeekly: 18.5,
    appointmentsGainedMonthly: 12,
    tags: ['Dental AI Intake', 'PMS Two-Way Sync', 'Triage Routing', 'HIPAA Guardrails'],
    workflowNodes: [
      { label: 'Patient Touchpoint', type: 'trigger', detail: 'SMS / Web widget / Inbound missed-call hook' },
      { label: 'Symptom Classifier', type: 'ai_logic', detail: 'Identifies urgency: Routine vs. Acute Pulpitis vs. Cosmetic' },
      { label: 'Calendar Engine', type: 'database', detail: 'Real-time slot lock with 15-min emergency chair buffer' },
      { label: 'Pre-Visit Dispatch', type: 'action', detail: 'Digital medical history link + calendar invite push' },
    ],
    techStack: ['Make.com Enterprise', 'OpenAI Fine-tuned Whisper + GPT-4o', 'Dentrix PMS Webhook Bridge', 'Twilio Messaging'],
    editorialAnnotation: 'REF: DENT-OR-2025.08 // Chair utilization increased from 68% to 91% within 45 days.',
    quoteOrMetric: {
      stat: '18.5 hrs',
      label: 'Staff time reclaimed each week from telephone triage',
    },
  },
  {
    id: 'pulseretention',
    number: 'PROJECT // 02',
    title: 'PulseRetention Engine',
    subtitle: 'Holistic Health Coach Client Accountability & Check-in Loop',
    category: 'Health Coach',
    timeframe: 'September 2025 – Present // Production Active',
    clientProblem:
      'A functional health coach managing 45 active clients spent up to 16 hours every Sunday manually reviewing meal logs, chasing habit compliance, and sending reminder messages. Client dropout spiked at week 5 due to unaddressed micro-slumps.',
    systemSolution:
      'Designed an asynchronous WhatsApp/SMS companion bot that checks in with clients daily at custom time windows. The system parses natural language food notes and bio-feedback, summarizes client trends in the coach dashboard, and automatically flags drop in motivation for personal coach voice notes.',
    hoursSavedWeekly: 14.0,
    appointmentsGainedMonthly: 8,
    tags: ['Coaching Automation', 'Habit Telemetry', 'Natural Language Check-ins', 'Churn Prevention'],
    workflowNodes: [
      { label: 'Daily Cron Trigger', type: 'trigger', detail: 'Personalized time window based on client schedule' },
      { label: 'NL Food/Sleep Parser', type: 'ai_logic', detail: 'Extracts calories, mood score & hydration friction' },
      { label: 'Trend Classifier', type: 'database', detail: 'Airtable bio-telemetry store with 3-day variance check' },
      { label: 'Coach Escalate Hook', type: 'action', detail: 'Pushes priority summary to coach Slack if slump detected' },
    ],
    techStack: ['n8n Self-Hosted', 'WhatsApp Cloud API', 'Airtable Client CRM', 'Claude 3.5 Sonnet Extraction'],
    editorialAnnotation: 'REF: HC-PULSE-2025.09 // 94% on-time 12-week program completion vs. 61% baseline.',
    quoteOrMetric: {
      stat: '94%',
      label: 'Program completion rate (up from 61% historic benchmark)',
    },
  },
  {
    id: 'dentarecall',
    number: 'PROJECT // 03',
    title: 'DentaRecall Reactivator',
    subtitle: 'Dormant Patient Hygiene Recall & Preventative Booking Protocol',
    category: 'Dental Surgery',
    timeframe: 'November 2025 – Present // Production Active',
    clientProblem:
      'A suburban family dental clinic had over 1,400 overdue hygiene patients inactive for 7+ months. Staff lacked the bandwidth to call through spreadsheets, leaving over $75,000 in scheduled preventative treatment uncaptured each quarter.',
    systemSolution:
      'Built a low-friction reactivation protocol that queries overdue patient records in batches, initiates respectful multi-channel conversations referencing their last visit, and offers 3 one-click booking options. Unsubscribed or uninterested contacts are respectfully retired.',
    hoursSavedWeekly: 19.0,
    appointmentsGainedMonthly: 14,
    tags: ['Hygiene Reactivation', 'Automated Recall', 'CalDAV Scheduling', 'Revenue Recovery'],
    workflowNodes: [
      { label: 'PMS Dormancy Query', type: 'trigger', detail: 'Scans patients with last checkup > 180 days ago' },
      { label: 'Personalized Context', type: 'ai_logic', detail: 'References previous provider and preferred day/time' },
      { label: 'One-Click Slot Offer', type: 'action', detail: 'Sends 3 friction-free slots directly via SMS' },
      { label: 'Instant Reseat Lock', type: 'database', detail: 'Auto-reserves hygienist chair without front-desk call' },
    ],
    techStack: ['Python Microservice', 'OpenDental API', 'SendGrid + Twilio', 'PostgreSQL Ledger'],
    editorialAnnotation: 'REF: DENT-REC-2025.11 // 41 dormant patients reactivated in Month 1 with zero manual outbound calls.',
    quoteOrMetric: {
      stat: '+$21,400',
      label: 'Preventive revenue reactivated in 30 days of autonomous outreach',
    },
  },
];

export const SKILLS: SkillItem[] = [
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    category: 'Process Automation',
    iconName: 'workflow-arrows',
    description:
      'Designing robust multi-step triggers, cross-app data routing, and webhook pipelines that eliminate repetitive administrative clinic tasks.',
    toolsAndProtocols: ['Make.com', 'n8n', 'Zapier', 'Webhooks'],
    clinicalBenefit: 'Eliminates manual task handoffs and prevents human administrative error.',
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots & Conversational Systems',
    category: 'Conversational AI',
    iconName: 'speech-bubbles',
    description:
      'Deploying medical and wellness chatbots across Web, WhatsApp, and SMS that triage inquiries, answer FAQs, and book patient visits 24/7.',
    toolsAndProtocols: ['OpenAI GPT-4o', 'Claude API', 'Vapi Voice', 'Twilio'],
    clinicalBenefit: 'Captures 100% of after-hours patient queries and locks appointments instantly.',
  },
  {
    id: 'crm-scheduling',
    title: 'CRM & Scheduling Integration',
    category: 'Calendar & EHR Sync',
    iconName: 'calendar-node',
    description:
      'Direct two-way calendar sync with dental PMS (Dentrix, OpenDental), GoHighLevel, and CalDAV with automated conflict resolution.',
    toolsAndProtocols: ['Dentrix / OpenDental APIs', 'GoHighLevel', 'CalDAV', 'Google Calendar API'],
    clinicalBenefit: 'Guarantees zero double-bookings and frees front desk from manual schedule maintenance.',
  },
  {
    id: 'lead-followup',
    title: 'Lead & Follow-Up Automation',
    category: 'Retention & Reactivation',
    iconName: 'envelope-signal',
    description:
      'Automated SMS, email, and messaging cadences that nurture inbound inquiries, send pre-appointment reminders, and reactivate dormant charts.',
    toolsAndProtocols: ['Twilio SMS', 'SendGrid', 'Multi-channel Cadences', 'Smart Triggers'],
    clinicalBenefit: 'Dramatically slashes patient no-shows and revives recurring hygiene visits.',
  },
  {
    id: 'nocode-lowcode',
    title: 'No-Code / Low-Code Systems Building',
    category: 'Systems Architecture',
    iconName: 'puzzle-blocks',
    description:
      'Rapidly architecting scalable operational portals, client databases, and automated dashboards tailored to private practice workflows.',
    toolsAndProtocols: ['Airtable', 'Make', 'Softr', 'PostgreSQL / Supabase'],
    clinicalBenefit: 'Deploys customized clinic operating systems without heavy software overhead.',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Instagram',
    handle: '@maliksidraaa',
    url: 'https://www.instagram.com/maliksidraaa',
    note: 'Behind-the-scenes build diagrams & clinic automation workflows',
    tag: 'Instagram',
  },
];
