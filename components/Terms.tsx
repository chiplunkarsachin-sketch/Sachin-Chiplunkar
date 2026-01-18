import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-12 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-text-secondary mb-12">
            Last updated: January 18, 2026
          </p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Agreement to Terms
              </h2>
              <p className="text-text-secondary leading-relaxed">
                By accessing or using the website sachinchiplunkar.com (the "Site") or engaging
                with consulting services provided by Sachin Chiplunkar ("we," "our," or "us"),
                you agree to be bound by these Terms of Service. If you do not agree to these
                terms, please do not use our Site or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Services Description
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We provide Bio-Operational Transformation consulting services for manufacturing
                executives, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>90-Day Bio-Operational Transformation Programs</li>
                <li>Discovery Assessments</li>
                <li>Discovery Calls and Consultations</li>
                <li>Operational Excellence Advisory</li>
                <li>Leadership Performance Optimization</li>
                <li>AI Implementation Guidance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Engagement Terms
              </h2>
              <h3 className="text-xl font-semibold text-white mb-3">Discovery Calls</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Discovery calls are complimentary 45-minute consultations. By booking a discovery
                call, you agree to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Provide accurate information about yourself and your company</li>
                <li>Attend the scheduled call on time or reschedule with reasonable notice</li>
                <li>Engage in good faith discussion about your business challenges</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Consulting Engagements</h3>
              <p className="text-text-secondary leading-relaxed">
                Formal consulting engagements are governed by separate written agreements that
                specify scope, deliverables, timelines, fees, and other terms. These Terms of
                Service apply in addition to any engagement-specific agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Fees and Payment
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our consulting services are priced as follows (subject to change):
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li><strong className="text-white">Discovery Calls:</strong> Complimentary</li>
                <li><strong className="text-white">Discovery Assessments:</strong> $5,000 - $8,000 USD</li>
                <li><strong className="text-white">90-Day Transformation Program:</strong> $75,000 - $125,000 USD</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                Specific pricing, payment terms, and schedules will be outlined in individual
                engagement agreements. All fees are non-refundable unless otherwise specified
                in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Intellectual Property
              </h2>
              <h3 className="text-xl font-semibold text-white mb-3">Our Content</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                All content on this Site, including text, graphics, logos, methodologies,
                frameworks, and software, is the property of Sachin Chiplunkar and is protected
                by intellectual property laws. You may not reproduce, distribute, or create
                derivative works without our express written permission.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Client Materials</h3>
              <p className="text-text-secondary leading-relaxed">
                Any materials, data, or information you provide to us during an engagement
                remain your property. You grant us a limited license to use such materials
                solely for the purpose of providing our services to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Confidentiality
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We treat all client information as confidential. We will not disclose your
                business information, strategies, or data to third parties without your consent,
                except as required by law. Specific confidentiality terms may be included in
                individual engagement agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Disclaimer of Warranties
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our services are provided on an "as is" and "as available" basis. While we
                strive to deliver exceptional value, we make no warranties or guarantees
                regarding:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Specific business outcomes or results</li>
                <li>Revenue increases or cost savings</li>
                <li>Timelines for achieving results</li>
                <li>Uninterrupted or error-free service</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                Past results and testimonials do not guarantee future performance. Results
                depend on many factors including your organization's commitment, market
                conditions, and implementation quality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Limitation of Liability
              </h2>
              <p className="text-text-secondary leading-relaxed">
                To the maximum extent permitted by law, Sachin Chiplunkar shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages,
                including but not limited to loss of profits, data, or business opportunities,
                arising out of or related to these terms or our services. Our total liability
                shall not exceed the fees paid by you for the specific service giving rise to
                the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Indemnification
              </h2>
              <p className="text-text-secondary leading-relaxed">
                You agree to indemnify and hold harmless Sachin Chiplunkar from any claims,
                damages, losses, or expenses (including reasonable attorney fees) arising from
                your use of our Site or services, your violation of these terms, or your
                violation of any rights of a third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Use of Site
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                When using our Site, you agree not to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Use the Site for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the Site</li>
                <li>Interfere with or disrupt the Site's operation</li>
                <li>Collect user information without consent</li>
                <li>Use automated systems to access the Site without permission</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Third-Party Links
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Our Site may contain links to third-party websites or services. We are not
                responsible for the content, terms, or practices of these external sites.
                Your use of third-party sites is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Termination
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We reserve the right to terminate or suspend your access to our Site or
                services at any time, without notice, for conduct that we believe violates
                these terms or is harmful to us or other users. Termination of consulting
                engagements is governed by the specific engagement agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Governing Law
              </h2>
              <p className="text-text-secondary leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws
                of the United States, without regard to its conflict of law provisions. Any
                disputes arising from these terms shall be resolved through binding arbitration
                or in the courts of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Changes to Terms
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users
                of significant changes by posting a notice on our Site. Your continued use
                of the Site after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Severability
              </h2>
              <p className="text-text-secondary leading-relaxed">
                If any provision of these terms is found to be unenforceable or invalid,
                that provision shall be limited or eliminated to the minimum extent necessary,
                and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-text-secondary leading-relaxed">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-6 rounded-xl bg-secondary border border-white/5">
                <p className="text-white font-semibold">Sachin Chiplunkar</p>
                <p className="text-text-secondary">Email: hello@sachinchiplunkar.com</p>
                <p className="text-text-secondary">Website: sachinchiplunkar.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm text-text-tertiary">
            &copy; {new Date().getFullYear()} Sachin Chiplunkar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
