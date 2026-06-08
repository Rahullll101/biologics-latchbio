import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, ChevronRight } from 'lucide-react';

interface CookieSection {
  id: string;
  title: string;
  description: string | React.ReactNode;
  details?: string[];
}

export default function CookiesPage() {
  const sections: CookieSection[] = [
    {
      id: "what-are-cookies",
      title: "What Are Cookies?",
      description: "Cookies are small text files containing small amounts of information that are downloaded and stored on your device (e.g., computer, smartphone, tablet) when you visit a website. Cookies allow the website to recognize your device, store preferences, and understand how you interact with the site, making your browsing experience more efficient and tailored."
    },
    {
      id: "how-we-use-cookies",
      title: "How We Use Cookies",
      description: "Genquantaa uses cookies to ensure the proper functioning of our scientific intelligence platform and website, enhance security, analyze traffic trends, and optimize user experience. We do not use cookies to collect personal data for promotional purposes without your consent."
    },
    {
      id: "types-of-cookies",
      title: "Categories of Cookies We Use",
      description: "We categorize the cookies used on our website into four main types:",
      details: [
        "Strictly Necessary Cookies: Essential for the operation of our website, enabling core features such as security, user session management, and authentication.",
        "Analytical & Performance Cookies: Used to gather anonymous traffic analytics (such as Google Analytics), helping us understand visitor counts, popular pages, and performance bottlenecks to improve our services.",
        "Functionality Cookies: Allow our website to remember choices you make (such as language preferences or login statuses) to provide a more personalized experience.",
        "Targeting & Advertising Cookies: Set by third-party services (such as Leadfeeder) to help us identify corporate visitors and companies interested in our enterprise scientific services."
      ]
    },
    {
      id: "third-party-cookies",
      title: "Third-Party Cookies & Services",
      description: "In addition to our first-party cookies, we partner with trusted third-party analytics and optimization providers. These service providers may place their own cookies on your device to collect technical data (such as IP addresses and browsing behavior). For example, we use Google Analytics to track aggregated site metrics and Leadfeeder to assess interest from prospective business partners."
    },
    {
      id: "controlling-cookies",
      title: "Managing and Controlling Cookies",
      description: (
        <span>
          You have the right to accept or decline cookies. Most web browsers automatically accept cookies by default, but you can usually modify your browser settings to decline cookies if you prefer. To manage browser-level settings, check the instructions for your specific browser (e.g., Chrome, Firefox, Safari, Microsoft Edge). Please note that disabling or blocking certain essential cookies may restrict your access to key features of our website.
        </span>
      )
    },
    {
      id: "policy-updates",
      title: "Updates to This Cookie Policy",
      description: "Genquantaa reserves the right to update this Cookie Policy at any time to reflect changes in our practices, technologies, or legal requirements. Any modifications will be posted directly on this page with an updated revision date."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-300 font-sans selection:bg-blue-500/20 overflow-x-hidden">
      <Navbar />

      {/* Top Breadcrumb & Header Section */}
      <section className="pt-40 pb-12 px-6 max-w-4xl mx-auto text-left relative">
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>

        <div className="flex items-center gap-1 text-xs text-slate-500 font-mono mb-4">
          <Link to="/home" className="hover:text-blue-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-400">Cookie Policy</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Genquantaa Cookie Policy
          </h1>
          <p className="text-xs text-slate-500 font-mono">Cookie Policy • Last updated: June 2026</p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="pb-24 px-6 max-w-4xl mx-auto text-left relative z-10">
        <div className="space-y-8 text-slate-300 text-sm leading-relaxed font-light">
          
          <p className="text-base text-slate-200 font-normal">
            This Cookie Policy describes how Genquantaa uses cookies, pixels, trackers, and similar technologies on our website and digital services.
          </p>

          {/* Quick Contact Alert */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start">
            <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono mb-1">
                Questions or Feedback?
              </h4>
              <p className="text-xs text-slate-300">
                If you have any questions about our use of cookies or technical data processing, please contact us at{' '}
                <a href="mailto:info@Genquantaa.com" className="text-blue-400 hover:underline font-medium">info@Genquantaa.com</a>.
              </p>
            </div>
          </div>

          {/* Cookie Policy Card Sections */}
          <div className="space-y-6 pt-6">
            {sections.map((sec, idx) => (
              <motion.div
                key={sec.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-bold text-white tracking-wide">{sec.title}</h3>
                </div>
                
                <p className="leading-relaxed text-slate-300">
                  {sec.description}
                </p>

                {sec.details && (
                  <ul className="space-y-2.5 pl-5 list-disc text-slate-400 text-xs">
                    {sec.details.map((detail, dIdx) => (
                      <li key={dIdx}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
