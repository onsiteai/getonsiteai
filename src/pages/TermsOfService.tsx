import { Link } from 'react-router-dom'
import { LegalPage } from '@/components/Site'

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" updated="Effective Date: May 24, 2026. Last updated: November 22, 2026.">
      <p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Onsite AI, Inc. ("Company," "we," "us," or "our"), governing your access to and use of our AI-powered platform (the "Service") for home renovation contractors and small brick-and-mortar service businesses.</p>
      <p>By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, you must not use the Service.</p>

      <h2>1. Eligibility and Accounts</h2>
      <p>You must be at least 18 years old and legally capable of entering into contracts in your jurisdiction. You represent that you are using the Service in your capacity as a business owner, contractor, or authorized representative of a business, not as a consumer.</p>
      <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized access.</p>

      <h2>2. License and Permitted Use</h2>
      <p>We grant you a limited, non-exclusive, non-transferable, revocable license to use the Service solely for managing your own legitimate business operations (project workflows, customer communications, bidding, invoicing, and CRM).</p>
      <p>You may not resell, rent, lease, sublicense, reverse engineer, or use the Service to build a competing product.</p>

      <h2>3. AI Features and Automation</h2>
      <p>Our Service includes AI-driven tools for generating suggestions, automating workflows, creating content, calculating bids, generating invoices, and providing decision support.</p>
      <p><b>Critical User Responsibilities:</b></p>
      <ul>
        <li>You are solely and entirely responsible for reviewing, verifying, and approving all AI-generated outputs, including but not limited to bids, invoices, cost calculations, material estimates, timelines, project recommendations, and customer communications.</li>
        <li>You must independently verify the accuracy of all calculations, pricing, quantities, labor rates, taxes, and any financial or technical information before using, sending, or relying on them.</li>
        <li>We provide AI outputs for informational and assistive purposes only. The Company does not guarantee the accuracy, completeness, reliability, or legal/financial correctness of any AI-generated content.</li>
        <li>Any errors, omissions, miscalculations, or inaccuracies in bids, invoices, or other outputs are your sole responsibility. You agree that you will not hold the Company liable for any consequences arising from the use of such outputs.</li>
        <li>You remain fully responsible for ensuring compliance with all applicable laws, building codes, contract terms, tax regulations, licensing requirements, and consumer protection rules in your jurisdiction.</li>
      </ul>

      <h2>4. User Content and Data</h2>
      <p>You retain ownership of the data and content you upload or input into the Service ("User Data"). By using the Service, you grant us a worldwide, non-exclusive, royalty-free license to host, process, analyze, and use your User Data solely as necessary to provide, improve, and support the Service.</p>
      <p>You represent and warrant that your User Data does not infringe any third-party rights and complies with all applicable laws. You acknowledge that we may use anonymized and aggregated User Data to train, improve, and develop our AI models and algorithms.</p>

      <h2>5. Prohibited Conduct</h2>
      <p>You agree not to use the Service for any illegal, fraudulent, or harmful purpose, send spam, upload malicious code, or interfere with the Service's security.</p>

      <h2>6. Payments and Billing</h2>
      <p>You agree to pay all applicable fees. Payments are generally non-refundable. Late payments may result in suspension or termination of your account.</p>

      <h2>7. Intellectual Property</h2>
      <p>All intellectual property rights in the Service, including AI models and software, belong to the Company or its licensors.</p>

      <h2>8. Privacy</h2>
      <p>Please review our separate <Link to="/privacy">Privacy Policy</Link>, which is incorporated into these Terms.</p>

      <h2>9. No Warranties; Disclaimer</h2>
      <p>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES. WE DISCLAIM ALL IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>

      <h2>10. Limitation of Liability</h2>
      <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES.</p>
      <p>Our total liability shall not exceed the total amount you paid to us in the twelve (12) months prior to the claim.</p>

      <h2>11. Indemnification</h2>
      <p>You agree to indemnify, defend, and hold harmless the Company from any claims, damages, losses, and expenses (including attorneys' fees) arising from:</p>
      <ul>
        <li>Your use of the Service;</li>
        <li>Your reliance on any AI-generated outputs, bids, or invoices;</li>
        <li>Any errors or inaccuracies in bids, invoices, or calculations created using the Service;</li>
        <li>Information you submit through AI features, including claims arising from a Third-Party AI Incident (as defined in Section 15);</li>
        <li>Your violation of these Terms.</li>
      </ul>

      <h2>12. Termination</h2>
      <p>We may suspend or terminate your access at any time for breach of these Terms or for any other reason.</p>

      <h2>13. Data Breach and Security Incident Notification</h2>
      <p>We maintain reasonable administrative, technical, and physical safeguards designed to protect your User Data against unauthorized access, disclosure, alteration, or destruction. In the event of a confirmed security breach that affects your User Data, we will notify you without undue delay and, where required, within the timeframe mandated by applicable law. Notification will be provided via the email address associated with your account. You are solely responsible for maintaining accurate contact information in your account settings. We are not liable for any damages arising from a breach caused by your failure to maintain reasonable security practices on your end, including protecting your account credentials.</p>

      <h2>14. Subprocessors and Third-Party AI Providers</h2>
      <p>To deliver the Service, we may engage third-party vendors and subprocessors, including artificial intelligence and machine learning providers, cloud infrastructure services, and payment processors. These subprocessors may process your User Data solely as necessary to provide the Service. By using the Service, you consent to this processing. We require our subprocessors to maintain data protection standards consistent with our obligations under these Terms. A current list of our key subprocessors is available upon request at hello@getonsiteai.com. We will make reasonable efforts to notify you of any material changes to our subprocessor relationships that may affect the processing of your User Data. Section 15 describes how AI Inputs are handled by AI Providers and the limits of our responsibility for them.</p>

      <h2>15. Third-Party AI Providers and Model Routing</h2>
      <p>The Service's AI features are powered by large language models and related services operated by independent third parties. We access these models through OpenRouter, Inc., a model-routing service, and through other external AI model providers (together, "AI Providers"). When you use AI features, the content you submit, including prompts, project details, files, pricing, and Customer PII ("AI Inputs"), is transmitted to OpenRouter and to the AI Provider that processes the request.</p>
      <p><b>(a) Independent providers.</b> AI Providers are independent companies that the Company does not own, operate, or control. Their receipt, processing, storage, retention, and security of AI Inputs and AI-generated outputs are governed by their own terms and privacy policies.</p>
      <p><b>(b) No responsibility for AI Provider incidents.</b> To the maximum extent permitted by applicable law, the Company is not responsible for, and shall have no liability arising out of or relating to, any unauthorized access, data breach, security incident, data leak, retention, disclosure, or misuse of AI Inputs or outputs that occurs on systems operated by OpenRouter or any other AI Provider, including any incident caused by a compromise of an AI Provider's systems (a "Third-Party AI Incident"). The Company shall not be liable for any damages arising from a Third-Party AI Incident, whether direct, indirect, incidental, special, consequential, or punitive, including loss of confidential or proprietary information, trade secrets, customer relationships, business opportunities, or profits.</p>
      <p><b>(c) Confidential and sensitive information.</b> You are solely responsible for deciding what you submit as AI Inputs. You acknowledge that information passed through AI features leaves the Company's systems. You should not submit trade secrets, confidential bids or pricing strategies, account credentials, financial account numbers, or other information whose disclosure could harm you or your customers. If you choose to submit such information, you do so at your own risk. The restrictions on sensitive personal data in Section 19 apply to all AI Inputs.</p>
      <p><b>(d) Claims and cooperation.</b> Any claim arising from a Third-Party AI Incident must be pursued against the responsible AI Provider. Where we learn of a Third-Party AI Incident that affects your User Data, we will make reasonable efforts to inform you and, where known to us, identify the AI Provider involved. Your obligations under Section 11 (Indemnification) apply to any claim by your customers or other third parties arising from AI Inputs you submitted, including claims arising from a Third-Party AI Incident.</p>
      <p><b>(e) Relationship to other sections.</b> This Section 15 applies notwithstanding Section 13 (Data Breach and Security Incident Notification) and Section 14 (Subprocessors and Third-Party AI Providers), and is in addition to Section 9 (No Warranties; Disclaimer) and Section 10 (Limitation of Liability).</p>

      <h2>16. Service Availability</h2>
      <p>We will use commercially reasonable efforts to keep the Service available and operational. However, we do not guarantee uninterrupted or error-free access. The Service may be temporarily unavailable due to scheduled maintenance, unplanned outages, third-party service failures, or events beyond our reasonable control. We will make reasonable efforts to provide advance notice of scheduled maintenance via your registered email or in-app notification. Downtime or service interruptions do not entitle you to a refund or credit unless otherwise specified in a separate written agreement with the Company.</p>

      <h2>17. Software Errors, Outages, and Business Interruption</h2>
      <p>The Service is software that depends on our own systems and on third parties, including hosting and cloud infrastructure providers, database providers, AI Providers, payment processors, email delivery services, and internet and telecommunications networks. You acknowledge that the Service may contain bugs, glitches, errors, or defects, and may be unavailable, slow, or interrupted, with or without notice.</p>
      <p><b>(a) No liability for software errors and outages.</b> To the maximum extent permitted by applicable law, the Company is not responsible for, and shall have no liability for any loss or damage arising out of or relating to: (i) bugs, glitches, errors, or defects in the Service; (ii) outages, downtime, latency, or degraded performance, whether planned or unplanned and whether caused by the Company or a third party; (iii) the loss, corruption, delay, or failed delivery of data, bids, invoices, change orders, notifications, emails, or customer communications; (iv) incorrect or failed calculations, syncing, scheduling, or payment statuses caused by a software error; or (v) the failure of any third-party service the Service depends on.</p>
      <p><b>(b) Business interruption.</b> To the maximum extent permitted by applicable law, the Company is not liable for any interruption to your business or its consequences, including lost revenue, profits, jobs, bids, contracts, or customers; missed deadlines, appointments, or payment dates; delays in getting paid; crew idle time; penalties, fees, or charges owed to your customers, suppliers, or others; and the cost of substitute tools or manual work, even if the Company has been advised of the possibility of such damages.</p>
      <p><b>(c) Your safeguards.</b> You are responsible for keeping your own copies of business-critical information, including bids, invoices, customer contact details, and job schedules, and for having a way to keep working if the Service is unavailable. Before relying on any bid, invoice, schedule, or status shown in the Service, confirm that it is accurate and complete.</p>
      <p><b>(d) No credits or refunds.</b> Software errors, outages, and interruptions do not entitle you to any refund, credit, or other compensation unless the Company agrees otherwise in a separate written agreement.</p>
      <p><b>(e) Relationship to other sections.</b> This Section 17 applies in addition to Section 9 (No Warranties; Disclaimer), Section 10 (Limitation of Liability), Section 16 (Service Availability), and Section 22 (Force Majeure).</p>

      <h2>18. Beta Features</h2>
      <p>From time to time, we may offer access to features, tools, or functionality that are designated as "beta," "preview," "early access," or similar ("Beta Features"). Beta Features are provided as-is, without warranty of any kind, and may contain errors, produce inaccurate outputs, or be discontinued at any time without notice. Your use of Beta Features is entirely at your own risk. The Company shall have no liability arising from your reliance on any output, recommendation, calculation, or action taken in connection with a Beta Feature. Feedback you provide regarding Beta Features may be used by us to improve the Service without any obligation to you.</p>

      <h2>19. Sensitive Customer Data and PII Obligations</h2>
      <p>In the course of using the Service, you may input, store, or transmit personally identifiable information ("PII") belonging to your customers, including names, addresses, phone numbers, and email addresses ("Customer PII"). You represent and warrant that you have obtained all necessary consents and have the legal right to upload and process such Customer PII through the Service.</p>
      <p>You are solely responsible for complying with all applicable privacy laws governing the collection, storage, use, and disclosure of Customer PII in your jurisdiction, including but not limited to the California Consumer Privacy Act (CCPA) and any applicable state or local equivalents.</p>
      <p>You agree not to input into the Service any sensitive personal data including Social Security numbers, financial account numbers, government-issued ID numbers, or health-related information unless expressly authorized in writing by the Company.</p>
      <p>You agree to indemnify us against any claims arising from your failure to obtain proper consents or your unauthorized upload of sensitive personal data.</p>

      <h2>20. Data Export and Deletion Upon Cancellation</h2>
      <p>Upon cancellation or termination of your account, you may request an export of your User Data within thirty (30) days of the termination date by contacting us at hello@getonsiteai.com. We will provide your data in a commonly used, machine-readable format.</p>
      <p>After the thirty (30) day window has elapsed, we reserve the right to delete your User Data from our systems in accordance with our data retention policies, except where we are required to retain it by law. We are not responsible for any loss of data that occurs after the thirty (30) day export window.</p>
      <p>Certain anonymized or aggregated data derived from your use of the Service may be retained indefinitely for product improvement and analytics purposes.</p>

      <h2>21. COPPA — Children's Privacy</h2>
      <p>The Service is intended solely for use by adults operating legitimate business entities. The Service is not directed at, and is not intended for use by, individuals under the age of 13. We do not knowingly collect, solicit, or process personally identifiable information from children under the age of 13. If you believe that a child under 13 has provided personal information to us through the Service, please contact us immediately at hello@getonsiteai.com so that we may take steps to delete such information.</p>
      <p>As a business user of the Service, you represent and warrant that you will not input, upload, or otherwise submit any personally identifiable information belonging to individuals under the age of 13 into the Service. You are solely responsible for ensuring that your use of the Service, including any customer data you manage through the platform, complies with COPPA and all other applicable laws protecting the privacy of minors.</p>

      <h2>22. Force Majeure</h2>
      <p>We will not be liable for any failure or delay in performance due to events beyond our reasonable control, including but not limited to acts of God, war, terrorism, strikes, internet or utility failures, pandemics, government orders, or third-party service disruptions.</p>

      <h2>23. Feedback</h2>
      <p>You may submit feedback, suggestions, or ideas about the Service ("Feedback"). By submitting Feedback, you grant us a perpetual, irrevocable, royalty-free, worldwide license to use, modify, and incorporate it into the Service without any compensation or obligation to you. We are under no obligation to implement or respond to any Feedback.</p>

      <h2>24. Governing Law and Dispute Resolution</h2>
      <p>These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict of laws principles. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in Wilmington, Delaware, and the parties hereby irrevocably consent to the personal jurisdiction and venue therein.</p>

      <h2>25. Changes to Terms</h2>
      <p>We may update these Terms with notice. Your continued use after changes constitutes acceptance.</p>

      <h2>26. Miscellaneous</h2>
      <p>These Terms constitute the entire agreement between you and the Company and supersede all prior agreements. If any provision of these Terms is held invalid or unenforceable, the remaining provisions will remain in full force. Our failure to enforce any right or provision will not constitute a waiver. You may not assign these Terms without our prior written consent. We may assign these Terms freely. No agency, partnership, or joint venture is created by these Terms. Headings are for convenience only.</p>

      <h2>Contact Us</h2>
      <p className="contact">Email: <a href="mailto:hello@getonsiteai.com">hello@getonsiteai.com</a></p>
    </LegalPage>
  )
}
