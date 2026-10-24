import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, error, success
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (input) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter an email address.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email format (e.g. name@domain.com).');
      return;
    }

    // Simulate instant local subscription success
    setStatus('success');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-24 bg-noir-deep relative border-t border-noir-border/40 overflow-hidden">
      {/* Amber radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-noir-caramel/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-espresso border border-noir-caramel/40 text-noir-caramel text-xs uppercase tracking-[0.2em] font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Atelier Dispatch</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-noir-cream tracking-tight mb-4">
          Reserve Access to Limited Micro-Lots
        </h2>

        <p className="text-noir-beige/80 text-sm sm:text-base font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Subscribers receive first notice on small 2kg single-origin batches, private cupping invitations in Cairo, and barista brew guides.
        </p>

        {/* Form Container */}
        <div className="max-w-xl mx-auto bg-noir-espresso/60 border border-noir-border/80 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-2xl">
          {status === 'success' ? (
            <div className="py-6 px-4 space-y-3 animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-noir-cream">Welcome to the Inner Circle</h3>
              <p className="text-xs text-noir-beige/80 leading-relaxed max-w-md mx-auto">
                Your email <span className="text-noir-caramel font-mono">{email}</span> has been simulated as subscribed locally. No real email is sent or stored on a server.
              </p>
              <button
                onClick={() => {
                  setStatus('idle');
                  setEmail('');
                }}
                className="mt-2 text-xs text-noir-caramel hover:underline font-semibold"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-noir-beige/50" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your email address..."
                    aria-label="Email address for dispatch"
                    className="w-full pl-12 pr-4 py-3.5 bg-noir-deep border border-noir-border focus:border-noir-caramel rounded-xl text-sm text-noir-cream placeholder-noir-beige/40 focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-noir-caramel hover:bg-noir-caramelHover text-noir-deep font-semibold text-sm tracking-wide transition-all duration-200 shadow-md shadow-noir-caramel/20 hover:shadow-caramel-glow shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-noir-cream"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-rose-400 text-xs text-left px-2 pt-1 animate-fade-in">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          )}

          {/* Form Demo Disclaimer */}
          <p className="text-[11px] text-noir-beige/50 mt-4">
            Demonstration newsletter. Submissions are processed locally in your browser without third-party tracking.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;

