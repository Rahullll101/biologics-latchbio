import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FileText, Mail, ChevronRight } from 'lucide-react';

interface TermSection {
  id: string;
  title: string;
  bullets: (string | React.ReactNode)[];
}

export default function TermsPage() {
  const sections: TermSection[] = [
    {
      id: "general",
      title: "General",
      bullets: [
        "Only this Purchase Order constitutes the contract between the parties for the purchase of the goods and/or services.",
        "Vendor agrees to supply, and Client agrees to accept the goods or services as listed in the Purchase Order, subject to the terms of the Purchase Order. The supply of goods or services is subject to these terms. The conditions on the reverse side of this order form are the only terms and conditions on which Client is prepared to deal with Vendor.",
        "Any terms that conflict with or modify this Purchase Order are rejected unless approved by Client in writing. Vendor agrees to waive all other standard terms.",
        "Terms of payment apply to all goods and services. Supplier's terms of business do not apply to this transaction.",
        "Time is of the essence for delivery of all goods and services.",
        "Vendor is responsible for the performance of its sub-contractors.",
        "GenQuantaa Pvt Ltd (Zerokost Healthcare Pvt Ltd) is responsible for the import customs clearing of goods, unless otherwise agreed."
      ]
    },
    {
      id: "delivery",
      title: "Delivery & Acceptance",
      bullets: [
        "Deliveries must be made on the dates, in the quantities and at the times specified in the Purchase Order, or if no dates are specified, within a reasonable time. Delivery must be made during Client's normal business hours to the address specified in the Purchase Order.",
        "Vendor must obtain Client's prior approval in writing for any variations in specifications or quantities.",
        "Title and risk of loss pass to Client upon delivery.",
        "All goods and services are subject to inspection and acceptance by Client. If Client rejects any goods or services, Vendor must promptly replace or re-perform them at no additional cost."
      ]
    },
    {
      id: "rejection",
      title: "Rejection & Termination",
      bullets: [
        "Client may reject any goods or services that do not comply with the Purchase Order or these terms. If Client rejects any goods or services, Vendor must promptly replace or re-perform them at no additional cost.",
        "Client may terminate the Purchase Order for convenience at any time by giving written notice to Vendor. In the event of such termination, Client's sole liability is to pay for goods or services accepted up to the date of termination.",
        "Either party may terminate the Purchase Order immediately by giving written notice if the other party is in material breach and fails to remedy the breach within 30 days of receiving notice.",
        "Either party may terminate the Purchase Order immediately if the other party becomes insolvent, goes into liquidation, or has a receiver appointed.",
        "Upon termination or cancellation, Vendor must immediately cease all work and return all Client property, confidential information, and deliverables."
      ]
    },
    {
      id: "warranties",
      title: "Warranties, Standards of Goods / Fulfilment of Order",
      bullets: [
        "Vendor warrants that all goods supplied are of satisfactory quality, fit for purpose, and free from defects in design, materials, and workmanship.",
        "Vendor warrants that all services will be performed with reasonable skill, care, and diligence, and in accordance with best industry practices and standards.",
        "Vendor warrants that it has all necessary licenses, permits, and consents to perform its obligations.",
        "Vendor warrants that the goods or services do not infringe any third-party intellectual property rights.",
        "Vendor must comply with all applicable laws, regulations, and standards, including health, safety, and environmental laws."
      ]
    },
    {
      id: "obligations",
      title: "Supplier's Obligations",
      bullets: [
        "Vendor must act in good faith and cooperate with Client in all matters relating to the Purchase Order.",
        "Vendor must provide Client with all necessary information and documentation, including safety data sheets and compliance certificates.",
        "Vendor must maintain appropriate insurance coverage, including public liability and professional indemnity insurance, and provide proof of coverage upon request."
      ]
    },
    {
      id: "billing",
      title: "Billing & Payment",
      bullets: [
        <span key="billing-email">
          Vendor must submit invoices containing the Purchase Order number and Client contact details. Invoices should be sent to the email address specified in the Purchase Order:{' '}
          <a href="mailto:support@Genquantaa.com" className="text-blue-400 hover:underline font-medium">support@Genquantaa.com</a>.
        </span>,
        "Invoices must be in the currency specified in the Purchase Order.",
        "Client will pay correct invoices within 60 days of receipt, subject to any withholding tax.",
        "Client may set off any amounts owed by Vendor against any payments due to Vendor."
      ]
    },
    {
      id: "audit",
      title: "Audit & Inspection",
      bullets: [
        "Client or its representatives may inspect Vendor's premises, records, and operations to verify compliance with the Purchase Order and applicable laws.",
        "Vendor must cooperate with any audits and provide access to all relevant documents.",
        "Vendor must retain all records related to the Purchase Order for 7 years after completion or termination."
      ]
    },
    {
      id: "conflict",
      title: "Conflict of Interest",
      bullets: [
        "Vendor warrants that it has no conflict of interest that would affect its performance under the Purchase Order.",
        "Vendor must immediately notify Client of any actual or potential conflict of interest.",
        "If a conflict of interest arises, Client may terminate the Purchase Order immediately."
      ]
    },
    {
      id: "confidential",
      title: "Confidential Information",
      bullets: [
        "Vendor must keep all Client information confidential and use it only to perform its obligations under the Purchase Order.",
        "Vendor must protect Client information with at least the same degree of care it uses for its own confidential information, but no less than reasonable care.",
        "Vendor must notify Client immediately of any unauthorized disclosure or use of confidential information."
      ]
    },
    {
      id: "law",
      title: "Law & Jurisdiction",
      bullets: [
        "The contract is governed by and shall be construed in accordance with the laws of India. Any dispute arising out of or in connection with this contract, including any question regarding its existence, validity or termination, shall be referred to and finally resolved by arbitration in Chennai in accordance with the Arbitration and Conciliation Act, 1996.",
        "The arbitration shall be conducted in English.",
        "The seat of arbitration shall be Chennai, India."
      ]
    },
    {
      id: "withholding",
      title: "Withholding Tax",
      bullets: [
        "If Client is required by law to withhold tax, Client will deduct the withholding tax and pay the net amount to Vendor.",
        "Client will provide Vendor with a certificate of withholding tax.",
        "Vendor is responsible for all other taxes, duties, and levies."
      ]
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
          <span className="text-slate-400">Terms & Conditions</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            GenQuantaa Pvt Ltd (Zerokost Healthcare Pvt Ltd) General Terms of Business
          </h1>
          <p className="text-xs text-slate-500 font-mono">Terms and Conditions • Last updated: June 2026</p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="pb-24 px-6 max-w-4xl mx-auto text-left relative z-10">
        <div className="space-y-8 text-slate-300 text-sm leading-relaxed font-light">
          
          <p className="text-base text-slate-200 font-normal">
            These General Terms of Business apply to all transactions, purchase orders, agreements, and deliverables between GenQuantaa Pvt Ltd (Zerokost Healthcare Pvt Ltd) and its vendors, partners, or service providers. Please review these terms carefully.
          </p>

          {/* Quick Contact Alert */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start">
            <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono mb-1">
                Legal & Business Terms Inquiries
              </h4>
              <p className="text-xs text-slate-300">
                For questions or requests regarding these General Terms of Business, please contact our administrative team at{' '}
                <a href="mailto:support@Genquantaa.com" className="text-blue-400 hover:underline font-medium">support@Genquantaa.com</a>.
              </p>
            </div>
          </div>

          {/* Terms Sections Card List */}
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
                  <FileText className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-bold text-white tracking-wide">{sec.title}</h3>
                </div>
                
                <ul className="space-y-3 pl-5 list-disc text-slate-300">
                  {sec.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
