import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
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
            Privacy Policy
          </h1>
          <p className="text-text-secondary mb-12">
            Last updated: January 18, 2026
          </p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Introduction
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Sachin Chiplunkar ("we," "our," or "us") respects your privacy and is committed to
                protecting your personal data. This privacy policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website
                sachinchiplunkar.com (the "Site") or engage with our consulting services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When you book a discovery call or contact us, we may collect:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Name and job title</li>
                <li>Email address</li>
                <li>Company name and size</li>
                <li>Phone number (if provided)</li>
                <li>Information about your business challenges shared during consultations</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When you visit our Site, we may automatically collect:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent</li>
                <li>Referral source</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                How We Use Your Information
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Provide and deliver our consulting services</li>
                <li>Schedule and conduct discovery calls</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send relevant communications about our services</li>
                <li>Improve our website and services</li>
                <li>Analyze website usage and trends</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Information Sharing
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li><strong className="text-white">Service Providers:</strong> Third-party services that help us operate our business (e.g., Cal.com for scheduling, analytics providers)</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong className="text-white">Business Transfers:</strong> In connection with any merger or acquisition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our Site.
                These help us understand how you use our Site and improve our services. You can control
                cookies through your browser settings. We use privacy-focused analytics that respect
                user privacy and do not track individual users across websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Data Security
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. However,
                no method of transmission over the Internet is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Data Retention
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes
                outlined in this privacy policy, unless a longer retention period is required or
                permitted by law. Client engagement data is typically retained for 7 years for
                business and legal purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Your Rights
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                To exercise any of these rights, please contact us at hello@sachinchiplunkar.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                International Transfers
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Your information may be transferred to and processed in countries other than your
                country of residence, including the United States and India. We ensure appropriate
                safeguards are in place for such transfers in compliance with applicable data
                protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Third-Party Links
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Our Site may contain links to third-party websites (e.g., LinkedIn, Cal.com).
                We are not responsible for the privacy practices of these external sites.
                We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Children's Privacy
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Our services are not directed to individuals under 18 years of age. We do not
                knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Changes to This Policy
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any
                changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-text-secondary leading-relaxed">
                If you have questions about this privacy policy or our data practices, please contact us at:
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

export default PrivacyPolicy;
