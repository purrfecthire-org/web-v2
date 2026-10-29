import { APPLY_OFFER, FOUNDERS_CALENDAR } from '../content/links.ts';

export type HelpAudience = 'all' | 'companies' | 'talent' | 'candidates';
export type HelpTopicId = 'hiring' | 'next-move' | 'current-role' | 'application';
export type HelpTopic = {
  id: HelpTopicId;
  label: string;
  heading: string;
  answer: string[];
  action: { label: string; href: string; external?: boolean };
  question: string;
  detail: string;
};

const topics: readonly HelpTopic[] = [
  {
    id: 'hiring',
    label: 'Hiring for my company',
    heading: 'Talk through the hire.',
    answer: [
      'Book a 20-minute founders call to discuss the role, company stage and what the hire needs to change.',
      'Bring your current brief if you have one. You can also ask our team a question on WhatsApp.',
    ],
    action: { label: 'Book a founders call', href: FOUNDERS_CALENDAR, external: true },
    question: 'What is Search Calibration?',
    detail: 'It defines the problem behind the hire, the level and market to search, and what a candidate must demonstrate. The sample on our Companies page shows the kind of questions we work through.',
  },
  {
    id: 'next-move',
    label: 'My next career move',
    heading: 'Compete for the right next opportunity.',
    answer: [
      'Offer Accelerator is private career advisory for senior professionals preparing a move. It includes one diagnostic session and seven private sessions with a senior consultant, plus process support while you actively execute the agreed plan. Each private session lasts one hour.',
      'Investment ranges from USD 2,000 to 8,000, depending on seniority and location. We confirm it before enrollment. A job or salary increase is not guaranteed.',
    ],
    action: { label: 'Apply for Offer Accelerator', href: APPLY_OFFER },
    question: 'Does this give me priority in client searches?',
    detail: 'No. Advisory is separate from recruitment. Applying to a vacancy is free, and paying for advisory does not change how you are assessed.',
  },
  {
    id: 'current-role',
    label: 'Growing in my current role',
    heading: 'Work on bigger problems in the role you have.',
    answer: [
      'Career Compounding works on real challenges inside your company. USD 5,000 includes six months, nine private sessions with Kate, eight asynchronous checkpoints and a personalized private workspace. Each private session lasts one hour.',
      'You can join directly without taking Offer Accelerator. The aim is stronger judgment, ownership, influence and execution. Promotions and pay increases are not guaranteed.',
    ],
    action: { label: 'Explore Career Compounding', href: '/career-compounding' },
    question: 'What if I need help with one decision?',
    detail: 'A strategic 1:1 session is USD 300 for one hour with Kate. Ask our team about the question you want to work through so we can help you choose the appropriate format.',
  },
  {
    id: 'application',
    label: 'Applying to a role',
    heading: 'Apply directly to a published opportunity.',
    answer: [
      'Open the role to review its location, requirements and application form. Applying is free. Use the confirmation on the form to check that your application was received.',
      'If something goes wrong, share the role title and the error or request ID shown on the form.',
    ],
    action: { label: 'See open roles', href: '/roles' },
    question: 'Is paid advisory required?',
    detail: 'No. Paid advisory is never required to apply and provides no preference in client searches. Each application is assessed for the role.',
  },
];

/** Candidate journeys never display or recommend paid advisory products. */
export function getHelpTopics(audience: HelpAudience = 'all'): readonly HelpTopic[] {
  if (audience === 'candidates') return topics.filter((topic) => topic.id === 'application');
  if (audience === 'companies') return topics.filter((topic) => topic.id === 'hiring');
  if (audience === 'talent') return topics.filter((topic) => topic.id !== 'hiring');
  return topics;
}

/** Accept only a pathname, never search parameters, fragments or external URLs. */
export function helpSourcePath(value: string): string {
  if (!value.startsWith('/') || value.startsWith('//')) return '/';
  const pathname = value.split(/[?#]/, 1)[0];
  if (pathname.includes('\\') || /[\u0000-\u001f\u007f]/.test(pathname)) return '/';
  return pathname;
}

export const HELP_MESSAGE_LIMIT = 500;

/** Builds a draft only. Visiting this URL still requires the visitor to send it. */
export function helpWhatsAppUrl(topicId: HelpTopicId, message = '', pathname = '/'): string {
  const topic = topics.find((item) => item.id === topicId);
  if (!topic) throw new Error('Unknown help topic');
  const question = message.trim().slice(0, HELP_MESSAGE_LIMIT).toWellFormed();
  const draft = [
    'Hi Purrfect, I would like to ask about:',
    topic.label,
    ...(question ? ['', question] : []),
    '',
    `Page: https://purrfecthire.com${helpSourcePath(pathname)}`,
  ].join('\n');
  return `https://wa.me/18312245188?text=${encodeURIComponent(draft)}`;
}
