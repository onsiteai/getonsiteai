import { Link } from 'react-router-dom'

export default function TermsOfService() {
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
        <h1 className="text-3xl font-semibold text-neutral-900 tracking-tight mb-2">Terms of Service</h1>
        <p className="text-sm text-neutral-500 mb-10">Effective Date: May 24, 2026</p>

        <div className="prose prose-neutral prose-sm max-w-none space-y-8 text-neutral-700 leading-relaxed">
          <p>
            These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Onsite AI, Inc. ("Company," "we," "us," or "our"), governing your access to and use of our AI-powered platform (the "Service") for home renovation contractors and small brick-and-mortar service businesses.
          </p>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, you must not use the Service.
          </p>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">1. Eligibility and Accounts</h2>
            <p className="mb-3">
              You must be at least 18 years old and legally capable of entering into contracts in your jurisdiction. You represent that you are using the Service in your capacity as a business owner, contractor, or authorized representative of a business, not as a consumer.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">2. License and Permitted Use</h2>
            <p className="mb-3">
              We grant you a limited, non-exclusive, non-transferable, revocable license to use the Service solely for managing your own legitimate business operations (project workflows, customer communications, bidding, invoicing, and CRM).
            </p>
            <p>
              You may not resell, rent, lease, sublicense, reverse engineer, or use the Service to build a competing product.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">3. AI Features and Automation</h2>
            <p className="mb-3">
              Our Service includes AI-driven tools for generating suggestions, automating workflows, creating content, calculating bids, generating invoices, and providing decision support.
            </p>
            <p className="font-semibold text-neutral-800 mb-2">Critical User Responsibilities:</p>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li>You are solely and entirely responsible for reviewing, verifying, and approving all AI-generated outputs, including but not limited to bids, invoices, cost calculations, material estimates, timelines, project recommendations, and customer communications.</li>
              <li>You must independently verify the accuracy of all calculations, pricing, quantities, labor rates, taxes, and any financial or technical information before using, sending, or relying on them.</li>
              <li>We provide AI outputs for informational and assistive purposes only. The Company does not guarantee the accuracy, completeness, reliability, or legal/financial correctness of any AI-generated content.</li>
              <li>Any errors, omissions, miscalculations, or inaccuracies in bids, invoices, or other outputs are your sole responsibility. You agree that you will not hold the Company liable for any consequences arising from the use of such outputs.</li>
              <li>You remain fully responsible for ensuring compliance with all applicable laws, building codes, contract terms, tax regulations, licensing requirements, and consumer protection rules in your jurisdiction.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">4. User Content and Data</h2>
            <p className="mb-3">
              You retain ownership of the data and content you upload or input into the Service ("User Data"). By using the Service, you grant us a worldwide, non-exclusive, royalty-free license to host, process, analyze, and use your User Data solely as necessary to provide, improve, and support the Service.
            </p>
            <p>
              You represent and warrant that your User Data does not infringe any third-party rights and complies with all applicable laws. You acknowledge that we may use anonymized and aggregated User Data to train, improve, and develop our AI models and algorithms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">5. Prohibited Conduct</h2>
            <p>
              You agree not to use the Service for any illegal, fraudulent, or harmful purpose, send spam, upload malicious code, or interfere with the Service's security.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">6. Payments and Billing</h2>
            <p>
              You agree to pay all applicable fees. Payments are generally non-refundable. Late payments may result in suspension or termination of your account.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">7. Intellectual Property</h2>
            <p>
              All intellectual property rights in the Service, including AI models and software, belong to the Company or its licensors.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">8. Privacy</h2>
            <p>
              Please review our separate <Link to="/privacy" className="text-neutral-900 underline underline-offset-2">Privacy Policy</Link>, which is incorporated into these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">9. No Warranties; Disclaimer</h2>
            <p className="uppercase text-xs tracking-wide">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES. WE DISCLAIM ALL IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">10. Limitation of Liability</h2>
            <p className="uppercase text-xs tracking-wide mb-3">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES.
            </p>
            <p>
              Our total liability shall not exceed the total amount you paid to us in the twelve (12) months prior to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">11. Indemnification</h2>
            <p className="mb-3">You agree to indemnify, defend, and hold harmless the Company from any claims, damages, losses, and expenses (including attorneys' fees) arising from:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your use of the Service;</li>
              <li>Your reliance on any AI-generated outputs, bids, or invoices;</li>
              <li>Any errors or inaccuracies in bids, invoices, or calculations created using the Service;</li>
              <li>Your violation of these Terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">12. Termination</h2>
            <p>
              We may suspend or terminate your access at any time for breach of these Terms or for any other reason.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">13. Data Breach and Security Incident Notification</h2>
            <p>
              We maintain reasonable administrative, technical, and physical safeguards designed to protect your User Data against unauthorized access, disclosure, alteration, or destruction. In the event of a confirmed security breach that affects your User Data, we will notify you without undue delay and, where required, within the timeframe mandated by applicable law. Notification will be provided via the email address associated with your account. You are solely responsible for maintaining accurate contact information in your account settings. We are not liable for any damages arising from a breach caused by your failure to maintain reasonable security practices on your end, including protecting your account credentials.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">14. Subprocessors and Third-Party AI Providers</h2>
            <p>
              To deliver the Service, we may engage third-party vendors and subprocessors, including artificial intelligence and machine learning providers, cloud infrastructure services, and payment processors. These subprocessors may process your User Data solely as necessary to provide the Service. By using the Service, you consent to this processing. We require our subprocessors to maintain data protection standards consistent with our obligations under these Terms. A current list of our key subprocessors is available upon request at <a href="mailto:tyeetale@gmail.com" className="text-neutral-900 underline underline-offset-2">tyeetale@gmail.com</a>. We will make reasonable efforts to notify you of any material changes to our subprocessor relationships that may affect the processing of your User Data.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">15. Service Availability</h2>
            <p>
              We will use commercially reasonable efforts to keep the Service available and operational. However, we do not guarantee uninterrupted or error-free access. The Service may be temporarily unavailable due to scheduled maintenance, unplanned outages, third-party service failures, or events beyond our reasonable control. We will make reasonable efforts to provide advance notice of scheduled maintenance via your registered email or in-app notification. Downtime or service interruptions do not entitle you to a refund or credit unless otherwise specified in a separate written agreement with the Company.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">16. Beta Features</h2>
            <p>
              From time to time, we may offer access to features, tools, or functionality that are designated as "beta," "preview," "early access," or similar ("Beta Features"). Beta Features are provided as-is, without warranty of any kind, and may contain errors, produce inaccurate outputs, or be discontinued at any time without notice. Your use of Beta Features is entirely at your own risk. The Company shall have no liability arising from your reliance on any output, recommendation, calculation, or action taken in connection with a Beta Feature. Feedback you provide regarding Beta Features may be used by us to improve the Service without any obligation to you.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">17. Sensitive Customer Data and PII Obligations</h2>
            <p className="mb-3">
              In the course of using the Service, you may input, store, or transmit personally identifiable information ("PII") belonging to your customers, including names, addresses, phone numbers, and email addresses ("Customer PII"). You represent and warrant that you have obtained all necessary consents and have the legal right to upload and process such Customer PII through the Service.
            </p>
            <p className="mb-3">
              You are solely responsible for complying with all applicable privacy laws governing the collection, storage, use, and disclosure of Customer PII in your jurisdiction, including but not limited to the California Consumer Privacy Act (CCPA) and any applicable state or local equivalents.
            </p>
            <p className="mb-3">
              You agree not to input into the Service any sensitive personal data including Social Security numbers, financial account numbers, government-issued ID numbers, or health-related information unless expressly authorized in writing by the Company.
            </p>
            <p>
              You agree to indemnify us against any claims arising from your failure to obtain proper consents or your unauthorized upload of sensitive personal data.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">18. Data Export and Deletion Upon Cancellation</h2>
            <p className="mb-3">
              Upon cancellation or termination of your account, you may request an export of your User Data within thirty (30) days of the termination date by contacting us at <a href="mailto:tyeetale@gmail.com" className="text-neutral-900 underline underline-offset-2">tyeetale@gmail.com</a>. We will provide your data in a commonly used, machine-readable format.
            </p>
            <p className="mb-3">
              After the thirty (30) day window has elapsed, we reserve the right to delete your User Data from our systems in accordance with our data retention policies, except where we are required to retain it by law. We are not responsible for any loss of data that occurs after the thirty (30) day export window.
            </p>
            <p>
              Certain anonymized or aggregated data derived from your use of the Service may be retained indefinitely for product improvement and analytics purposes.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">19. COPPA — Children's Privacy</h2>
            <p className="mb-3">
              The Service is intended solely for use by adults operating legitimate business entities. The Service is not directed at, and is not intended for use by, individuals under the age of 13. We do not knowingly collect, solicit, or process personally identifiable information from children under the age of 13. If you believe that a child under 13 has provided personal information to us through the Service, please contact us immediately at <a href="mailto:tyeetale@gmail.com" className="text-neutral-900 underline underline-offset-2">tyeetale@gmail.com</a> so that we may take steps to delete such information.
            </p>
            <p>
              As a business user of the Service, you represent and warrant that you will not input, upload, or otherwise submit any personally identifiable information belonging to individuals under the age of 13 into the Service. You are solely responsible for ensuring that your use of the Service, including any customer data you manage through the platform, complies with COPPA and all other applicable laws protecting the privacy of minors.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">20. Force Majeure</h2>
            <p>
              We will not be liable for any failure or delay in performance due to events beyond our reasonable control, including but not limited to acts of God, war, terrorism, strikes, internet or utility failures, pandemics, government orders, or third-party service disruptions.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">21. Feedback</h2>
            <p>
              You may submit feedback, suggestions, or ideas about the Service ("Feedback"). By submitting Feedback, you grant us a perpetual, irrevocable, royalty-free, worldwide license to use, modify, and incorporate it into the Service without any compensation or obligation to you. We are under no obligation to implement or respond to any Feedback.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">22. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict of laws principles. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in Wilmington, Delaware, and the parties hereby irrevocably consent to the personal jurisdiction and venue therein.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">23. Changes to Terms</h2>
            <p>
              We may update these Terms with notice. Your continued use after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">24. Miscellaneous</h2>
            <p>
              These Terms constitute the entire agreement between you and the Company and supersede all prior agreements. If any provision of these Terms is held invalid or unenforceable, the remaining provisions will remain in full force. Our failure to enforce any right or provision will not constitute a waiver. You may not assign these Terms without our prior written consent. We may assign these Terms freely. No agency, partnership, or joint venture is created by these Terms. Headings are for convenience only.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-neutral-900 mb-3">Contact Us</h2>
            <address className="not-italic space-y-1 text-sm">
              <p>Email: <a href="mailto:tyeetale@gmail.com" className="text-neutral-900 underline underline-offset-2">tyeetale@gmail.com</a></p>
              <p>Address: 4532 42nd Ave Southwest Unit 404, Seattle, WA, 98116</p>
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
