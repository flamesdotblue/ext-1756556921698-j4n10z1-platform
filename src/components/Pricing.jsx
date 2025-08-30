import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    highlight: 'Best for trying it out',
    features: [
      '1 project',
      'AI copy & design',
      'Basic SEO',
      'Export code',
    ],
    cta: 'Start free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/mo',
    highlight: 'For creators & startups',
    features: [
      'Unlimited projects',
      'Advanced themes',
      'Custom domain + SSL',
      'Analytics & A/B testing',
      '1-click deploy',
    ],
    cta: 'Start 14-day trial',
    popular: true,
  },
  {
    name: 'Business',
    price: '$49',
    period: '/mo',
    highlight: 'For teams that need scale',
    features: [
      'Everything in Pro',
      'Collaboration & roles',
      'SAML SSO',
      'Priority support',
      'Custom SLA',
    ],
    cta: 'Book a demo',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple pricing for every stage</h2>
          <p className="mt-3 text-white/70">Start free. Upgrade when you’re ready. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border bg-white/5 p-6 flex flex-col ${
                p.popular ? 'border-fuchsia-400/60 shadow-[0_0_60px_-20px_rgba(217,70,239,0.6)]' : 'border-white/10'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-4 inline-flex items-center rounded-full bg-fuchsia-500 px-2.5 py-1 text-xs font-semibold text-black">
                  Most popular
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-white/70">{p.highlight}</p>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-3xl font-semibold">{p.price}</span>
                  <span className="text-white/60">{p.period}</span>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="#"
                  className={`inline-flex w-full items-center justify-center rounded-md px-5 py-3 font-semibold transition ${
                    p.popular
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-white/70 text-sm">
          14-day free trial on Pro. No credit card required.
        </div>
      </div>
    </section>
  );
}
