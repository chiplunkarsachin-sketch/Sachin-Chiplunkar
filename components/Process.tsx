import React, { useEffect, useRef, useState } from 'react';
import { Search, Wrench, TrendingUp, Shield, ArrowRight } from 'lucide-react';

interface PhaseProps {
  icon: React.ReactNode;
  phase: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  isLast?: boolean;
  delay: number;
  isVisible: boolean;
}

const Phase: React.FC<PhaseProps> = ({
  icon,
  phase,
  title,
  duration,
  description,
  deliverables,
  isLast,
  delay,
  isVisible,
}) => {
  return (
    <div 
      className={`
        relative flex gap-6 lg:gap-8
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20
          flex items-center justify-center text-primary">
          {icon}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent my-4" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-12 ${isLast ? '' : ''}`}>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="text-xs font-bold text-primary tracking-wider uppercase">
            {phase}
          </span>
          <span className="text-xs text-text-tertiary bg-white/5 px-2 py-1 rounded-full">
            {duration}
          </span>
        </div>
        
        <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
          {title}
        </h3>
        
        <p className="text-text-secondary leading-relaxed mb-4 max-w-lg">
          {description}
        </p>

        <div className="space-y-2">
          {deliverables.map((item) => (
            <div 
              key={item}
              className="flex items-center gap-2 text-sm text-text-secondary"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const phases = [
  {
    icon: <Search className="w-5 h-5" />,
    phase: 'Phase 1',
    title: 'Discovery & Assessment',
    duration: 'Days 1-30',
    description: 'Deep-dive into your operations, leadership health, and AI readiness. We identify exactly where your transformation is breaking down.',
    deliverables: [
      'Comprehensive operational audit',
      'Leadership health assessment',
      'AI readiness evaluation',
      'Custom transformation roadmap',
    ],
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    phase: 'Phase 2',
    title: 'Implementation',
    duration: 'Days 31-75',
    description: 'Simultaneous deployment across all three pillars. Operations, health protocols, and AI tools—integrated from day one.',
    deliverables: [
      'Process optimization rollout',
      'Leadership performance protocols',
      'AI tool integration',
      'Team training and adoption',
    ],
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    phase: 'Phase 3',
    title: 'Optimization',
    duration: 'Days 76-90',
    description: 'Fine-tune, measure, and lock in results. Build the systems that ensure your transformation sustains long after our engagement ends.',
    deliverables: [
      'Performance measurement',
      'Process refinement',
      'Sustainability protocols',
      'Knowledge transfer',
    ],
  },
  {
    icon: <Shield className="w-5 h-5" />,
    phase: 'Post-Program',
    title: 'Monitoring & Support',
    duration: '90 Days',
    description: 'Continued support to ensure results stick. Regular check-ins, adjustments, and access to ongoing resources.',
    deliverables: [
      'Monthly performance reviews',
      'On-demand support access',
      'Adjustment protocols',
      'Long-term sustainability guidance',
    ],
  },
];

export const Process: React.FC = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="section-lg relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent
        pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Header (sticky on desktop) */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span 
              className={`
                inline-block text-sm font-medium text-primary tracking-wide uppercase mb-4
                transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              The Process
            </span>
            
            <h2 
              id="process-heading"
              className={`
                text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6
                transition-all duration-700 delay-100
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
            >
              90-Day Bio-Operational Transformation
            </h2>
            
            <p 
              className={`
                text-lg text-text-secondary leading-relaxed mb-8
                transition-all duration-700 delay-200
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
            >
              A structured, proven process that delivers measurable results. 
              Not a cookie-cutter framework—a personalized transformation 
              built around your specific challenges and goals.
            </p>

            {/* Key metrics */}
            <div 
              className={`
                grid grid-cols-2 gap-4
                transition-all duration-700 delay-300
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
            >
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl font-display font-bold text-gradient mb-1">
                  90-180
                </div>
                <div className="text-sm text-text-tertiary">Days to transformation</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl font-display font-bold text-gradient mb-1">
                  3-10×
                </div>
                <div className="text-sm text-text-tertiary">Typical performance gain</div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#assessment"
              className={`
                inline-flex items-center gap-2 mt-8 text-primary font-medium
                hover:text-accent transition-colors
                ${isVisible ? 'opacity-100' : 'opacity-0'}
              `}
              style={{ transitionDelay: '400ms' }}
            >
              Start your transformation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Timeline */}
          <div>
            {phases.map((phase, index) => (
              <Phase
                key={phase.phase}
                {...phase}
                isLast={index === phases.length - 1}
                delay={index * 150}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
