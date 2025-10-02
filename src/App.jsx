import React from 'react'

const GA_TRACK = (action, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  }
};

const FORMSPREE_ID = ""; // Add your Formspree ID when ready

function mailtoFromForm(form) {
  const data = new FormData(form);
  const name = String(data.get('name') || '');
  const email = String(data.get('email') || '');
  const company = String(data.get('company') || '');
  const message = String(data.get('message') || '');
  const subject = encodeURIComponent('Kickoff Request — Stehouwer Marketing Firm');
  const body = encodeURIComponent(
    `Name: ${name}
Email: ${email}
Company/Website: ${company}

Message:
${message}`
  );
  // open default mail client
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function Tag({ children, className = "" }) {
  return <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${className}`}>{children}</span>
}

function Stat({ kpi, label, colorClass = "" }) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm">
      <div className={`text-3xl font-bold ${colorClass}`}>{kpi}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-brand-red to-brand-purple" />
            <span className="font-semibold">Stehouwer Marketing Firm</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <a href="#plan" className="text-sm hover:underline">Plan</a>
            <a href="#timeline" className="text-sm hover:underline">Timeline</a>
            <a href="#pricing" className="text-sm hover:underline">Pricing</a>
            <a href="#contact" className="text-sm hover:underline">Contact</a>
          </nav>
          <a href="#contact" className="rounded-xl border px-4 py-2 text-sm font-medium">Start</a>
        </div>
      </header>

      {/* Hero */}
      <section>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <Tag>90-Day Engagement</Tag>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              From Audit → Launch → ROI: a <span className="underline">3‑Month Growth Sprint</span>
            </h1>
            <p className="mt-4 text-gray-700">
              We set foundations in Month 1, launch and stabilize in Month 2, then optimize & prove ROI in Month 3.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Tag className="border-gray-300 text-gray-700 bg-white">GA4 + Pixels</Tag>
              <Tag className="border-brand-red text-brand-red bg-red-50">Google / Meta</Tag>
              <Tag className="border-brand-purple text-brand-purple bg-purple-50">Technical SEO</Tag>
              <Tag className="border-brand-green text-brand-green bg-green-50">A/B Testing</Tag>
            </div>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="rounded-2xl bg-black px-5 py-3 text-white" onClick={() => GA_TRACK('cta_click', { label: 'book_kickoff' })}>Book the Kickoff</a>
              <a href="#plan" className="rounded-2xl border border-brand-purple px-5 py-3 text-brand-purple hover:bg-purple-50" onClick={() => GA_TRACK('cta_click', { label: 'see_plan' })}>See the Plan</a>
            </div>
          </div>

          <div className="rounded-3xl border p-6 shadow-lg">
            <div className="grid grid-cols-3 gap-4">
              <Stat kpi="Clean" label="Tracking & Baselines" colorClass="text-brand-gray" />
              <Stat kpi="Live" label="Campaigns + Content" colorClass="text-brand-red" />
              <Stat kpi="> ROI" label="Optimization Focus" colorClass="text-brand-green" />
            </div>
            <div className="mt-6 rounded-xl bg-gray-50 p-4 text-sm">
              <div className="font-semibold">Deliverables</div>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                <li>Baseline & Strategy Report (M1)</li>
                <li>Mid‑Sprint Performance Review (M2)</li>
                <li>3‑Month Growth Report + 90‑Day Roadmap (M3)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Overview */}
      <section id="plan" className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">The Plan</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6 border-l-4 border-l-brand-red">
              <div className="text-sm font-semibold text-gray-500">Month 1</div>
              <h3 className="mt-1 text-xl font-bold">Foundation & Discovery</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>Kickoff & KPI alignment</li>
                <li>Audits: SEO, analytics, paid, social, competitive</li>
                <li>GA4, GTM, pixels, conversions</li>
                <li>Strategy + content calendar v1</li>
                <li className="font-medium">Deliverable: Baseline & Strategy Report</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-6 border-l-4 border-l-brand-purple">
              <div className="text-sm font-semibold text-gray-500">Month 2</div>
              <h3 className="mt-1 text-xl font-bold">Implementation & Data</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>Launch ads (Google/Meta)</li>
                <li>Content execution + engagement</li>
                <li>Active management & creative swaps</li>
                <li>SEO fixes from Month 1</li>
                <li className="font-medium">Deliverable: Mid‑Sprint Review</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-6 border-l-4 border-l-brand-green">
              <div className="text-sm font-semibold text-gray-500">Month 3</div>
              <h3 className="mt-1 text-xl font-bold">Optimization & Planning</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>Scale winners, cut waste</li>
                <li>A/B testing: creative, landing, audience</li>
                <li>ROI analysis vs. KPIs</li>
                <li>Strategy review & gap analysis</li>
                <li className="font-medium">Deliverable: Growth Report + Roadmap</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Book Your Kickoff</h2>
          <p className="mt-2 text-gray-700">Tell us about your goals and we’ll confirm the sprint plan.</p>
          <form className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const hasFormspree = Boolean(FORMSPREE_ID && FORMSPREE_ID.trim());
            if (!hasFormspree) {
              GA_TRACK('lead_submitted', { form: 'kickoff', transport: 'mailto' });
              mailtoFromForm(form);
              return;
            }
            const data = new FormData(form);
            try {
              const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
              GA_TRACK('lead_submitted', { form: 'kickoff', ok: res.ok, transport: 'formspree' });
              alert(res.ok ? "Thanks! We'll be in touch." : "Submission failed. Please try again.");
              if (res.ok) form.reset();
            } catch (err) {
              GA_TRACK('lead_error', { form: 'kickoff' });
              alert('Network error. Please try again.');
            }
          }}>
          </form>
        </div>
      </section>
    </div>
  );
}