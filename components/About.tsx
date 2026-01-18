import React, { useEffect, useRef, useState } from 'react';
import { Award, Briefcase, Heart, Linkedin } from 'lucide-react';

const credentials = [
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: '20+ Years',
    description: 'Manufacturing Operations Leadership',
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'Certified',
    description: 'Metabolic Health Specialist',
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: 'AI Generalist',
    description: 'Practical AI Implementation',
  },
];

export const About: React.FC = () => {
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
      id="about"
      className="section-lg relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent 
        pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left - Content */}
          <div>
            <span 
              className={`
                inline-block text-sm font-medium text-primary tracking-wide uppercase mb-4
                transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              About Me
            </span>
            
            <h2 
              id="about-heading"
              className={`
                text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6
                transition-all duration-700 delay-100
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
            >
              I've Lived What I Now Solve
            </h2>

            <div 
              className={`
                space-y-4 text-text-secondary leading-relaxed mb-8
                transition-all duration-700 delay-200
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
            >
              <p>
                After two decades scaling manufacturing operations across industries, 
                I discovered something that changed everything:{' '}
                <strong className="text-white">
                  the same biological systems I was optimizing in factories were breaking down in leaders.
                </strong>
              </p>
              
              <p>
                I watched brilliant executives—including myself—burn out while 
                driving operational excellence. Lean initiatives would launch strong, 
                then fade. AI tools would get implemented, then ignored.
              </p>
              
              <p>
                The problem wasn't the strategy. It was treating operations, 
                human performance, and technology as separate disciplines.
              </p>
              
              <p className="text-white font-medium">
                Now I help manufacturing leaders achieve transformations that actually 
                stick—by integrating what most consultants keep apart.
              </p>
            </div>

            {/* Credentials */}
            <div 
              className={`
                grid sm:grid-cols-3 gap-4 mb-8
                transition-all duration-700 delay-300
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
            >
              {credentials.map((cred, index) => (
                <div 
                  key={cred.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] 
                    border border-white/5 hover:border-white/10 transition-colors"
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    {cred.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{cred.title}</div>
                    <div className="text-xs text-text-tertiary">{cred.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* LinkedIn CTA */}
            <a
              href="https://www.linkedin.com/in/sachinchiplunkar/"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center gap-2 text-sm font-medium text-primary
                hover:text-accent transition-colors
                ${isVisible ? 'opacity-100' : 'opacity-0'}
              `}
              style={{ transitionDelay: '500ms' }}
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </div>

          {/* Right - Visual */}
          <div 
            className={`
              relative
              transition-all duration-1000 delay-300
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
            `}
          >
            {/* Quote Card */}
            <div className="glass-panel p-8 sm:p-10 rounded-2xl relative">
              {/* Quote mark */}
              <div className="absolute -top-4 -left-2 text-6xl text-primary/20 font-serif">
                "
              </div>
              
              <blockquote className="text-xl sm:text-2xl font-display text-white leading-relaxed mb-6">
                Your operations aren't failing because your processes are wrong. 
                They're failing because your leaders are too burned out to sustain them.
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10">
                  <img
                    src="/assets/sachin.png"
                    alt="Sachin Chiplunkar"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white">Sachin Chiplunkar</div>
                  <div className="text-sm text-text-tertiary">
                    Bio-Operational Transformation Expert
                  </div>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 
                bg-gradient-to-br from-primary/10 to-accent/10 
                rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
