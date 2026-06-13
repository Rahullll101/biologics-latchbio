import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ─────────────────────── DATA ─────────────────────── */

interface CookieRow {
  domain: string;
  business: string;
  name: string;
  purpose: string;
  duration: string;
}

const necessaryCookies: CookieRow[] = [
  {
    domain: 'genquantaa.com',
    business: 'GenQuantaa Pvt Ltd',
    name: 'sessionid',
    purpose:
      'This cookie maintains your authenticated session on the platform. It is essential for secure login and access to protected resources on the website.',
    duration: 'Session',
  },
  {
    domain: 'genquantaa.com',
    business: 'GenQuantaa Pvt Ltd',
    name: 'csrftoken',
    purpose:
      'A security cookie used to prevent Cross-Site Request Forgery (CSRF) attacks. It ensures that form submissions and API requests originate from our website.',
    duration: '1 Year',
  },
  {
    domain: 'genquantaa.com',
    business: 'GenQuantaa Pvt Ltd',
    name: 'cookie_consent',
    purpose:
      'Stores your cookie consent preferences so that you are not shown the consent banner on every visit.',
    duration: '1 Year',
  },
  {
    domain: 'cloudflare.com',
    business: 'Cloudflare (Infrastructure)',
    name: '__cf_bm',
    purpose:
      'Set by Cloudflare to distinguish between humans and bots, supporting Cloudflare Bot Management to protect our platform from malicious traffic.',
    duration: '30 Minutes',
  },
];

const functionalCookies: CookieRow[] = [
  {
    domain: 'genquantaa.com',
    business: 'GenQuantaa Pvt Ltd',
    name: 'user_preferences',
    purpose:
      'Remembers user interface preferences such as theme settings, dashboard layout, and display options to provide a consistent personalized experience.',
    duration: '6 Months',
  },
  {
    domain: 'genquantaa.com',
    business: 'GenQuantaa Pvt Ltd',
    name: 'lang_preference',
    purpose:
      'Stores your selected language or regional settings so the platform displays content in your preferred format on subsequent visits.',
    duration: '1 Year',
  },
  {
    domain: 'genquantaa.com',
    business: 'GenQuantaa Pvt Ltd',
    name: 'recent_projects',
    purpose:
      'Keeps a record of recently accessed projects or workflows within the platform, allowing quicker navigation on return visits.',
    duration: '30 Days',
  },
];

const performanceCookies: CookieRow[] = [
  {
    domain: 'google-analytics.com',
    business: 'Google LLC (Analytics)',
    name: '_ga, _ga_XXXXXXXX',
    purpose:
      'Google Analytics cookies used to distinguish users and track sessions. These cookies collect anonymous data on how visitors use our website — including pages visited, time spent, and referral sources — to help us improve performance and user experience.',
    duration: '2 Years',
  },
  {
    domain: 'genquantaa.com',
    business: 'GenQuantaa Pvt Ltd',
    name: '_gid',
    purpose:
      'Used by Google Analytics to distinguish users within a 24-hour window. Helps us understand unique daily visitor patterns on the platform.',
    duration: '24 Hours',
  },
  {
    domain: 'leadfeeder.com',
    business: 'Leadfeeder (B2B Analytics)',
    name: '_lfa',
    purpose:
      'Set by Leadfeeder to identify companies and organizations visiting our website. This helps us understand enterprise interest in our scientific intelligence services. No personally identifiable information is collected.',
    duration: '2 Years',
  },
];

/* ─────────────────────── TOGGLE SWITCH ─────────────────────── */

function ToggleSwitch({
  checked,
  onChange,
  disabled,
  id,
}: {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  id: string;
}) {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      aria-label={checked ? 'On' : 'Off'}
      onClick={disabled ? undefined : onChange}
      disabled={disabled}
      className={`relative inline-flex items-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
        ${disabled ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}
        ${checked ? 'bg-slate-800' : 'bg-slate-300'}
      `}
      style={{ width: 44, height: 24, flexShrink: 0 }}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        className="absolute block rounded-full bg-white shadow-md"
        style={{
          width: 18,
          height: 18,
          left: checked ? 22 : 4,
        }}
      />
    </button>
  );
}

/* ─────────────────────── COOKIE TABLE ─────────────────────── */

function CookieTable({ rows }: { rows: CookieRow[] }) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left py-3 pr-4 font-semibold text-slate-700 text-xs uppercase tracking-wider w-36">Domain</th>
            <th className="text-left py-3 pr-4 font-semibold text-slate-700 text-xs uppercase tracking-wider w-44">Business</th>
            <th className="text-left py-3 pr-4 font-semibold text-slate-700 text-xs uppercase tracking-wider w-44">Cookie Name</th>
            <th className="text-left py-3 pr-4 font-semibold text-slate-700 text-xs uppercase tracking-wider">Purpose</th>
            <th className="text-left py-3 font-semibold text-slate-700 text-xs uppercase tracking-wider w-24">Duration</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}`}
            >
              <td className="py-4 pr-4 align-top text-slate-700 font-medium text-xs">{row.domain}</td>
              <td className="py-4 pr-4 align-top text-slate-500 text-xs">{row.business}</td>
              <td className="py-4 pr-4 align-top text-slate-600 text-xs font-mono break-all">{row.name}</td>
              <td className="py-4 pr-4 align-top text-slate-500 text-xs leading-relaxed">{row.purpose}</td>
              <td className="py-4 align-top text-slate-500 text-xs whitespace-nowrap">{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─────────────────────── MAIN PAGE ─────────────────────── */

export default function CookiesPage() {
  const [functional, setFunctional] = useState(false);
  const [performance, setPerformance] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden">
      <Navbar />

      {/* Page Title */}
      <section className="pt-36 pb-4 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-slate-800 mb-8">Cookies</h1>

        {/* ── Top intro 4-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-slate-200 pb-10">

          {/* Col 1 — About cookies */}
          <div>
            <p className="text-xs font-semibold text-slate-700 mb-2">
              Cookies on GenQuantaa.com
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Cookies are text files containing small amounts of information which we download onto your
              computer or device when you visit our website. We can recognize these cookies on subsequent
              visits, and they allow us to remember you. We may use information obtained from cookies or
              similar technology to give you better functionality and to help us improve the performance of
              our scientific intelligence platform. Here are the main types and categories of cookies used on our site.
            </p>
          </div>

          {/* Col 2 — Necessary */}
          <div>
            <p className="text-xs font-semibold text-slate-700 mb-2">Necessary cookies</p>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              These cookies are essential so that you can move around the website and use its features.
              Without these cookies, services you have asked for cannot be provided. See list below.
            </p>
            <div className="flex items-center gap-2">
              <ToggleSwitch
                id="toggle-necessary-top"
                checked={true}
                onChange={() => {}}
                disabled={true}
              />
              <span className="text-xs font-medium text-slate-600">On</span>
            </div>
          </div>

          {/* Col 3 — Functional */}
          <div>
            <p className="text-xs font-semibold text-slate-700 mb-2">Functional cookies</p>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              These cookies allow the website to remember choices you make to give you better functionality
              and a more personalized experience. See list below.
            </p>
            <div className="flex items-center gap-2">
              <ToggleSwitch
                id="toggle-functional-top"
                checked={functional}
                onChange={() => setFunctional(v => !v)}
              />
              <span className="text-xs font-medium text-slate-600">
                {functional ? 'On' : 'Off'}
              </span>
            </div>
          </div>

          {/* Col 4 — Performance */}
          <div>
            <p className="text-xs font-semibold text-slate-700 mb-2">Performance cookies</p>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              These cookies help us understand how visitors interact with our platform so we can improve
              performance and user experience. See list below.
            </p>
            <div className="flex items-center gap-2">
              <ToggleSwitch
                id="toggle-performance-top"
                checked={performance}
                onChange={() => setPerformance(v => !v)}
              />
              <span className="text-xs font-medium text-slate-600">
                {performance ? 'On' : 'Off'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Necessary Cookies Section ── */}
      <section className="px-6 max-w-6xl mx-auto py-10 border-b border-slate-200">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-base font-semibold text-slate-800">Necessary cookies</h2>
          <div className="flex items-center gap-2">
            <ToggleSwitch
              id="toggle-necessary-inline"
              checked={true}
              onChange={() => {}}
              disabled={true}
            />
            <span className="text-xs text-slate-500">On</span>
          </div>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
          These cookies are strictly necessary for the operation of our website and scientific intelligence
          platform. They enable core features such as security, user session management, and authentication.
          They cannot be switched off as the site would not function without them.
        </p>
        <CookieTable rows={necessaryCookies} />
      </section>

      {/* ── Functional Cookies Section ── */}
      <section className="px-6 max-w-6xl mx-auto py-10 border-b border-slate-200">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-base font-semibold text-slate-800">Functional cookies</h2>
          <div className="flex items-center gap-2">
            <ToggleSwitch
              id="toggle-functional-inline"
              checked={functional}
              onChange={() => setFunctional(v => !v)}
            />
            <span className="text-xs text-slate-500">{functional ? 'On' : 'Off'}</span>
          </div>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
          These cookies allow our website to remember choices you make (such as language preferences or
          recent project history) to provide a more personalized experience across sessions.
        </p>

        <AnimatePresence>
          {functional && (
            <motion.div
              key="functional-table"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <CookieTable rows={functionalCookies} />
            </motion.div>
          )}
        </AnimatePresence>

        {!functional && (
          <p className="text-xs text-slate-400 italic mt-4">
            Enable Functional cookies above to view details.
          </p>
        )}
      </section>

      {/* ── Performance Cookies Section ── */}
      <section className="px-6 max-w-6xl mx-auto py-10 border-b border-slate-200">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-base font-semibold text-slate-800">Performance cookies</h2>
          <div className="flex items-center gap-2">
            <ToggleSwitch
              id="toggle-performance-inline"
              checked={performance}
              onChange={() => setPerformance(v => !v)}
            />
            <span className="text-xs text-slate-500">{performance ? 'On' : 'Off'}</span>
          </div>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
          These cookies are used to gather anonymous traffic analytics, helping us understand visitor
          counts, popular pages, and performance bottlenecks to improve our services. All data is
          aggregated and non-personally identifiable.
        </p>

        <AnimatePresence>
          {performance && (
            <motion.div
              key="performance-table"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <CookieTable rows={performanceCookies} />
            </motion.div>
          )}
        </AnimatePresence>

        {!performance && (
          <p className="text-xs text-slate-400 italic mt-4">
            Enable Performance cookies above to view details.
          </p>
        )}
      </section>

      {/* ── Managing Cookies ── */}
      <section className="px-6 max-w-6xl mx-auto py-10 border-b border-slate-200">
        <h2 className="text-base font-semibold text-slate-800 mb-2">Managing and Controlling Cookies</h2>
        <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
          You have the right to accept or decline cookies. Most web browsers automatically accept cookies
          by default, but you can modify your browser settings to decline cookies if you prefer. Please
          note that disabling or blocking certain essential cookies may restrict your access to key
          features of our platform.
        </p>
      </section>

      {/* ── Third-Party Cookies ── */}
      <section className="px-6 max-w-6xl mx-auto py-10 border-b border-slate-200">
        <h2 className="text-base font-semibold text-slate-800 mb-2">Third-Party Cookies &amp; Services</h2>
        <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
          In addition to our own cookies, we partner with trusted third-party analytics and optimization
          providers including Google Analytics and Leadfeeder. These providers may place their own cookies
          on your device to collect technical data such as IP addresses and browsing behaviour. We do not
          sell any data collected via these cookies to third parties.
        </p>
      </section>

      {/* ── Policy Updates ── */}
      <section className="px-6 max-w-6xl mx-auto py-10 pb-24">
        <h2 className="text-base font-semibold text-slate-800 mb-2">Updates to This Cookie Policy</h2>
        <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
          GenQuantaa Pvt Ltd (Zerokost Healthcare Pvt Ltd) reserves the right to update this Cookie Policy
          at any time to reflect changes in our practices, technologies, or legal requirements. Any
          modifications will be posted on this page with an updated revision date. Last updated: June 2026.
        </p>
        <p className="text-xs text-slate-500 mt-3">
          Questions? Contact us at{' '}
          <a href="mailto:support@genquantaa.com" className="text-blue-600 hover:underline">
            support@genquantaa.com
          </a>
        </p>
      </section>

      <Footer />
    </div>
  );
}
