import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

const benefits = [
  'Identify your specific transformation bottleneck',
  'Get a personalized assessment of all three pillars',
  'Receive actionable insights—even if we don\'t work together',
  'No hard sell—just an honest conversation about your challenges',
];

export const Assessment: React.FC = () => {
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

  // Cal.com booking URL
  const calComUrl = 'https://cal.com/sachin-chiplunkar-stuf7r/exploration';

  return (
    <section
      ref={sectionRef}
      id="assessment"
      className="section-lg relative overflow-hidden"
      aria-labelledby="assessment-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]
          bg-gradient-to-t from-primary/10 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div 
            className={`
              relative p-8 sm:p-12 rounded-3xl overflow-hidden
              transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            {/* Card background */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/80 to-secondary" />
            <div className="absolute inset-0 border border-white/5 rounded-3xl" />
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 
              bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 
              bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl" />

            <div className="relative">
              {/* Header */}
              <div className="text-center mb-10">
                <div 
                  className={`
                    inline-flex items-center gap-2 px-4 py-2 rounded-full
                    bg-primary/10 border border-primary/20 text-primary
                    text-sm font-medium mb-6
                    transition-all duration-700 delay-100
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                  `}
                >
                  <Calendar className="w-4 h-4" />
                  Free Discovery Assessment
                </div>

                <h2 
                  id="assessment-heading"
                  className={`
                    text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4
                    transition-all duration-700 delay-200
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                  `}
                >
                  Ready to Break the Cycle?
                </h2>

                <p 
                  className={`
                    text-lg text-text-secondary max-w-2xl mx-auto
                    transition-all duration-700 delay-300
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                  `}
                >
                  Book a 45-minute discovery call to identify exactly where your 
                  transformation is breaking down—and what it would take to fix it.
                </p>
              </div>

              {/* Two columns */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left - Benefits */}
                <div 
                  className={`
                    space-y-4
                    transition-all duration-700 delay-400
                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
                  `}
                >
                  <h3 className="text-lg font-semibold text-white mb-4">
                    What you'll get from this call:
                  </h3>
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{benefit}</span>
                    </div>
                  ))}

                  <div className="flex items-center gap-2 text-sm text-text-tertiary pt-4">
                    <Clock className="w-4 h-4" />
                    <span>45 minutes • No obligation • Virtual meeting</span>
                  </div>
                </div>

                {/* Right - CTA */}
                <div 
                  className={`
                    flex flex-col items-center text-center
                    transition-all duration-700 delay-500
                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                  `}
                >

                  {/* Primary CTA Button */}
                  <a
                    href={calComUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full sm:w-auto px-10 py-5 bg-white text-background 
                      text-lg font-semibold rounded-2xl
                      hover:bg-white/90 transition-all duration-300
                      hover:shadow-xl hover:shadow-white/10 hover:-translate-y-1
                      flex items-center justify-center gap-3"
                  >
                    Book Your Discovery Call
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>

                  <p className="mt-4 text-sm text-text-tertiary">
                    Select a time that works for you
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust reinforcement */}
          <p 
            className={`
              text-center text-sm text-text-tertiary mt-8
              transition-all duration-700 delay-600
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            "The discovery call alone gave me more clarity about our operational 
            challenges than months of internal analysis."
            <span className="block mt-2 text-text-secondary">
              — Manufacturing VP, $120M Revenue Company
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Assessment;
