import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Kim',
    role: 'Founder, Driftcart',
    quote: 'We shipped our marketing site in a single afternoon. The copy and design were spot on. Our conversion rate went up 38%.',
  },
  {
    name: 'Priya Patel',
    role: 'PMM, Helix Data',
    quote: 'Finally a builder that is fast and not cookie-cutter. The AI understood our positioning better than most agencies.',
  },
  {
    name: 'Jordan Lee',
    role: 'Designer, Northwave',
    quote: 'Love the modern components and clean code export. Iterating with prompts is a game changer for our workflow.',
  },
];

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
      {initials}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Loved by fast-moving teams</h2>
          <p className="mt-3 text-white/70">Real results from builders, founders, and marketers using NovaSite AI.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <Avatar name={t.name} />
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-white/60">{t.role}</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-white/80">“{t.quote}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
