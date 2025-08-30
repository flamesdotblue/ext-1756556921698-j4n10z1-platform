import React from 'react';
import { Rocket, Wand2, Layout, Zap } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'From idea to site in minutes',
    desc: 'Describe your brand and goal. Get a production-ready site with pages, routing, and analytics.',
  },
  {
    icon: Wand2,
    title: 'AI copy & design system',
    desc: 'On-brand copy, components, and color palettes generated to fit your audience and tone.',
  },
  {
    icon: Layout,
    title: 'Modern stack & SEO',
    desc: 'Built with React, Tailwind, and best-practice SEO, performance, and accessibility.',
  },
  {
    icon: Zap,
    title: '1-click deploy & edit',
    desc: 'Publish to your domain instantly and continue editing with natural language prompts.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need to launch beautifully</h2>
          <p className="mt-3 text-white/70">Powerful automation with controls when you want them. No lock-in, export anytime.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-11 w-11 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
