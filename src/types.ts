export interface Project {
  id: string;
  title: string;
  category: string;
  isConcept: boolean;
  tagline: string;
  description: string;
  clientType: string;
  image: string;
  highlights: string[];
  metrics?: { label: string; value: string };
  aiToolsUsed: string[];
  humanCraftFocus: string;
  livePreviewUrl?: string;
  accentColor: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  aiAspect: string;
  humanAspect: string;
}

export interface TechTool {
  name: string;
  role: string;
  category: 'AI' | 'Design' | 'Frontend' | 'Workflow';
  icon: string;
}
