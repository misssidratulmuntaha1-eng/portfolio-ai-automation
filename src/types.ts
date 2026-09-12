export interface RoadmapStep {
  phase: string;
  stepNumber: string;
  title: string;
  timeline: string;
  deliverables: string[];
  workflowSnippet: string;
  technicalNote: string;
}

export interface CoreCapability {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  workflowNodes: string[];
  keyMetric: string;
}

export interface ProjectWorkflowNode {
  label: string;
  type: 'trigger' | 'ai_logic' | 'database' | 'action';
  detail: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Dental Clinic' | 'Health Coach' | 'Dental Surgery';
  timeframe: string;
  clientProblem: string;
  systemSolution: string;
  hoursSavedWeekly: number;
  appointmentsGainedMonthly: number;
  tags: string[];
  workflowNodes: ProjectWorkflowNode[];
  techStack: string[];
  editorialAnnotation: string;
  quoteOrMetric: {
    stat: string;
    label: string;
  };
}

export interface SkillItem {
  id: string;
  code?: string;
  title: string;
  category?: string;
  iconName: string;
  description: string;
  toolsAndProtocols?: string[];
  clinicalBenefit?: string;
}

export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  note: string;
  tag: string;
}
