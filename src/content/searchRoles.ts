// Role-specific search pages. These describe how to frame a search, not
// vacancies or completed client engagements. Keep salary ranges, candidate
// availability and claims of placements out until supported by a source.

export interface SearchRoleContent {
  slug: 'founding-engineer' | 'head-of-engineering' | 'forward-deployed-engineer';
  role: string;
  meta: { title: string; description: string };
  hero: { headline: string; body: string };
  context: { stage: string; need: string; decision: string };
  problem: { headline: string; body: string };
  evidence: { title: string; body: string }[];
  questions: { question: string; reason: string }[];
  risks: { title: string; body: string }[];
  preparation: string[];
  close: { headline: string; body: string };
}

export const searchRoleShared = {
  eyebrow: 'For founders · Role design and search',
  cta: 'Get Search Calibration',
  ctaNote: 'Share the role, company stage and the problem this person needs to solve.',
  contextTitle: 'Before you start sourcing',
  stageLabel: 'Company context',
  needLabel: 'The work ahead',
  decisionLabel: 'The decision to make',
  problemEyebrow: 'Define the problem',
  evidenceEyebrow: 'What to assess',
  evidenceHeadline: 'The evidence this search should produce.',
  evidenceIntro: 'For each example, separate what the person demonstrated, what they described and what still needs to be tested.',
  questionsEyebrow: 'Questions to start with',
  questionsHeadline: 'Make the interview specific to your company.',
  questionsIntro: 'Use your actual product, team and constraints. Follow the answer into the decisions the person made and the work they would do themselves.',
  risksEyebrow: 'Where the brief can go wrong',
  risksHeadline: 'Resolve these before asking candidates to commit.',
  preparationEyebrow: 'Bring the context',
  preparationHeadline: 'What to share for an initial search read.',
  sampleLabel: 'See a sample Search Calibration',
  sampleHref: '/search-calibration',
  selectedLabel: 'Selected searches',
  selectedHref: '/for-companies#selected-searches',
  relatedLabel: 'Other roles you may be defining',
  pageNote: 'This page describes a search approach. Find current vacancies under Open roles.',
};

export const searchRoles: SearchRoleContent[] = [
  {
    slug: 'founding-engineer',
    role: 'Founding Engineer',
    meta: {
      title: 'Founding Engineer search for startups | Purrfect Hire',
      description: 'Define your Founding Engineer search around product decisions, hands-on delivery and the evidence your early team needs. Get Search Calibration from Purrfect Hire.',
    },
    hero: {
      headline: 'Hire a Founding Engineer for the product you still need to discover.',
      body: 'Start with the problem the person must take from an incomplete idea to working software. Define the decisions they can make, the support they will have and the evidence you need before making an offer.',
    },
    context: {
      stage: 'An early product team working closely with its founders.',
      need: 'Build, release and learn from people using the product.',
      decision: 'Which product and engineering decisions can this person make independently?',
    },
    problem: {
      headline: 'What needs to work before the team can grow?',
      body: 'Name the product milestone and the uncertainty around it. Then distinguish the work a new engineer can own from the decisions a founder still needs to make. A clear brief gives candidates a real view of the code, users and constraints they would inherit.',
    },
    evidence: [
      { title: 'Software they brought into use', body: 'A specific product or feature, their personal contribution and what happened after release. Examine the code and decisions they can share, including how they handled a production problem.' },
      { title: 'Product decisions under uncertainty', body: 'How they narrowed an unclear request, learned from a user and chose what to build first. Look for a reason behind the scope and evidence that informed the next decision.' },
      { title: 'An engineering foundation others can use', body: 'How they made the work understandable, testable and maintainable for the next person. Explore what they documented, simplified or deliberately left for later.' },
    ],
    questions: [
      { question: 'Walk us through something you shipped while the product requirements were still changing. What did you decide yourself?', reason: 'Establish the contribution you can attribute to the candidate and how they stayed close to the product problem.' },
      { question: 'Here is our next product milestone. What would you need to learn before choosing the first piece to build?', reason: 'Test whether the candidate can turn your uncertainty into a useful next action.' },
      { question: 'Which part of a system you built became difficult to change, and what would you do differently now?', reason: 'Understand whether they can explain consequences, recognize limits and adjust their approach.' },
    ],
    risks: [
      { title: 'Responsibility without decision rights', body: 'Agree which decisions the engineer can make and where founder input is required. The title alone does not give someone authority.' },
      { title: 'An undefined product mandate', body: 'Specify how much customer discovery and product judgment the role carries. Make the founder’s remaining responsibility visible.' },
      { title: 'Unclear expectations after the next hire', body: 'Describe how the role may develop when more engineers join. Avoid implying a future leadership title that has not been agreed.' },
    ],
    preparation: [
      'What the product does today and the next milestone it needs to reach',
      'The existing code, technical support and people the engineer will work with',
      'Decisions the person can make, plus location and working requirements',
      'What has been difficult about the search so far',
    ],
    close: {
      headline: 'What must your Founding Engineer make possible?',
      body: 'Bring the role and the product problem. We will help examine the scope, the market questions and the evidence the search needs.',
    },
  },
  {
    slug: 'head-of-engineering',
    role: 'Head of Engineering',
    meta: {
      title: 'Head of Engineering search for startups | Purrfect Hire',
      description: 'Frame a Head of Engineering search around your team, delivery and leadership needs. Define decision rights, evidence and interview questions with Purrfect Hire.',
    },
    hero: {
      headline: 'Hire a Head of Engineering for the team you have today.',
      body: 'Define what needs to improve in delivery, technical decisions and the way the team works. Make the hands-on expectations and the relationship with the founder or CTO explicit before starting the search.',
    },
    context: {
      stage: 'A startup whose engineering team needs clearer leadership as its scope grows.',
      need: 'Improve delivery while developing the team and its technical decisions.',
      decision: 'What remains with the CTO or founder, and what moves to this hire?',
    },
    problem: {
      headline: 'Which engineering problem needs a leader to change it?',
      body: 'A missed release, a stretched CTO and a team without experienced managers can point to different searches. Identify the work that needs to change, the people already in place and the authority the new leader will have to act.',
    },
    evidence: [
      { title: 'A delivery problem they changed', body: 'The team’s starting conditions, the candidate’s decisions and the observable change. Examine how they diagnosed the issue and what they did when the first intervention failed.' },
      { title: 'Leadership in a comparable context', body: 'How they developed engineers, handled performance and distributed responsibility. Understand the team and resources behind their previous results.' },
      { title: 'Technical judgment close to the work', body: 'A decision involving architecture, reliability or product delivery. Ask how they examined options, involved the team and carried the consequences into execution.' },
    ],
    questions: [
      { question: 'Describe a team you inherited. What did you change first, and what did you leave alone?', reason: 'Test how they diagnose a team before imposing a structure or process.' },
      { question: 'Here is how our founder, CTO and engineering team make decisions today. Which responsibilities would you clarify first?', reason: 'Surface assumptions about authority and the working relationship this hire expects.' },
      { question: 'Tell us about a technical decision where the team disagreed. What did you decide, and what happened after?', reason: 'Examine how they use evidence, handle disagreement and remain accountable for the outcome.' },
    ],
    risks: [
      { title: 'One title carrying several jobs', body: 'Separate the expected coding, architecture, people management and hiring work. Check that one person can realistically carry the scope with your existing team.' },
      { title: 'Leadership without authority to change things', body: 'Agree what the new leader can change in priorities, team structure and performance decisions, including how disagreements with the CTO will be resolved.' },
      { title: 'Experience assessed without its context', body: 'Understand which systems, managers and resources supported past results. Explore what the candidate would do with the team and budget available now.' },
    ],
    preparation: [
      'Your engineering team structure and who makes technical and people decisions',
      'The delivery, quality or team problem that prompted the hire',
      'The hands-on work and authority the role will carry',
      'The company’s next stage and what success in this role should change',
    ],
    close: {
      headline: 'What should change when your Head of Engineering joins?',
      body: 'Share the team, the problem and the decisions this person will own. We will help clarify what the search should test.',
    },
  },
  {
    slug: 'forward-deployed-engineer',
    role: 'Forward Deployed Engineer',
    meta: {
      title: 'Forward Deployed Engineer search for startups | Purrfect Hire',
      description: 'Define a Forward Deployed Engineer search around customer workflows, deployment and product feedback. Clarify the technical evidence and role scope with Purrfect Hire.',
    },
    hero: {
      headline: 'Hire for the work between your product and your customer.',
      body: 'A Forward Deployed Engineer’s scope depends on the product and the customer environment. Define the engineering work, customer responsibility and deployment outcome before using the title to shape the search.',
    },
    context: {
      stage: 'A startup bringing its product into customer workflows and technical environments.',
      need: 'Turn a customer problem into a working deployment and useful product learning.',
      decision: 'Where does this person’s work begin and end across sales, delivery and the core product?',
    },
    problem: {
      headline: 'What has to happen for the customer to use the product?',
      body: 'Specify the path from a customer’s problem to a working deployment. That might involve data, integrations, permissions or a change in workflow. Define which parts require engineering and which decisions the customer or your own team must make.',
    },
    evidence: [
      { title: 'A deployment that worked in practice', body: 'The customer environment, the candidate’s technical work and how success was checked. Examine what they implemented personally and how they dealt with a failure or unexpected constraint.' },
      { title: 'A clear read on the customer’s problem', body: 'How they investigated a workflow, tested assumptions and translated a request into a technical plan. Look for the questions that changed the proposed solution.' },
      { title: 'A useful feedback loop into the product', body: 'How they separated a customer-specific requirement from a reusable product need, documented what they learned and worked with the core engineering team.' },
    ],
    questions: [
      { question: 'Walk us through a deployment you carried from the first customer conversation into use. What did you build yourself?', reason: 'Separate direct implementation from work performed by other engineers or teams.' },
      { question: 'A customer’s workflow differs from the one our product assumes. What would you investigate before proposing a solution?', reason: 'Examine how they handle unclear requirements and communicate the constraints they discover.' },
      { question: 'When have you pushed back on a customer request? What did you propose, and how did the decision reach the product team?', reason: 'Understand how they protect the deployment outcome while keeping bespoke work and product commitments deliberate.' },
    ],
    risks: [
      { title: 'Customer work with no technical boundary', body: 'Define the expected coding and deployment responsibility, plus what stays with sales, support and product. Give candidates a representative view of the work.' },
      { title: 'Unbounded commitments to customers', body: 'Agree who can promise a delivery date, approve custom work and decide when a customer request belongs on the product roadmap.' },
      { title: 'Deployment constraints discovered too late', body: 'Make on-site expectations, travel, language, security and access requirements explicit. These shape the work and the relevant candidate market.' },
    ],
    preparation: [
      'The product, customer workflow and point at which deployments become difficult',
      'The expected coding, data, integration and customer-facing work',
      'The handoffs between sales, delivery and core engineering',
      'Location, travel, language, security and access requirements',
    ],
    close: {
      headline: 'What must your next customer deployment prove?',
      body: 'Bring the product, customer environment and intended outcome. We will help examine whether the role is defined clearly enough to search.',
    },
  },
];

export const getRoleSearchHref = (role: SearchRoleContent['slug']) =>
  `/search-read?role=${encodeURIComponent(role)}`;
