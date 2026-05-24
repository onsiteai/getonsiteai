import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center">
          <Link to="/" className="text-sm font-semibold text-neutral-900 tracking-tight hover:text-neutral-600 transition-colors">
            Onsite
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <h1 className="text-3xl font-semibold text-neutral-900 tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-neutral-500 mb-10">Effective Date: May 24, 2026</p>

        <div className="prose prose-neutral prose-sm max-w-none space-y-8 text-neutral-700 leading-relaxed">
          <p>
            Onsite AI, Inc. ("Company," "we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our AI-powered platform (the "Service") for managing project workflows, customer communications, bidding, invoicing, and CRM operations for home renovation contractors and small brick-and-mortar service businesses.
          </p>
          <p>
            By using the Service, you consent to the practices described in this Privacy Policy. If you do not agree, please do not use the Service.
          </p>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">1. Information We Collect</h2>
            <p className="mb-3">We collect the following types of information:</p>

            <h3 className="text-sm font-semibold text-neutral-800 mb-2">Account and Business Information</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Name, email address, phone number, and business details (company name, address, license numbers, etc.)</li>
              <li>Login credentials and account preferences</li>
            </ul>

            <h3 className="text-sm font-semibold text-neutral-800 mb-2">User Content and Customer Data</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Project details, bids, invoices, estimates, timelines, and communications you create or upload</li>
              <li>Customer information (names, addresses, phone numbers, emails, project preferences) that you input ("Customer PII")</li>
              <li>Files, photos, documents, and notes related to your renovation or service projects</li>
            </ul>

            <h3 className="text-sm font-semibold text-neutral-800 mb-2">Automatically Collected Information</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Usage data (features accessed, actions taken, session duration)</li>
              <li>Device and technical data (IP address, browser type, operating system, device identifiers)</li>
              <li>AI interaction data (prompts, inputs, and generated outputs)</li>
            </ul>

            <h3 className="text-sm font-semibold text-neutral-800 mb-2">Payment Information</h3>
            <p>We use third-party payment processors. We do not store full credit card numbers.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">2. How We Use Your Information</h2>
            <p className="mb-3">We use the collected information to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide, operate, and improve the Service</li>
              <li>Generate AI-powered bids, invoices, recommendations, and automations</li>
              <li>Process transactions and manage subscriptions</li>
              <li>Communicate with you (service updates, support, marketing with consent)</li>
              <li>Analyze usage patterns and personalize your experience</li>
              <li>Train, develop, and enhance our AI models (using only anonymized or aggregated data)</li>
              <li>Detect security issues, prevent fraud, and enforce our Terms of Service</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">3. Sharing of Information</h2>
            <p className="mb-3">We may share your information in the following situations:</p>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li><strong>Service Providers and Subprocessors:</strong> We work with trusted third parties (cloud hosting, AI model providers, payment processors, analytics services) who process data on our behalf. A list of key subprocessors is available upon request.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
              <li><strong>Legal Requirements:</strong> When required by law, subpoena, court order, or government request.</li>
              <li><strong>With Your Consent:</strong> When you explicitly direct us to share information (e.g., sharing project details with your customers).</li>
            </ul>
            <p>We do not sell your personal information or Customer PII to third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">4. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide the Service. Upon account termination, we will delete or anonymize your data within 30 days after the export window, except where we are required to retain it for legal or security reasons. Aggregated and anonymized data may be retained indefinitely for analytics and AI improvement.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">5. Your Rights and Choices</h2>
            <p className="mb-3">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Access, correct, or delete your personal information</li>
              <li>Opt out of certain processing activities</li>
              <li>Download a copy of your data (data portability)</li>
              <li>Withdraw consent where applicable</li>
            </ul>
            <p className="mb-3">To exercise these rights, contact us at <a href="mailto:tyeetale@gmail.com" className="text-neutral-900 underline underline-offset-2">tyeetale@gmail.com</a>. We will respond within a reasonable timeframe.</p>
            <p><strong>Note for Business Users:</strong> You are responsible for ensuring you have proper legal authority and customer consent before uploading Customer PII into the Service.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">6. Data Security</h2>
            <p className="mb-3">
              We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no system is completely secure. We cannot guarantee absolute security. You are responsible for keeping your account credentials confidential.
            </p>
            <p>In the event of a data breach that affects your data, we will notify you as required by applicable law.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">7. Children's Privacy (COPPA)</h2>
            <p>
              The Service is intended for business use by adults. We do not knowingly collect data from children under 13. If you become aware that a child under 13 has provided information, please contact us immediately so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">8. International Data Transfers</h2>
            <p>
              If you are located outside the United States, please note that your information will be transferred to and processed in the United States (or other countries where our service providers operate). By using the Service, you consent to this transfer.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes by email or in-app notice. Your continued use of the Service after the updated policy becomes effective constitutes your acceptance of the changes.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">10. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <address className="not-italic mt-3 space-y-1 text-sm">
              <p>Email: <a href="mailto:tyeetale@gmail.com" className="text-neutral-900 underline underline-offset-2">tyeetale@gmail.com</a></p>
              <p>Address: 4532 42nd Ave Southwest Unit 404, Seattle, WA, 98116</p>
              <p>Company: Onsite AI, Inc.</p>
            </address>
          </section>
        </div>
      </main>

      <footer className="border-t border-neutral-200 bg-white mt-16">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-xs text-neutral-400">© 2026 Onsite</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
