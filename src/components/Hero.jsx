import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(80%_60%_at_50%_10%,rgba(124,58,237,0.25)_0%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.9)_100%)]" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 mb-5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              AI Website Builder • Launch faster with automation
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Build a polished website in minutes with your AI copilot
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-2xl">
              Describe your idea. Our AI designs, writes, and deploys a high‑converting site with modern components, SEO, and analytics baked in.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-white/90 transition"
              >
                Start free trial
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 bg-white/5 text-white hover:bg-white/10 transition"
              >
                Book a live demo
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Deploy to Vercel in 1-click
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
