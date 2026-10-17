// Work with us: internal Purrfect careers, separate from client searches.
// Culture and values: Notion 3e388cc78f968134b342f1b03d08056b,
// 3e388cc78f9681f5ae54ebce78faf6fc and 3e388cc78f9681be919cc7166f1f2c69.
// Remote work, mental health support and learning were reconfirmed by Kate
// on 17 October 2026. Do not add quantities, vendors or historic PTO terms.
// The name explanation is editorial wording based on the purr/perfect wordplay,
// not a claim about a documented founding story. Cat behavior is defined in
// Notion 3d488cc78f96818686c0d1f7ddf999aa.
// Replace applicationHref only after the public intake has been verified.
import { PAGE_ROLES } from './links';

export const workWithUs = {
  meta: {
    title: 'Work with us | Purrfect Hire',
    description: 'Join the team behind Purrfect Hire. Discover our values, how we work, and how to introduce yourself for future opportunities.',
  },
  applicationHref: 'mailto:go@purrfecthire.com?subject=Working%20at%20Purrfect&body=Hi%20Purrfect%20team%2C%0A%0AI%27d%20like%20to%20introduce%20myself%20for%20future%20opportunities%20at%20Purrfect%20Hire.%0A%0AName%3A%0ALinkedIn%20or%20portfolio%3A%0AWhere%20I%27d%20contribute%3A%0AOne%20example%20of%20work%20I%27m%20proud%20of%3A%0A',
  applicationCta: 'Introduce yourself',
  hero: {
    eyebrow: 'Work with Purrfect',
    headline: 'Build better talent decisions with us.',
    body: 'We help founders make critical hires and senior professionals make consequential career moves. That work takes curiosity, care and the courage to say what the evidence shows.',
    standard: 'High standards. High speed. High humanity.',
    secondary: 'Looking for a role at one of our clients?',
    secondaryCta: 'Explore client searches',
    secondaryHref: PAGE_ROLES,
  },
  work: {
    eyebrow: 'How we work',
    headline: 'Understand the problem. Own the next move.',
    items: [
      { title: 'Context before action', body: 'Learn the business, the person and the decision ahead. Ask until the problem is clear.' },
      { title: 'Responsibility across the team', body: 'Share context early. Make the next step clear. Raise a risk while there is still time to act.' },
      { title: 'Better with every attempt', body: 'Use feedback in the next version. Share what you learn. Use AI for speed and check the facts yourself.' },
    ],
  },
  values: {
    eyebrow: 'What we protect',
    headline: 'Values you can see in the work.',
    items: [
      { title: 'Excellence', body: 'Check the facts, the evidence and the details before your work reaches someone else.' },
      { title: 'Authenticity', body: 'Say what you see. Be clear about the strengths, the risks and what you still need to understand.' },
      { title: 'Berracos and passionate', body: 'For our team, berracos means resourceful and determined. Keep finding a way through hard searches, rejection and ambiguity.' },
      { title: 'Generosity', body: 'Give useful context and honest feedback. Help people understand something better.' },
      { title: 'Learners and mentors', body: 'Turn a lesson into a better next attempt, then make it useful to the rest of the team.' },
    ],
  },
  support: {
    eyebrow: 'What supports the work',
    headline: 'Room to work well and keep growing.',
    items: [
      { title: 'Remote work', body: 'Contribute as part of a distributed team.' },
      { title: 'Mental health support', body: 'Support for your wellbeing alongside the work.' },
      { title: 'Learning and development', body: 'Keep developing your skills and share what you learn.' },
    ],
  },
  name: {
    eyebrow: 'The name and the cat',
    headline: 'Observe closely. Choose carefully. Move with intent.',
    body: 'Purrfect plays on “perfect” and “purr”, the sound a cat makes. Our cat expresses attention, curiosity, independence and quiet confidence.',
    meaning: 'You see it in how we work: understand the context, form a view and act with care for the people involved.',
  },
  application: {
    eyebrow: 'Join the team',
    headline: 'Show us what you would bring.',
    body: 'Introduce yourself for future opportunities at Purrfect Hire. Share where you could contribute and one piece of work that helps us understand how you think.',
    note: 'This is an expression of interest in joining our own team. It does not apply you to a client vacancy or enrol you in advisory.',
    detailsTitle: 'What to share',
    details: ['Your background and where you would contribute.', 'Your LinkedIn or portfolio.', 'An example of your work, your contribution and what changed.'],
    next: 'We review introductions against the needs of our team. If there is a relevant opportunity, we will contact you to discuss it.',
    privacyLabel: 'How we handle your information',
    privacyHref: '/privacy-policy',
  },
};
