import { Link } from 'react-router-dom'
import { LegalPage } from '@/components/Site'

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="Effective Date: May 24, 2026. Last updated: November 17, 2026.">
      <p>Onsite AI, Inc. ("Company," "we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our AI-powered platform (the "Service") for managing project workflows, customer communications, bidding, invoicing, and CRM operations for home renovation contractors and small brick-and-mortar service businesses.</p>
      <p>By using the Service, you consent to the practices described in this Privacy Policy. If you do not agree, please do not use the Service.</p>

      <h2>1. Information We Collect</h2>
      <p>We collect the following types of information:</p>
      <h3>Account and Business Information</h3>
      <ul>
        <li>Name, email address, phone number, and business details (company name, address, license numbers, etc.)</li>
        <li>Login credentials and account preferences</li>
      </ul>
      <h3>User Content and Customer Data</h3>
      <ul>
        <li>Project details, bids, invoices, estimates, timelines, and communications you create or upload</li>
        <li>Customer information (names, addresses, phone numbers, emails, project preferences) that you input ("Customer PII")</li>
        <li>Files, photos, documents, and notes related to your renovation or service projects</li>
      </ul>
      <h3>Automatically Collected Information</h3>
      <ul>
        <li>Usage data (features accessed, actions taken, session duration)</li>
        <li>Device and technical data (IP address, browser type, operating system, device identifiers)</li>
        <li>AI interaction data (prompts, inputs, and generated outputs)</li>
      </ul>
      <h3>Payment Information</h3>
      <p>We use third-party payment processors. We do not store full credit card numbers.</p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the collected information to:</p>
      <ul>
        <li>Provide, operate, and improve the Service</li>
        <li>Generate AI-powered bids, invoices, recommendations, and automations</li>
        <li>Process transactions and manage subscriptions</li>
        <li>Communicate with you (service updates, support, marketing with consent)</li>
        <li>Analyze usage patterns and personalize your experience</li>
        <li>Train, develop, and enhance our AI models (using only anonymized or aggregated data)</li>
        <li>Detect security issues, prevent fraud, and enforce our Terms of Service</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>We may share your information in the following situations:</p>
      <ul>
        <li><b>Service Providers and Subprocessors:</b> We work with trusted third parties (cloud hosting, AI model providers, payment processors, analytics services) who process data on our behalf. A list of key subprocessors is available upon request.</li>
        <li><b>Business Transfers:</b> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
        <li><b>Legal Requirements:</b> When required by law, subpoena, court order, or government request.</li>
        <li><b>With Your Consent:</b> When you explicitly direct us to share information (e.g., sharing project details with your customers).</li>
      </ul>
      <p>We do not sell your personal information or Customer PII to third parties for marketing purposes.</p>

      <h2>4. Third-Party AI Providers</h2>
      <p>Our AI features rely on large language models and related services operated by independent third parties. We route AI requests through OpenRouter, Inc., a model-routing service, and through other external AI model providers (together, "AI Providers"). When you use AI features, the content you submit, which may include project details, files, estimates, communications, and Customer PII ("AI Inputs"), is transmitted to OpenRouter and to the AI Provider that processes the request.</p>
      <p>AI Providers are not owned, operated, or controlled by us. They receive, process, store, and secure AI Inputs and AI-generated outputs under their own terms of service and privacy policies, and their practices may differ from ours.</p>
      <p>We are not responsible for the privacy, security, or data retention practices of OpenRouter or any AI Provider. To the maximum extent permitted by applicable law, we are not liable for any unauthorized access, breach, leak, or misuse of your information or Customer PII that occurs on systems operated by an AI Provider, including where an AI Provider's systems are compromised.</p>
      <p>Do not submit trade secrets, confidential business information, account credentials, financial account numbers, or other sensitive information through AI features unless you accept this risk. Our <Link to="/terms">Terms of Service</Link> (Section 15) describe these limits in full.</p>

      <h2>5. Data Retention</h2>
      <p>We retain your data for as long as your account is active or as needed to provide the Service. Upon account termination, we will delete or anonymize your data within 30 days after the export window, except where we are required to retain it for legal or security reasons. Aggregated and anonymized data may be retained indefinitely for analytics and AI improvement.</p>

      <h2>6. Your Rights and Choices</h2>
      <p>Depending on your location, you may have the following rights:</p>
      <ul>
        <li>Access, correct, or delete your personal information</li>
        <li>Opt out of certain processing activities</li>
        <li>Download a copy of your data (data portability)</li>
        <li>Withdraw consent where applicable</li>
      </ul>
      <p>To exercise these rights, contact us at hello@getonsiteai.com. We will respond within a reasonable timeframe.</p>
      <p><b>Note for Business Users:</b> You are responsible for ensuring you have proper legal authority and customer consent before uploading Customer PII into the Service.</p>

      <h2>7. Data Security</h2>
      <p>We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no system is completely secure. We cannot guarantee absolute security. You are responsible for keeping your account credentials confidential.</p>
      <p>In the event of a data breach that affects your data, we will notify you as required by applicable law.</p>

      <h2>8. Children's Privacy (COPPA)</h2>
      <p>The Service is intended for business use by adults. We do not knowingly collect data from children under 13. If you become aware that a child under 13 has provided information, please contact us immediately so we can delete it.</p>

      <h2>9. International Data Transfers</h2>
      <p>If you are located outside the United States, please note that your information will be transferred to and processed in the United States (or other countries where our service providers operate). By using the Service, you consent to this transfer.</p>

      <h2>10. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of material changes by email or in-app notice. Your continued use of the Service after the updated policy becomes effective constitutes your acceptance of the changes.</p>

      <h2>11. Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
      <p className="contact">Email: <a href="mailto:hello@getonsiteai.com">hello@getonsiteai.com</a><br />Company: Onsite AI, Inc.</p>
    </LegalPage>
  )
}
