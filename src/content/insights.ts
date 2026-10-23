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
  author: { name: string };
  worksheet: { title: string; instructions: string; lines: string[] };
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
    "slug": "define-the-work-before-the-title",
    "audience": "founders",
    "title": "Make every must-have earn its place.",
    "description": "A requirement should explain a risk in the job. Familiarity alone is a poor reason to exclude someone.",
    "published": "2026-10-23",
    "cover": {
      "src": "/photos/insights/cafe-conversation.webp",
      "width": 1200,
      "height": 1000,
      "alt": "Two people in conversation, seen through the window of a Paris café.",
      "position": "50% 80%",
      "photographer": "Thomas Leblanc",
      "sourceUrl": "https://unsplash.com/photos/two-people-talking-at-a-table-inside-a-cafe-iviG404TVG4"
    },
    "reference": {
      "kind": "Book",
      "title": "High Output Management",
      "creator": "Andrew S. Grove",
      "url": "https://penguinrandomhousehighereducation.com/book/?isbn=9780679762881",
      "quote": "A manager’s output = the output of his organization + the output of the neighboring organizations under his influence.",
      "quoteAttribution": "Andrew S. Grove, as quoted in Ben Horowitz’s foreword",
      "note": "Our application: define the responsibility and contribution a hire should own before choosing the title."
    },
    "sections": [
      {
        "heading": "A requirement is a prediction.",
        "paragraphs": [
          "Calling something a must-have means you expect a person to fail at a particular part of the job without it. Name that failure. If you cannot, the requirement may be a familiar proxy that nobody has challenged.",
          "Experience with a tool, knowledge of a business problem and the ability to learn a new system are separate things. Requiring all three may feel safer. It can also remove people whose strongest experience transfers to the work you actually need done."
        ]
      },
      {
        "heading": "Compare the gaps you would have to close.",
        "paragraphs": [
          "Neither profile wins automatically. First decide which gap is central to the job. A new tool may be teachable if the underlying problem is familiar. The reverse can be harder when the hire must diagnose the problem without much help.",
          "Ask each person to explain a relevant decision. Then check whether the reasoning transfers to your constraints. A convincing explanation includes where the analogy breaks. The candidate who recognizes that boundary may understand the work better than the one who treats every context as the same."
        ],
        "example": {
          "label": "Illustrative comparison",
          "text": "Imagine two candidates. One has used your exact software but worked from instructions someone else defined. The other used a different system and personally diagnosed the business problem your hire must solve. What would each need to learn before you could trust them with the work?"
        }
      },
      {
        "heading": "Keep the bar explicit when you change the filter.",
        "paragraphs": [
          "Before removing a requirement, write the capability you still insist on and how you will examine it. This makes flexibility a decision you can defend. It also stops the team from lowering the bar simply because a candidate is impressive or the search is taking longer than expected.",
          "Try the same discipline when rejecting a profile. “Not senior enough” becomes useful only when you can name the decision they have not shown they can make. If the reason keeps changing, revisit the brief before scaling outreach."
        ]
      }
    ],
    "takeaway": "For each must-have, name the failure it prevents, the capability underneath it and the alternative experience you would accept.",
    "author": {
      "name": "Juanca"
    },
    "worksheet": {
      "title": "Audit one must-have",
      "instructions": "Choose the requirement that has eliminated the most otherwise relevant profiles. Complete these lines before your next calibration.",
      "lines": [
        "The requirement we currently insist on:",
        "The failure in the actual job that it is meant to prevent:",
        "The underlying capability we still need:",
        "Different experience that could demonstrate that capability:",
        "The question or work sample that would change our view:"
      ]
    }
  },
  {
    "slug": "test-ownership-with-an-unfinished-problem",
    "audience": "founders",
    "title": "A hard assessment can test the wrong job.",
    "description": "Difficulty is a weak substitute for relevance. Decide what the candidate’s work should let you conclude.",
    "published": "2026-10-23",
    "cover": {
      "src": "/photos/insights/evening-conversation.webp",
      "width": 1200,
      "height": 1500,
      "alt": "People talking outside a stone corner building in evening sunlight.",
      "position": "50% 90%",
      "photographer": "Soban Ahmed",
      "sourceUrl": "https://unsplash.com/photos/people-gather-outside-a-building-with-an-entrance-HtdBZ7NrNZM"
    },
    "reference": {
      "kind": "Podcast",
      "title": "Inside the current executive recruiting market",
      "creator": "Nolan Church with Marc Baselga and Ben Erez · Supra Insider #130",
      "url": "https://suprainsider.substack.com/p/130-inside-the-current-executive",
      "note": "A conversation on executive assessment, defining the work and the limits of interview signals."
    },
    "sections": [
      {
        "heading": "Write the conclusion before designing the test.",
        "paragraphs": [
          "An assessment can be long, demanding and consistent while answering a question the job barely asks. Before adding another stage, finish this sentence: after this exercise, we should have a better reason to trust this person with a specific responsibility.",
          "If the conclusion is only “they are smart” or “they work hard,” narrow it. Do you need to know how they investigate a customer problem, prioritize conflicting requests or notice that the assigned task will leave something unresolved? Those require different exercises."
        ]
      },
      {
        "heading": "Give them the unresolved part of the work.",
        "paragraphs": [
          "The useful signal is in how the candidate handles uncertainty. Which facts do they check? What do they treat as an assumption? What would make them reject their first answer? A polished list can conceal weak reasoning; a cautious answer can conceal an inability to make a call. Ask enough to distinguish those possibilities.",
          "Keep the exercise bounded and explain what will be assessed. Use fictional or safely prepared material. The purpose is to examine thinking relevant to the job, rather than collect unpaid solutions to an open company project."
        ],
        "example": {
          "label": "Illustrative comparison",
          "text": "Suppose a role depends on researching and prioritizing potential accounts. A general aptitude test and a small, messy account-selection exercise may both be difficult. Only the second directly exposes how the person chooses what to investigate, ranks incomplete information and explains a recommendation."
        }
      },
      {
        "heading": "Agree on what would change your recommendation.",
        "paragraphs": [
          "Decide the dimensions before seeing the answers: diagnosis, prioritization, assumptions, follow-through. Describe strong and weak behavior in terms of the work. Leave room for a defensible approach you did not anticipate.",
          "After the exercise, ask what changed in your assessment of the person. If the team cannot identify a useful change, more stages may be adding effort without resolving the hiring risk. One sample still has limits. Use interviews and references to test the uncertainties it leaves open."
        ]
      }
    ],
    "takeaway": "Make the assessment earn its place in the process. It should change what you can responsibly conclude about the work this person could own.",
    "author": {
      "name": "Rich"
    },
    "worksheet": {
      "title": "Design a useful assessment",
      "instructions": "Use this before adding or expanding an interview stage.",
      "lines": [
        "The responsibility we need to trust this hire with:",
        "The uncertainty this assessment should resolve:",
        "A small, fictional work sample that exposes it:",
        "The behaviors we will assess consistently:",
        "What result would change our recommendation, and what would still remain unknown:"
      ]
    }
  },
  {
    "slug": "explain-the-decision-behind-the-result",
    "audience": "talent",
    "title": "Your biggest result may be your weakest interview story.",
    "description": "A large outcome attracts attention. Your account of the decision determines what someone can trust you to do next.",
    "published": "2026-10-23",
    "cover": {
      "src": "/photos/insights/reading-through-window.webp",
      "width": 1200,
      "height": 1600,
      "alt": "A person reading and taking notes inside a café, seen through the window.",
      "position": "50% 65%",
      "photographer": "Haberdoedas",
      "sourceUrl": "https://unsplash.com/photos/two-women-looking-at-a-book-through-window-bf7IUXGSnpI"
    },
    "reference": {
      "kind": "Book",
      "title": "Thinking in Bets",
      "creator": "Annie Duke",
      "url": "https://www.penguinrandomhouseretail.com/book/?isbn=9780735216358",
      "quote": "It sounded like a bad result, not a bad decision.",
      "quoteAttribution": "Annie Duke, Thinking in Bets",
      "note": "When explaining an achievement, examine what you knew, which alternatives you considered and why you chose that course."
    },
    "sections": [
      {
        "heading": "A result leaves your contribution unresolved.",
        "paragraphs": [
          "Your company grew. A major customer signed. A product launched. Those outcomes matter, but several people, favorable conditions and decisions made before you arrived may have contributed. Leading with the largest number can invite a question you have not prepared to answer: what, exactly, was yours?",
          "Choose an account that makes your contribution inspectable. Someone should be able to understand the problem you inherited, what you knew at the time, which choice you made and what you remained accountable for afterward."
        ]
      },
      {
        "heading": "Choose the story with the clearest decision.",
        "paragraphs": [
          "The launch may have the larger commercial outcome. The smaller initiative may reveal more about your judgment. It becomes useful when you can explain the alternatives, the resistance you encountered and how you checked whether the change helped.",
          "Neither story wins automatically. Ask which demonstrates the responsibility this employer needs you to own. If the role requires coordinating an agreed plan at scale, the launch may be exactly the right account. If it requires diagnosing a poorly understood problem, the second could reveal more."
        ],
        "example": {
          "label": "Illustrative comparison",
          "text": "Imagine choosing between two stories. In one, you coordinated a successful launch whose scope and strategy were already agreed. In the other, you noticed a smaller initiative was solving the wrong customer problem, challenged the plan and secured agreement to change it."
        }
      },
      {
        "heading": "Do not borrow certainty from the ending.",
        "paragraphs": [
          "Reconstruct what you knew before the outcome. Explain the uncertainty you accepted, the information you lacked and what would have made you choose differently. A favorable ending cannot establish that every preceding decision was sound.",
          "If you cannot separate your decision from the team’s activity, investigate your contribution before making that achievement your lead story. Give colleagues their share of the credit, identify other causes and say where attribution remains uncertain. Precision can make a modest achievement more convincing than a spectacular result you cannot explain."
        ]
      }
    ],
    "takeaway": "Lead with the achievement whose reasoning you can defend and whose scope matches the work you want to be trusted with next.",
    "author": {
      "name": "Kate Forero"
    },
    "worksheet": {
      "title": "Rebuild one interview story",
      "instructions": "Choose one achievement. Complete this before rehearsing the polished version.",
      "lines": [
        "The problem and stakes before I acted:",
        "What I knew at the time, and what remained uncertain:",
        "The options I considered and the trade-off I chose:",
        "My contribution, and the work owned by other people:",
        "What changed, how we checked it and what I would do differently:"
      ]
    }
  },
  {
    "slug": "choose-the-problem-before-the-company",
    "audience": "talent",
    "title": "A strong brand can hide a smaller role.",
    "description": "Evaluate the responsibility you would gain before letting the company’s reputation decide whether the move is progress.",
    "published": "2026-10-23",
    "cover": {
      "src": "/photos/insights/city-walk.webp",
      "width": 1200,
      "height": 800,
      "alt": "A person wearing headphones and carrying a red bag walks through Melbourne.",
      "position": "50% 50%",
      "photographer": "Ken’s Vision",
      "sourceUrl": "https://unsplash.com/photos/person-walking-in-the-street-with-a-bag-ukLBZrlyolw"
    },
    "reference": {
      "kind": "Podcast",
      "title": "April Dunford on product positioning, segmentation, and optimizing your sales process",
      "creator": "April Dunford with Lenny Rachitsky · Lenny’s Podcast",
      "url": "https://www.lennysnewsletter.com/p/april-dunford-on-product-positioning",
      "note": "Dunford discusses product positioning. Our career application is to examine where your particular experience becomes useful and why."
    },
    "sections": [
      {
        "heading": "Separate access from authority.",
        "paragraphs": [
          "A respected company can offer useful learning, colleagues and credibility. It can also make a narrow job look like a larger professional step. Being close to important decisions is different from being responsible for making them.",
          "Ask what becomes yours when you join. Which problem will you own? Which decisions can you make? Who controls the resources? If those answers remain vague, the company’s reputation is filling a gap in your understanding of the job."
        ]
      },
      {
        "heading": "Compare the work you would actually carry.",
        "paragraphs": [
          "The second role could offer more responsibility. It could also leave you accountable without the people, budget or management support to succeed. The first could be the better move if learning inside an excellent team is what you need next.",
          "Brand, title and scope each tell you something. Investigate how they fit together. Public information about a launch or expansion can suggest a useful question, but cannot establish what authority an incoming person would actually have."
        ],
        "example": {
          "label": "Illustrative comparison",
          "text": "Imagine two offers. At a recognizable company, a “strategic” role prepares recommendations while another team sets priorities and controls delivery. At a less familiar company, a plainer title owns a difficult product problem, with customer access and authority to change the plan."
        }
      },
      {
        "heading": "Require an answer that survives a difficult week.",
        "paragraphs": [
          "Ask the hiring manager to walk through a recent disagreement relevant to the role. Who made the final call? What happened when another team withheld support? What would the incoming person have been expected to resolve? A concrete episode can expose boundaries that an ambitious job description leaves unclear.",
          "Compare those boundaries with the work you want to become capable of doing. Do not count responsibility you cannot locate in the operating model. Choose a narrower role deliberately when its learning or conditions serve you. Avoid accepting one because an admired name made its limits harder to question."
        ]
      }
    ],
    "takeaway": "A company’s reputation is part of the offer. Investigate the responsibility as carefully as the name.",
    "author": {
      "name": "Kate Forero"
    },
    "worksheet": {
      "title": "Compare the mandate behind two offers",
      "instructions": "Use one copy per role. Compare the answers before comparing the company names.",
      "lines": [
        "The problem I would personally own:",
        "The decisions I could make and the resources I could influence:",
        "A recent disagreement that shows how authority works here:",
        "The manager and support I would have when the work gets difficult:",
        "What I would learn or gain, and the limitation I would be choosing deliberately:"
      ]
    }
  }
];
