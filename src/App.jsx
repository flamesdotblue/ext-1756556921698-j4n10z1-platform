import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="h-2 w-2 rounded-full bg-fuchsia-500 animate-pulse" />
            NovaSite AI
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-white/80 hover:text-white">Features</a>
            <a href="#testimonials" className="text-white/80 hover:text-white">Testimonials</a>
            <a href="#pricing" className="text-white/80 hover:text-white">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden sm:inline-block text-white/80 hover:text-white text-sm">Sign in</a>
            <a href="#pricing" className="inline-flex items-center px-4 py-2 rounded-md bg-white text-black text-sm font-semibold hover:bg-white/90 transition">Start free</a>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} NovaSite AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
