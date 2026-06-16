import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Mail, ChevronRight } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-300 font-sans selection:bg-blue-500/20 overflow-x-hidden">
      <Navbar />

      {/* Top Breadcrumb & Header Section */}
      <section className="pt-40 pb-12 px-6 max-w-4xl mx-auto text-left relative">
        {/* Soft background glow accents */}
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>

        <div className="flex items-center gap-1 text-xs text-slate-500 font-mono mb-4">
          <Link to="/home" className="hover:text-blue-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-400">Privacy Policy</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 font-mono">Last updated: April 2026</p>
        </div>
      </section>

      {/* Main Content Document Layout */}
      <section className="pb-24 px-6 max-w-4xl mx-auto text-left relative z-10">
        <div className="space-y-8 text-slate-300 text-sm leading-relaxed font-light">
          
          <p className="text-base text-slate-200 font-normal">
            GenQuantaa Pvt Ltd (Zerokost Healthcare Pvt Ltd) respects your privacy and this privacy statement has been created to demonstrate our firm commitment to protect it. We understand that your privacy and your documents' security on the Internet are extremely important, and we handle your information with care and transparency.
          </p>

          {/* Quick Contact Info Alert */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start">
            <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono mb-1">
                Privacy Enquiries & Concerns
              </h4>
              <p className="text-xs text-slate-300">
                If you believe our privacy policy has been violated or have any concerns, please send an email to{' '}
                <a href="mailto:support@genquantaa.com" className="text-blue-400 hover:underline font-medium">support@genquantaa.com</a>.
              </p>
            </div>
          </div>

          <p>
            In general, using our site as a visitor may be considered anonymous. We do not engage in any activity that personally identifies visitors unless you voluntarily provide information through a contact form or communication with us.
          </p>

          <p>
            We may collect limited technical information such as your IP address, browser type, operating system, referring URLs and pages visited. This information helps us diagnose problems with our server, administer our website (<a href="https://www.genquantaa.com" className="text-blue-400 hover:underline">www.genquantaa.com</a>), and identify the most used features so that we can improve the site. Your IP address may also be used to gather broad demographic information, but we do not link this to anything personally identifiable.
          </p>

          <p>
            Information that you provide directly through forms or inquiries, such as your name, email address, company or phone number, is used only to respond to your request or to improve our communication and services. Information collected through our website is stored on secure systems managed by us or our hosting partners, and access is limited to authorized personnel who need it for operational purposes.
          </p>

          <p>
            We may share limited information with trusted service providers such as hosting or analytics partners who assist in the operation of our website under strict security obligations. We may also disclose information when required by law to comply with legal processes. We do not sell or rent personal information, and we do not disclose it to third parties for marketing purposes.
          </p>

          <p>
            Our website and services are not directed to children under 13 years of age, and we do not knowingly collect personal information from them. If we become aware that such information has been collected, we will delete it promptly.
          </p>

          {/* Links */}
          <div className="space-y-3 pt-4 border-t border-white/5">
            <h3 className="text-lg font-bold text-white">Links</h3>
            <p>
              This website contains links to other websites. GenQuantaa Pvt Ltd (Zerokost Healthcare Pvt Ltd) is not responsible for the privacy practices or the contents of such websites, nor do we take any responsibility for the opinions of third parties expressed on or through our website.
            </p>
          </div>

          {/* Personal Info updates */}
          <div className="space-y-3 pt-4 border-t border-white/5">
            <h3 className="text-lg font-bold text-white">Correcting / Updating / Deleting / Deactivating Personal Information</h3>
            <p>
              If a user's personally identifiable information changes (such as zip code, phone, email or postal address), or if a user no longer desires our service, we provide a way to correct, update, or remove/deactivate that user's personally identifiable information. This can also be done by sending an email to{' '}
              <a href="mailto:support@genquantaa.com" className="text-blue-400 hover:underline">support@genquantaa.com</a>.
              {' '}We will review and respond in accordance with applicable data protection requirements. Some information may need to be retained for legal or operational purposes.
            </p>
          </div>

          {/* Compliance */}
          <div className="space-y-3 pt-4 border-t border-white/5">
            <h3 className="text-lg font-bold text-white">Compliance with Privacy and Communications Laws</h3>
            <p>
              We handle all personal and electronic communication data in accordance with applicable privacy, data protection, and communication laws in the regions where our website is accessed. We do not monitor or intercept communications except as permitted by law and only for the purpose of providing or improving our services.
            </p>
          </div>

          {/* Cookies */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <h3 className="text-lg font-bold text-white">Cookies and Preferences</h3>
            <p>
              Our website uses cookies to understand how visitors use our site and to improve performance and functionality. Cookie preferences are managed through the Privacy Preference Center which appears when you visit our website. You can review and change your cookie configurations at any time.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-400 font-light list-disc pl-5">
              <li>
                <strong className="text-slate-200 font-semibold font-mono">Strictly necessary cookies</strong> that enable core site functionality and cannot be turned off.
              </li>
              <li>
                <strong className="text-slate-200 font-semibold font-mono">Performance Cookies</strong> that measure visits and traffic sources to help us improve the site.
              </li>
              <li>
                <strong className="text-slate-200 font-semibold font-mono">Targeting Cookies</strong> that may be set by our advertising partners to provide relevant content on other sites.
              </li>
            </ul>

            <p>
              Performance cookies and targeting cookies are activated only after you have provided consent through the Privacy Preference Center. Strictly necessary cookies that enable core site functionality remain active at all times. This consent-based approach ensures that no non-essential data is collected or shared before permission is given.
            </p>

            <p>
              We use third-party tools, such as Leadfeeder, to help identify business visitors to our website based on IP addresses and linked publicly available business information. These tools may also use first-party cookies or process domain information submitted through forms to support and improve our services. For more information, including available opt-out options, please email us at{' '}
              <a href="mailto:support@genquantaa.com" className="text-blue-400 hover:underline">support@genquantaa.com</a>.
            </p>

            <p>
              We also use third-party cookies such as Google Analytics to understand site usage and visitor demographics. All analytics data collected is aggregated and not used to personally identify visitors.
            </p>

            <p>
              You can stop your browser from accepting cookies altogether by changing the browser's cookie settings, usually found in the 'options' or 'preferences' menu. Disabling some cookies may affect certain site features, but essential functions will remain available.
            </p>
          </div>

          {/* Contacting Website */}
          <div className="space-y-3 pt-6 border-t border-white/5">
            <h3 className="text-lg font-bold text-white">Contacting the Web Site</h3>
            <p>
              If you have any questions about this privacy statement, the practices of this site, or your dealings with this website, you can contact us at{' '}
              <a href="mailto:support@genquantaa.com" className="text-blue-400 hover:underline font-medium">support@genquantaa.com</a>.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
