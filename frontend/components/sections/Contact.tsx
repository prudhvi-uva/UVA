"use client";
import React, { useRef, useState, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

type FieldState = 'idle' | 'valid' | 'invalid';

interface FormData {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  productEnquiry: string;
  message: string;
  consent: boolean;
}

const PRODUCT_OPTIONS = [
  'DP360',
  'Pardha',
  'AURA',
  'Other',
];

// ─── Thread node ──────────────────────────────────────────────────────────────

function ThreadNode({ id, state }: { id: string; state: FieldState }) {
  return (
    <div className="hidden md:flex flex-col items-center w-6 flex-shrink-0 mr-4" aria-hidden="true">
      <div
        id={`node-${id}`}
        className="w-3 h-3 rounded-full border-2 transition-colors duration-300 z-10 relative"
        style={{
          borderColor: state === 'valid' ? '#000000' : state === 'invalid' ? '#EF4444' : '#D4D4D0',
          backgroundColor: state === 'valid' ? '#000000' : state === 'invalid' ? '#EF4444' : 'transparent',
        }}
      />
      <div
        id={`thread-${id}`}
        className="w-0.5 flex-1 mt-1 min-h-[3rem]"
        style={{
          background: `linear-gradient(to bottom, ${state === 'valid' ? '#000000' : '#D4D4D0'} 0%, #D4D4D0 100%)`,
        }}
      />
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

function LabelMono({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-xs font-bold uppercase tracking-widest text-muted mb-1.5">
      {children}
    </label>
  );
}

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const trustRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', mobile: '',
    email: '', productEnquiry: '', message: '', consent: false,
  });

  const [fieldState, setFieldState] = useState<Record<keyof Omit<FormData,'consent'>, FieldState>>({
    firstName: 'idle', lastName: 'idle', mobile: 'idle',
    email: 'idle', productEnquiry: 'idle', message: 'idle',
  });

  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const prefersReduced = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  // ── Entrance animation & Continuous Backgrounds ─────────────────────────────
  useGSAP(() => {
    if (headlineRef.current) gsap.set(headlineRef.current, { opacity: 1 });
    if (trustRef.current) gsap.set(trustRef.current, { opacity: 1 });
    gsap.set('.form-card, .form-row', { opacity: 1 });

    // Continuous Background Blobs
    const blobs = sectionRef.current?.querySelectorAll('.bg-blob');
    if (blobs && blobs.length > 0) {
      blobs.forEach((blob, i) => {
        gsap.to(blob, {
          y: i % 2 === 0 ? '-30px' : '30px',
          x: i % 2 === 0 ? '20px' : '-20px',
          rotation: i % 2 === 0 ? 10 : -10,
          duration: 4 + i,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });
      });
    }

  }, { scope: sectionRef });

  // ── Validate ────────────────────────────────────────────────────────────────
  const validate = useCallback((name: keyof Omit<FormData,'consent'>, value: string): boolean => {
    if (name === 'mobile' && !value.trim()) return true;
    if (!value.trim()) return false;
    if (name === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (name === 'mobile') return /^[+\d\s\-()]{7,}$/.test(value);
    return true;
  }, []);

  // ── Node animation on blur ──────────────────────────────────────────────────
  const animateNode = useCallback((id: string, valid: boolean) => {
    if (prefersReduced) return;
    const node = document.getElementById(`node-${id}`);
    if (!node) return;
    if (valid) {
      gsap.fromTo(node, { scale: 0 }, { scale: 1, duration: 0.3, ease: 'back.out(1.7)' });
    } else {
      gsap.to(node, {
        backgroundColor: '#EF4444', borderColor: '#EF4444',
        duration: 0.15, yoyo: true, repeat: 3,
        onComplete: () => gsap.set(node, { backgroundColor: 'transparent', borderColor: '#D4D4D0' }),
      });
    }
  }, [prefersReduced]);

  const handleBlur = useCallback((name: keyof Omit<FormData,'consent'>, value: string) => {
    const isValid = validate(name, value);
    setFieldState(prev => ({ ...prev, [name]: isValid ? 'valid' : 'invalid' }));
    animateNode(name, isValid);
  }, [validate, animateNode]);

  // ── Success animation ───────────────────────────────────────────────────────
  const playSuccessAnimation = useCallback(() => {
    if (prefersReduced) return;
    const nodeIds = ['firstName','lastName','mobile','email','productEnquiry','message'];
    const nodes = nodeIds.map(id => document.getElementById(`node-${id}`)).filter(Boolean);
    gsap.to(nodes, {
      scale: 1.5, backgroundColor: '#000000', borderColor: '#000000',
      duration: 0.25, stagger: 0.06, ease: 'power1.out', yoyo: true, repeat: 1,
    });
  }, [prefersReduced]);

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fields: (keyof Omit<FormData,'consent'>)[] = ['firstName','lastName','mobile','email','productEnquiry','message'];
    let allValid = true;
    const newStates = { ...fieldState };
    for (const f of fields) {
      const valid = validate(f, form[f] as string);
      newStates[f] = valid ? 'valid' : 'invalid';
      if (!valid) { allValid = false; animateNode(f, false); }
    }
    setFieldState(newStates);
    if (!allValid || !form.consent) {
      setErrorMsg(!form.consent ? 'Please tick the consent checkbox to continue.' : 'Please fix the highlighted fields.');
      return;
    }
    setSubmitState('submitting');
    setErrorMsg('');
    const hutk = document.cookie.split('; ').find(r => r.startsWith('hubspotutk='))?.split('=')[1] ?? '';
    try {
      const res = await fetch('/api/hubspot-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, hutk, pageUri: window.location.href }),
      });
      const data = await res.json();
      if (data.ok) {
        setSubmitState('success');
        playSuccessAnimation();
        setTimeout(() => {
          setForm({ firstName:'',lastName:'',mobile:'',email:'',productEnquiry:'',message:'',consent:false });
          setFieldState({ firstName:'idle',lastName:'idle',mobile:'idle',email:'idle',productEnquiry:'idle',message:'idle' });
          setSubmitState('idle');
        }, 4000);
      } else {
        setSubmitState('error');
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setSubmitState('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  // ── Styling helpers ─────────────────────────────────────────────────────────
  const baseInput = (extra = '') =>
    `w-full px-4 py-3 rounded-md bg-foreground/3 border text-sm text-foreground placeholder-mist transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground/50 focus-visible:border-foreground/50 ${extra}`;

  const fieldBorder = (state: FieldState) =>
    state === 'valid' ? 'border-foreground/40' : state === 'invalid' ? 'border-red-400' : 'border-foreground/15';

  return (
    <SectionWrapper id="contact-us" className="relative bg-background pt-10 pb-20 overflow-hidden">
      
      <div ref={sectionRef} className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
        
        {/* ── Animated Background Blobs ─────────────────────────────────────── */}
        <div className="bg-blob absolute -top-10 -left-20 w-72 h-72 bg-muted/10 rounded-full blur-3xl pointer-events-none" />
        <div className="bg-blob absolute top-1/3 -right-20 w-96 h-96 bg-foreground/5 rounded-full blur-3xl pointer-events-none" />
        <div className="bg-blob absolute -bottom-10 left-1/4 w-64 h-64 bg-muted/10 rounded-full blur-3xl pointer-events-none" />

        {/* ── Top: Centered Copy ───────────────────────────────────────────── */}
        <div className="text-center mb-8 lg:mb-10 flex flex-col items-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-black bg-black px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-white shadow-md">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Get in touch
          </div>

          <h2
            ref={headlineRef}
            className="font-heading text-3xl md:text-5xl font-extrabold uppercase tracking-wide text-foreground mb-6 leading-tight"
            style={{ opacity: prefersReduced ? 1 : 0 }}
          >
            Interested in our products?
          </h2>

          <p
            ref={trustRef}
            className="font-body text-lg text-muted leading-relaxed max-w-xl mx-auto"
            style={{ opacity: prefersReduced ? 1 : 0 }}
          >
            Whether you&apos;re interested in DP360, Paarth, or a custom product solution,
            tell us what you need and our team will get right back to you.
          </p>
        </div>

        {/* ── Bottom: Form ─────────────────────────────────────────────────── */}
        <div 
          className="form-card w-full bg-background rounded-3xl border border-foreground/10 shadow-2xl shadow-foreground/5 p-8 md:p-12 relative overflow-hidden z-10"
          style={{ opacity: prefersReduced ? 1 : 0 }}
        >
          {/* Subtle background glow or texture could go here if needed */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-foreground/20 to-transparent"></div>

          <form onSubmit={handleSubmit} noValidate className="relative z-10">

            {/* Row 1: First / Last */}
            <div className="form-row grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-6" style={{ opacity: prefersReduced ? 1 : 0 }}>
              <div className="flex items-stretch">
                <ThreadNode id="firstName" state={fieldState.firstName} />
                <div className="flex-1">
                  <LabelMono htmlFor="firstName">First name *</LabelMono>
                  <input id="firstName" type="text" autoComplete="given-name"
                    value={form.firstName}
                    onChange={e => setForm(p => ({...p, firstName: e.target.value}))}
                    onBlur={e => handleBlur('firstName', e.target.value)}
                    placeholder="john"
                    className={baseInput(fieldBorder(fieldState.firstName))}
                  />
                </div>
              </div>
              <div className="flex items-stretch">
                <ThreadNode id="lastName" state={fieldState.lastName} />
                <div className="flex-1">
                  <LabelMono htmlFor="lastName">Last name *</LabelMono>
                  <input id="lastName" type="text" autoComplete="family-name"
                    value={form.lastName}
                    onChange={e => setForm(p => ({...p, lastName: e.target.value}))}
                    onBlur={e => handleBlur('lastName', e.target.value)}
                    placeholder="doe"
                    className={baseInput(fieldBorder(fieldState.lastName))}
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Email / Mobile */}
            <div className="form-row grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-6" style={{ opacity: prefersReduced ? 1 : 0 }}>
              <div className="flex items-stretch">
                <ThreadNode id="email" state={fieldState.email} />
                <div className="flex-1">
                  <LabelMono htmlFor="email">Email *</LabelMono>
                  <input id="email" type="email" autoComplete="email"
                    value={form.email}
                    onChange={e => setForm(p => ({...p, email: e.target.value}))}
                    onBlur={e => handleBlur('email', e.target.value)}
                    placeholder="you@company.com"
                    className={baseInput(fieldBorder(fieldState.email))}
                  />
                </div>
              </div>
              <div className="flex items-stretch">
                <ThreadNode id="mobile" state={fieldState.mobile} />
                <div className="flex-1">
                  <LabelMono htmlFor="mobile">Mobile</LabelMono>
                  <input id="mobile" type="tel" autoComplete="tel"
                    value={form.mobile}
                    onChange={e => setForm(p => ({...p, mobile: e.target.value}))}
                    onBlur={e => handleBlur('mobile', e.target.value)}
                    placeholder="+91 7700 900000"
                    className={baseInput(fieldBorder(fieldState.mobile))}
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Product enquiry */}
            <div className="form-row flex items-stretch mb-6" style={{ opacity: prefersReduced ? 1 : 0 }}>
              <ThreadNode id="productEnquiry" state={fieldState.productEnquiry} />
              <div className="flex-1">
                <LabelMono htmlFor="productEnquiry">Product enquiry *</LabelMono>
                <select id="productEnquiry"
                  value={form.productEnquiry}
                  onChange={e => { setForm(p => ({...p, productEnquiry: e.target.value})); handleBlur('productEnquiry', e.target.value); }}
                  className={baseInput(`${fieldBorder(fieldState.productEnquiry)} cursor-pointer appearance-none`)}
                >
                  <option value="">Select a product…</option>
                  {PRODUCT_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
            </div>

            {/* Row 4: Message */}
            <div className="form-row flex items-start mb-6" style={{ opacity: prefersReduced ? 1 : 0 }}>
              <ThreadNode id="message" state={fieldState.message} />
              <div className="flex-1">
                <LabelMono htmlFor="message">Message *</LabelMono>
                <textarea id="message" rows={5}
                  value={form.message}
                  onChange={e => setForm(p => ({...p, message: e.target.value}))}
                  onBlur={e => handleBlur('message', e.target.value)}
                  placeholder="Tell us about your requirements and how our products can help…"
                  className={`${baseInput(fieldBorder(fieldState.message))} resize-none`}
                />
              </div>
            </div>

            {/* GDPR Consent */}
            <label className="form-row flex items-start gap-3 mb-8 cursor-pointer group pl-2 md:pl-10" style={{ opacity: prefersReduced ? 1 : 0 }}>
              <input type="checkbox"
                checked={form.consent}
                onChange={e => setForm(p => ({...p, consent: e.target.checked}))}
                className="mt-0.5 w-4 h-4 rounded border-foreground/20 accent-foreground cursor-pointer flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground/50"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-muted leading-relaxed group-hover:text-foreground transition-colors">
                I agree to be contacted about my enquiry. UVA may store and process my personal data in accordance with its{' '}
                <a href="/privacy-policy" className="underline hover:text-foreground">Privacy Policy</a>.
              </span>
            </label>

            {/* Error */}
            {errorMsg && (
              <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-4 pl-2 md:pl-10">{errorMsg}</p>
            )}

            {/* Submit */}
            <div className="form-row pl-0 md:pl-10" style={{ opacity: prefersReduced ? 1 : 0 }}>
              <Button
                ref={btnRef}
                type="submit"
                disabled={submitState === 'submitting' || submitState === 'success'}
                className={`w-full rounded-full uppercase tracking-widest font-semibold py-4 text-sm transition-all duration-300 shadow-md hover:shadow-lg ${
                  submitState === 'success'
                    ? 'bg-foreground text-background'
                    : submitState === 'submitting'
                    ? 'bg-foreground/60 text-background cursor-wait'
                    : 'bg-black text-white hover:bg-zinc-800 font-bold'
                }`}
              >
                {submitState === 'success' ? (
                  <span className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" />
                    Message sent — we&apos;ll reply within one business day.
                  </span>
                ) : submitState === 'submitting' ? 'Sending…' : 'Send message'}
              </Button>
            </div>

          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
