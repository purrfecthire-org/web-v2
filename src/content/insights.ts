export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  example?: { label: string; text: string };
};

export type InsightArticle = {
  slug: string;
  audience: 'founders' | 'talent';
  title: string;
  description: string;
  published: string;
  cover: {
    src: string;
    width: number;
    height: number;
    alt: string;
    position?: string;
    photographer: string;
    sourceUrl: string;
  };
  reference: {
    kind: 'Book' | 'Podcast';
    title: string;
    creator: string;
    url: string;
    note: string;
    quote?: string;
    quoteAttribution?: string;
  };
  sections: InsightSection[];
  takeaway: string;
};

export const articles: InsightArticle[] = [
  {
    slug: 'define-the-work-before-the-title',
    audience: 'founders',
    title: 'Define the work before the title.',
    description: 'The same title can describe very different jobs. Calibrate the work before you filter the market.',
    published: '2026-10-23',
    cover: { src: '/photos/insights/cafe-conversation.webp', width: 1200, height: 1000, alt: 'Two people in conversation, seen through the window of a Paris café.', position: '50% 80%', photographer: 'Thomas Leblanc', sourceUrl: 'https://unsplash.com/photos/two-people-talking-at-a-table-inside-a-cafe-iviG404TVG4' },
    reference: {
      kind: 'Book',
      title: 'High Output Management',
      creator: 'Andrew S. Grove',
      url: 'https://penguinrandomhousehighereducation.com/book/?isbn=9780679762881',
      quote: 'A manager’s output = the output of his organization + the output of the neighboring organizations under his influence.',
      quoteAttribution: 'Andrew S. Grove, as quoted in Ben Horowitz’s foreword',
      note: 'Our application: define the responsibility and contribution a hire should own before choosing the title.',
    },
    sections: [
      {
        heading: 'Name what you need to hand over.',
        paragraphs: [
          'A title is a useful shorthand after people agree on the work. Before that, it can hide a disagreement. One founder may mean a hands-on builder. Another may expect a manager who can hire a team. Both can ask for the same role.',
          'Start with the responsibility you need someone else to own. What is stuck today? What should become possible after this person joins? Which decisions should stop coming back to you?',
        ],
      },
      {
        heading: 'Test the brief against a working week.',
        paragraphs: ['Describe what the person would actually spend time doing. Separate work they must already know from work they could learn with the right support.'],
        example: {
          label: 'Illustrative example',
          text: 'Suppose a startup asks for a Head of Product. The immediate work is customer discovery, choosing the next product bet and building alongside a small engineering team. A requirement for years managing large teams could narrow the search around experience the company will barely use.',
        },
        bullets: [
          'The first important result this person must own.',
          'The decisions, resources and support they will have.',
          'The prior work that would make us trust them with that responsibility.',
        ],
      },
      {
        heading: 'Calibrate before outreach scales.',
        paragraphs: [
          'Review a small set of profiles together. Say why each is relevant, what remains uncertain and which requirement excludes them. Disagreement here is useful: it shows where the brief still needs a decision.',
          'If every promising profile triggers a new definition of the job, pause the search. Fixing that disagreement early saves candidates from being assessed against a moving target.',
        ],
      },
    ],
    takeaway: 'Write the work clearly enough to disagree about it. Then choose the title and the people worth approaching.',
  },
  {
    slug: 'test-ownership-with-an-unfinished-problem',
    audience: 'founders',
    title: 'Test ownership with an unfinished problem.',
    description: 'A finished project tells you little until you understand what the person noticed, changed and carried through.',
    published: '2026-10-23',
    cover: { src: '/photos/insights/evening-conversation.webp', width: 1200, height: 1500, alt: 'People talking outside a stone corner building in evening sunlight.', position: '50% 90%', photographer: 'Soban Ahmed', sourceUrl: 'https://unsplash.com/photos/people-gather-outside-a-building-with-an-entrance-HtdBZ7NrNZM' },
    reference: {
      kind: 'Podcast',
      title: 'Inside the current executive recruiting market',
      creator: 'Nolan Church with Marc Baselga and Ben Erez · Supra Insider #130',
      url: 'https://suprainsider.substack.com/p/130-inside-the-current-executive',
      note: 'A conversation on executive assessment, defining the work and the limits of interview signals.',
    },
    sections: [
      {
        heading: 'Find the moment the task stopped being enough.',
        paragraphs: [
          'When a candidate describes a project, ask when the original assignment became inadequate. Something changed, a dependency failed or the customer’s problem turned out to be different. What did they do then?',
          'This question makes ownership concrete. You can examine what the person noticed, which options they considered and how they involved the people needed to move forward.',
        ],
      },
      {
        heading: 'Follow the work beyond the handoff.',
        paragraphs: ['Stay with one example long enough to reconstruct the candidate’s contribution. A polished team story needs a few more questions.'],
        bullets: [
          'What did you personally notice or decide?',
          'Who needed to agree, and where did they push back?',
          'What happened after your part was delivered?',
          'What did you escalate, and why was that the right boundary?',
        ],
        example: {
          label: 'Illustrative example',
          text: 'Imagine an engineer ships an integration and then notices customers still cannot complete setup. Ask how they investigated the remaining friction, who owned the next step and how they checked whether the problem was resolved. The answer can reveal work that a list of shipped features leaves out.',
        },
      },
      {
        heading: 'Keep ownership inside the actual context.',
        paragraphs: [
          'Ask what authority and support the person had. A good decision can involve escalating a risk or stopping work. Acting alone is not automatically a sign of seniority.',
          'Use references, with consent, to check the important parts of the account. Then compare the behavior with the responsibility your role requires. One compelling story is a reason to investigate further, not a guarantee of future performance.',
        ],
      },
    ],
    takeaway: 'Evaluate what the person carried through when the assignment became incomplete. Check both their initiative and their judgment about its limits.',
  },
  {
    slug: 'explain-the-decision-behind-the-result',
    audience: 'talent',
    title: 'Explain the decision behind the result.',
    description: 'How to show your judgment when your résumé lists responsibilities and a team owns the outcome.',
    published: '2026-10-23',
    cover: { src: '/photos/insights/reading-through-window.webp', width: 1200, height: 1600, alt: 'A person reading and taking notes inside a café, seen through the window.', position: '50% 65%', photographer: 'Haberdoedas', sourceUrl: 'https://unsplash.com/photos/two-women-looking-at-a-book-through-window-bf7IUXGSnpI' },
    reference: {
      kind: 'Book',
      title: 'Thinking in Bets',
      creator: 'Annie Duke',
      url: 'https://www.penguinrandomhouseretail.com/book/?isbn=9780735216358',
      quote: 'It sounded like a bad result, not a bad decision.',
      quoteAttribution: 'Annie Duke, Thinking in Bets',
      note: 'When explaining an achievement, examine what you knew, which alternatives you considered and why you chose that course.',
    },
    sections: [
      {
        heading: 'Start with what was at stake.',
        paragraphs: [
          'A list of responsibilities tells someone where you sat. It leaves them guessing what the company trusted you to handle. Start with a problem that mattered, the constraints around it and the part you owned.',
          'This is especially useful when your title understates your work. A stronger title alone will not explain the scope. A specific account of a difficult decision can.',
        ],
      },
      {
        heading: 'Reconstruct one consequential choice.',
        paragraphs: ['Choose one result and work backward. Answer four questions before polishing the story.'],
        bullets: [
          'What was happening, and why did it matter to the business?',
          'Which options did you consider, and what did you give up?',
          'What did you personally decide or change?',
          'What happened afterward, and how do you know?',
        ],
        example: {
          label: 'Illustrative example',
          text: 'Suppose a product leader delays a requested feature after learning that customers are struggling with onboarding. The useful story would explain how they tested that diagnosis, secured agreement and checked what changed after the fix. A shipping date alone cannot show that judgment.',
        },
      },
      {
        heading: 'Be precise about your contribution.',
        paragraphs: [
          'Separate the team’s result from your own work. Name who else made it possible. If a result has several causes, say so. If you lack a reliable number, describe an observable change and how it was checked.',
          'Practice the account out loud. A hiring manager should be able to ask a follow-up about your reasoning, rather than spend the first conversation discovering what you actually did.',
        ],
      },
    ],
    takeaway: 'Bring one decision another person can examine. Let its scope, reasoning and consequences explain your level.',
  },
  {
    slug: 'choose-the-problem-before-the-company',
    audience: 'talent',
    title: 'Choose the problem before the company.',
    description: 'A company can be impressive and still offer the wrong work. Build a filter before you apply.',
    published: '2026-10-23',
    cover: { src: '/photos/insights/city-walk.webp', width: 1200, height: 800, alt: 'A person wearing headphones and carrying a red bag walks through Melbourne.', position: '50% 50%', photographer: 'Ken’s Vision', sourceUrl: 'https://unsplash.com/photos/person-walking-in-the-street-with-a-bag-ukLBZrlyolw' },
    reference: {
      kind: 'Podcast',
      title: 'April Dunford on product positioning, segmentation, and optimizing your sales process',
      creator: 'April Dunford with Lenny Rachitsky · Lenny’s Podcast',
      url: 'https://www.lennysnewsletter.com/p/april-dunford-on-product-positioning',
      note: 'Dunford discusses product positioning. Our career application is to examine where your particular experience becomes useful and why.',
    },
    sections: [
      {
        heading: 'Write a brief for the work you want.',
        paragraphs: [
          'A recognizable company can make an available role look like progress. Before entering the process, ask what you would actually own. Would the work use your strongest abilities? Would the reporting line and authority let you do it well?',
          'Define the kind of business problem you want to take on and the conditions you need to solve it. This gives you a reason to approach a company beyond liking its brand.',
        ],
      },
      {
        heading: 'Look for a reason to talk.',
        paragraphs: [
          'Use public information to form a hypothesis about the company’s needs. A product launch or change in operating model can suggest a question. It does not prove that the company has a vacancy or wants your solution.',
          'Make the first conversation a test of that hypothesis. Explain the relevant work you have done, ask whether the problem matters and give the other person room to correct your read.',
        ],
        example: {
          label: 'Illustrative example',
          text: 'If a company is adding a second product, someone with experience coordinating several products might ask how priorities and ownership will change. That opens a specific discussion without pretending to know the company’s internal plans.',
        },
      },
      {
        heading: 'Keep a reason to say no.',
        paragraphs: ['Write three filters before your next application or introduction. Use them again when an offer makes the company harder to assess calmly.'],
        bullets: [
          'The problem I want to own, and the experience I can bring to it.',
          'The authority, manager and working conditions I need.',
          'The trade-off I will decline, even at a company I admire.',
        ],
      },
    ],
    takeaway: 'Choose where your work would matter, then investigate whether the opportunity is real. A posted vacancy is one way into that conversation.',
  },
];
