import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Method', href: '#method' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-out
          ${isScrolled 
            ? 'bg-background/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10' 
            : 'bg-transparent'
          }
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="#" 
              className="flex flex-col gap-0.5 group"
              onClick={(e) => handleNavClick(e, '#hero')}
            >
              <span className="font-display text-xl font-bold text-white tracking-tight
                group-hover:text-gradient transition-all duration-300">
                Sachin Chiplunkar
              </span>
              <span className="text-[10px] font-medium text-text-tertiary tracking-[0.15em] uppercase
                group-hover:text-text-secondary transition-colors">
                Operations × Biology × AI
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="relative text-[15px] font-medium text-text-secondary 
                        hover:text-white transition-colors duration-300
                        after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px]
                        after:bg-gradient-to-r after:from-primary after:to-accent
                        after:transition-all after:duration-300
                        hover:after:w-full"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#assessment"
                onClick={(e) => handleNavClick(e, '#assessment')}
                className="px-6 py-3 bg-white text-background text-sm font-semibold
                  rounded-xl hover:bg-white/90 transition-all duration-300
                  hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5
                  active:translate-y-0"
              >
                Book Discovery Call
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center
                text-white hover:text-primary transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden
          transition-all duration-500
          ${isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
          }
        `}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className={`
          relative flex flex-col items-center justify-center h-full
          transition-transform duration-500
          ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-8'}
        `}>
          <ul className="flex flex-col items-center gap-6 mb-10">
            {navItems.map((item, index) => (
              <li 
                key={item.href}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' 
                }}
                className={`
                  transition-all duration-300
                  ${isMobileMenuOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                  }
                `}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-2xl font-display font-semibold text-white 
                    hover:text-gradient transition-all duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#assessment"
            onClick={(e) => handleNavClick(e, '#assessment')}
            className={`
              px-8 py-4 bg-white text-background font-semibold text-lg
              rounded-xl transition-all duration-500
              ${isMobileMenuOpen 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
              }
            `}
            style={{ transitionDelay: isMobileMenuOpen ? '200ms' : '0ms' }}
          >
            Book Discovery Call
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
