import React from 'react';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Method', href: '#method' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sachinchiplunkar/',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    label: 'Email',
    href: 'mailto:hello@sachinchiplunkar.com',
    icon: <Mail className="w-5 h-5" />,
  },
];

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer 
      className="relative border-t border-white/5"
      role="contentinfo"
    >
      {/* Main footer content */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex flex-col gap-1 mb-4 group">
              <span className="font-display text-2xl font-bold text-white
                group-hover:text-gradient transition-all duration-300">
                Sachin Chiplunkar
              </span>
              <span className="text-[10px] font-medium text-text-tertiary tracking-[0.15em] uppercase
                group-hover:text-text-secondary transition-colors">
                Operations × Biology × AI
              </span>
            </a>
            <p className="text-text-secondary mb-6 max-w-md">
              Bio-Operational Transformation Expert. Helping manufacturing executives 
              achieve 10× performance by integrating operations, human health, and AI.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/5
                    flex items-center justify-center text-text-secondary
                    hover:bg-white/10 hover:text-white hover:border-white/10
                    transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-text-secondary hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get Started</h4>
            <p className="text-text-secondary text-sm mb-4">
              Ready to transform your operations?
            </p>
            <a
              href="#assessment"
              onClick={(e) => handleNavClick(e, '#assessment')}
              className="inline-flex items-center gap-2 text-primary hover:text-accent 
                font-medium transition-colors"
            >
              Book Discovery Call
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-tertiary">
              © {currentYear} Sachin Chiplunkar. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <a 
                href="/privacy" 
                className="text-sm text-text-tertiary hover:text-text-secondary transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-sm text-text-tertiary hover:text-text-secondary transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px
        bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  );
};

export default Footer;
