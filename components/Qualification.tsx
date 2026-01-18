import React, { useEffect, useRef, useState } from 'react';
import { Check, X, Building2, Users, Target, DollarSign } from 'lucide-react';

const idealFor = [
  {
    icon: <Building2 className="w-5 h-5" />,
    text: 'Manufacturing executives at $50-250M revenue companies',
  },
  {
    icon: <Users className="w-5 h-5" />,
    text: 'VP/Director of Operations, COOs, and CEOs',
  },
  {
    icon: <Target className="w-5 h-5" />,
    text: 'Leaders who\'ve tried lean consultants but results didn\'t stick',
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    text: 'Organizations ready to invest $75K-125K in transformation',
  },
];

const notFor = [
  'Companies looking for quick fixes or band-aid solutions',
  'Leaders not willing to address health alongside operations',
  'Organizations expecting AI to solve everything on its own',
  'Those seeking the cheapest option, not the most effective',
];

export const Qualification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="qualification"
      className="section-lg relative overflow-hidden"
      aria-labelledby="qualification-heading"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`
              inline-block text-sm font-medium text-primary tracking-wide uppercase mb-4
              transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            Is This For You?
          </span>
          
          <h2 
            id="qualification-heading"
            className={`
              text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6
              transition-all duration-700 delay-100
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            This Isn't For Everyone
          </h2>
          
          <p 
            className={`
              text-lg text-text-secondary leading-relaxed
              transition-all duration-700 delay-200
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            I prioritize quality partnerships to deliver 
            deep engagement and real results. Here's how to know if we're a fit.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* This Is For You */}
          <div 
            className={`
              p-8 rounded-2xl
              bg-gradient-to-b from-accent/5 to-transparent
              border border-accent/10
              transition-all duration-700 delay-300
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <Check className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                This Is For You If...
              </h3>
            </div>

            <div className="space-y-4">
              {idealFor.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="p-1.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <span className="text-text-secondary">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* This Is NOT For You */}
          <div 
            className={`
              p-8 rounded-2xl
              bg-gradient-to-b from-alert/5 to-transparent
              border border-alert/10
              transition-all duration-700 delay-400
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-alert/10">
                <X className="w-5 h-5 text-alert" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                This Is NOT For You If...
              </h3>
            </div>

            <div className="space-y-4">
              {notFor.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3"
                >
                  <X className="w-4 h-4 text-alert shrink-0 mt-1" />
                  <span className="text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <p 
          className={`
            text-center text-sm text-text-tertiary max-w-2xl mx-auto mt-12
            transition-all duration-700 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          Still unsure? The discovery call is designed to help us both determine 
          if there's a fit. No pressure, no hard sell—just an honest conversation 
          about your challenges and whether this approach makes sense for you.
        </p>
      </div>
    </section>
  );
};

export default Qualification;
