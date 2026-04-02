const heroPhoto = '/assets/mark-benico-professional-photo.png';
const ghlCertificate = '/assets/gohighlevel-training-certificate.png';
const virginStarCertificate = '/assets/virgin-star-certificate.jpg';
const allStarCertificate = '/assets/all-star-certificate.jpeg';

function IconArrowRight({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function IconMail({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function IconShield({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" />
      <path d="m9.5 12 1.5 1.5 3.5-3.5" />
    </svg>
  );
}

function IconTarget({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
    </svg>
  );
}

function IconWorkflow({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="4" width="6" height="6" rx="1.5" />
      <rect x="15" y="4" width="6" height="6" rx="1.5" />
      <rect x="9" y="14" width="6" height="6" rx="1.5" />
      <path d="M9 7h6" />
      <path d="M12 10v4" />
    </svg>
  );
}

function IconCalendar({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M3 10h18" />
    </svg>
  );
}

function IconMessage({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-2.9-.4-4.1-1.1L3 20l1.2-4.5A8.5 8.5 0 1 1 21 11.5Z" />
    </svg>
  );
}

function IconUsers({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3" />
      <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 4.13a3 3 0 0 1 0 5.74" />
    </svg>
  );
}

function IconBriefcase({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

function IconExternal({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

function IconLinkedIn({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.25 2.25 0 1 0 5.3 7.5 2.25 2.25 0 0 0 5.25 3ZM20.44 12.88c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.88V8.5H9.37c.04.78 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.68.13-.92.27-.68.9-1.39 1.95-1.39 1.37 0 1.92 1.04 1.92 2.57V20h3.38v-7.12Z" />
    </svg>
  );
}

function validatePortfolioData(data) {
  const requiredSections = [
    data.socialLinks,
    data.services,
    data.strengths,
    data.tools,
    data.audiences,
    data.proofCards,
    data.caseStudies
  ];

  const hasInvalidSection = requiredSections.some((section) => !Array.isArray(section) || section.length === 0);
  if (hasInvalidSection) {
    throw new Error('Portfolio data is incomplete.');
  }

  const hasMissingProofImage = data.proofCards.some((card) => !card.image || !card.title);
  if (hasMissingProofImage) {
    throw new Error('Each proof card must include an image and title.');
  }
}

function App() {
  const socialLinks = [
    {
      label: 'OnlineJobsPH',
      href: 'https://www.onlinejobs.ph/jobseekers/info/1687339',
      icon: IconBriefcase
    },
    {
      label: 'Upwork',
      href: 'https://www.upwork.com/freelancers/~01435ee4154c595b24?mp_source=share',
      icon: IconExternal
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mark-christian-benico/',
      icon: IconLinkedIn
    }
  ];

  const services = [
    {
      title: 'Lead Follow-Up and Sales Momentum',
      description:
        'I help businesses stay consistent with follow-up so warm opportunities do not cool off before a decision is made.',
      icon: IconMessage
    },
    {
      title: 'CRM and Pipeline Discipline',
      description:
        'I keep customer movement organized through clean updates, better stage visibility, and stronger pipeline control.',
      icon: IconWorkflow
    },
    {
      title: 'Appointment and Conversion Support',
      description:
        'From first response to next step, I help keep conversations moving toward booked calls, closed sales, or clearer outcomes.',
      icon: IconCalendar
    }
  ];

  const strengths = [
    '8+ years in sales, customer communication, and CRM-based work',
    '3-time All-Star Awardee recognized for sales performance and customer satisfaction',
    'Trusted as a Subject Matter Expert for team support and escalation assistance',
    'Hands-on with GoHighLevel workflows, pipelines, tags, segmentation, funnels, and follow-up structure',
    'Strong in objection handling, follow-up discipline, and revenue-focused communication',
    'Comfortable in fast-paced environments where every conversation matters'
  ];

  const tools = [
    'GoHighLevel',
    'CRM pipeline management',
    'Tags and segmentation',
    'Email and SMS follow-up structure',
    'Lead qualification',
    'Upsell and retention conversations',
    'Appointment-setting support',
    'Inbound and outbound communication'
  ];

  const audiences = [
    'Business owners who need stronger follow-up and lead conversion support',
    'Remote teams hiring a sales closer who can protect warm opportunities',
    'Companies that need clean CRM discipline behind the scenes',
    'Growing businesses that want better communication without losing sales momentum'
  ];

  const proofCards = [
    {
      title: 'GoHighLevel Workflow and CRM Training',
      summary:
        'Hands-on training focused on marketing automation, CRM management, advanced workflows, funnels, tags, pipelines, and follow-up systems.',
      image: ghlCertificate,
      tag: 'CRM & Automation'
    },
    {
      title: '3-Time All-Star Sales Recognition',
      summary:
        'Recognized multiple times for top performer achievement, reflecting consistent sales execution, strong customer experience, and results under pressure.',
      image: allStarCertificate,
      tag: 'Performance Proof'
    },
    {
      title: 'Top Performer Appreciation',
      summary:
        'Recognition tied to strong conversion performance and service quality, aligning with a role that values both revenue growth and customer trust.',
      image: virginStarCertificate,
      tag: 'Sales Credibility'
    }
  ];

  const caseStudies = [
    {
      title: 'Protecting Warm Leads',
      text:
        'My strongest work happens when a business is already generating interest but needs stronger follow-up, clearer communication, and better control over next-step movement.'
    },
    {
      title: 'Turning Service Into Revenue',
      text:
        'In fast-paced customer environments, I learned how to resolve concerns first, build trust quickly, and then guide the conversation toward an offer that makes sense.'
    },
    {
      title: 'Supporting Sales With System Discipline',
      text:
        'I combine front-end communication with back-end CRM structure so conversations, tags, stages, and follow-up are working together instead of against each other.'
    }
  ];

  validatePortfolioData({ socialLinks, services, strengths, tools, audiences, proofCards, caseStudies });

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.16),_transparent_28%),linear-gradient(180deg,_rgba(15,23,42,1),_rgba(2,6,23,1))]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">Mark Christian</p>
            <p className="text-sm text-slate-400">Sales Closer • Revenue Support • CRM Discipline</p>
          </div>
          <a
            href="mailto:mbenico74@gmail.com?subject=Discovery%20Call%20Request"
            className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-sky-300/50 hover:bg-white/10 md:inline-flex"
          >
            Book a Discovery Call
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
                <IconShield className="h-4 w-4" />
                Value-first sales support for businesses that cannot afford missed follow-up
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                I help businesses generate more revenue by improving follow-up, protecting warm leads, and keeping sales conversations moving.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                I position myself where sales are often lost: slow response times, inconsistent follow-up, messy CRM updates, and conversations that lose momentum before a decision is made. My work is built to help businesses protect opportunity and convert more of the leads they already worked hard to get.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:mbenico74@gmail.com?subject=Discovery%20Call%20Request"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                >
                  Book a Discovery Call
                  <IconArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  View Proof and Portfolio
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10">
                  <p className="text-sm text-slate-400">Experience</p>
                  <p className="mt-2 text-2xl font-semibold">8+ years</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Sales, customer communication, and CRM-based work.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10">
                  <p className="text-sm text-slate-400">Sales performance</p>
                  <p className="mt-2 text-2xl font-semibold">6–7% close rate</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Achieved against a 3–4% benchmark in a high-pressure sales role.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10">
                  <p className="text-sm text-slate-400">Recognition</p>
                  <p className="mt-2 text-2xl font-semibold">3-Time All-Star</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Recognized for strong sales performance and customer satisfaction.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-400/20 via-transparent to-emerald-400/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-glow">
                <img
                  src={heroPhoto}
                  alt="Mark Christian professional portrait"
                  className="h-full w-full rounded-[1.5rem] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-white text-slate-900">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Why hire me</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  I bring the front-end communication and the behind-the-scenes structure that keep revenue opportunities moving.
                </h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    My background is in sales, customer communication, and CRM-based work, and over the years I have worked in fast-paced environments where every conversation matters. That experience trained me to stay calm under pressure, communicate clearly, handle objections well, and keep momentum moving instead of letting opportunities go cold.
                  </p>
                  <p>
                    I am especially strong in lead follow-up, CRM updates, pipeline organization, appointment-setting support, and retention-focused communication. I also have hands-on experience with GoHighLevel workflows, including pipelines, tags, segmentation, funnels, and follow-up structure, which means I can support both the customer-facing conversation and the system that keeps it organized.
                  </p>
                  <p>
                    I have also been recognized as a 3-time All-Star Awardee for strong sales performance and customer satisfaction, and I was trusted as a Subject Matter Expert to help support team performance. If you need someone who can represent your business well, stay disciplined with follow-up, and help turn more conversations into real revenue opportunities, I would be glad to contribute.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-xl shadow-slate-200/50">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Core strengths</p>
                <div className="mt-6 space-y-4">
                  {strengths.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm">
                      <IconTarget className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 text-slate-900">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">What I help with</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Sales support built to protect warm leads, strengthen follow-up, and keep the pipeline honest.
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="inline-flex rounded-2xl bg-sky-50 p-3 text-sky-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-white text-slate-900">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Proof and portfolio</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Real recognition, real training, and real proof that I take performance seriously.
                </h2>
              </div>
              <a
                href="mailto:mbenico74@gmail.com?subject=Portfolio%20Inquiry"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
              >
                Ask for more samples
                <IconArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {proofCards.map((card) => (
                <article key={card.title} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-sm">
                  <div className="aspect-[5/4] overflow-hidden bg-white">
                    <img src={card.image} alt={card.title} className="h-full w-full object-contain p-2" />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                      {card.tag}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{card.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Case studies</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  The kind of business problems I am strongest at solving.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  This portfolio is built to show the direction I bring: disciplined follow-up, stronger conversion support, clearer CRM movement, and better communication across the sales process.
                </p>
              </div>
              <div className="grid gap-5">
                {caseStudies.map((item, idx) => (
                  <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-400/15 text-sm font-semibold text-sky-200">
                        0{idx + 1}
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white text-slate-900">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Tools I work with</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Who I help</p>
                <div className="mt-6 space-y-4">
                  {audiences.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm">
                      <IconUsers className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-100 text-slate-900">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Connect with me</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Ready to improve follow-up, strengthen conversions, and keep your sales pipeline moving?
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                  I am open to opportunities with businesses that want someone reliable, disciplined, and revenue-focused. Whether you need a closer, follow-up support, CRM discipline, or GoHighLevel-backed sales structure, I would be glad to talk.
                </p>
              </div>
              <a
                href="mailto:mbenico74@gmail.com?subject=Discovery%20Call%20Request"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                <IconMail className="h-4 w-4" />
                Book a Discovery Call
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <a href="mailto:mbenico74@gmail.com" className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm text-slate-500">Email</p>
                <p className="mt-2 font-semibold">mbenico74@gmail.com</p>
              </a>
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">Profile</span>
                    </div>
                    <p className="mt-2 font-semibold">{link.label}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
export { validatePortfolioData };
