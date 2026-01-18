import React, { useEffect, useRef, useState } from 'react';
import { Settings, Brain, Cpu, Zap, ArrowRight } from 'lucide-react';

interface PillarProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  color: 'primary' | 'accent' | 'alert';
  delay: number;
  isVisible: boolean;
}

const colorClasses = {
  primary: {
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    text: 'text-primary',
    glow: 'group-hover:shadow-primary/20',
  },
  accent: {
    bg: 'bg-accent/10',
    border: 'border-accent/20',
    text: 'text-accent',
    glow: 'group-hover:shadow-accent/20',
  },
  alert: {
    bg: 'bg-alert/10',
    border: 'border-alert/20',
    text: 'text-alert',
    glow: 'group-hover:shadow-alert/20',
  },
};

const Pillar: React.FC<PillarProps> = ({
  icon,
  number,
  title,
  subtitle,
  description,
  outcomes,
  color,
  delay,
  isVisible,
}) => {
  const classes = colorClasses[color];
  
  return (
    <div
      className={`
        group relative p-6 sm:p-8 rounded-2xl
        bg-gradient-to-b from-white/[0.03] to-transparent
        border border-white/5 hover:border-white/10
        transition-all duration-700 ease-out
        hover:shadow-2xl ${classes.glow}
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
        }
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Number badge */}
      <div className={`
        absolute -top-3 -left-3 w-8 h-8 rounded-lg
        ${classes.bg} ${classes.border} border
        flex items-center justify-center
        text-sm font-bold ${classes.text}
      `}>
        {number}
      </div>

      {/* Icon */}
      <div className={`
        w-14 h-14 rounded-xl ${classes.bg} ${classes.text}
        flex items-center justify-center mb-6
        transition-transform duration-300 group-hover:scale-110
      `}>
        {icon}
      </div>

      {/* Content */}
      <div className="mb-6">
        <div className={`text-xs font-medium ${classes.text} tracking-wider uppercase mb-2`}>
          {subtitle}
        </div>
        <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>

      {/* Outcomes */}
      <div className="space-y-2">
        {outcomes.map((outcome) => (
          <div 
            key={outcome}
            className="flex items-start gap-2 text-sm text-text-secondary"
          >
            <ArrowRight className={`w-4 h-4 ${classes.text} shrink-0 mt-0.5`} />
            <span>{outcome}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const pillars = [
  {
    icon: <Settings className="w-7 h-7" />,
    number: '01',
    title: 'Operational Excellence',
    subtitle: 'Pillar One',
    description: 'Lean manufacturing principles enhanced with systems thinking. We identify bottlenecks, streamline workflows, and build sustainable processes.',
    outcomes: [
      '2-10× efficiency gains',
      'Waste elimination protocols',
      'Scalable process frameworks',
    ],
    color: 'primary' as const,
  },
  {
    icon: <Brain className="w-7 h-7" />,
    number: '02',
    title: 'Human Optimization',
    subtitle: 'Pillar Two',
    description: 'Metabolic health and cognitive performance protocols for leadership. Because burned-out leaders can\'t sustain operational improvements.',
    outcomes: [
      'Leadership energy restoration',
      'Stress resilience training',
      'Sustainable performance habits',
    ],
    color: 'accent' as const,
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    number: '03',
    title: 'AI Integration',
    subtitle: 'Pillar Three',
    description: 'Practical AI implementation that works with your operations, not against them. No hype—just tools that deliver measurable ROI.',
    outcomes: [
      'Data-driven decision making',
      'Process automation that sticks',
      'AI adoption without resistance',
    ],
    color: 'alert' as const,
  },
];

export const Method: React.FC = () => {
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
      id="method"
      className="section-lg relative overflow-hidden"
      aria-labelledby="method-heading"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[800px] h-[800px] rounded-full
        bg-gradient-to-r from-primary/5 via-transparent to-accent/5
        blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`
              inline-block text-sm font-medium text-primary tracking-wide uppercase mb-4
              transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            The Method
          </span>
          
          <h2 
            id="method-heading"
            className={`
              text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6
              transition-all duration-700 delay-100
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            Bio-Operational Transformation
          </h2>
          
          <p 
            className={`
              text-lg text-text-secondary leading-relaxed
              transition-all duration-700 delay-200
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            Three pillars. One integrated system. Most consultants address these separately—
            that's why their results don't last.{' '}
            <span className="text-white font-medium">
              Integration is the multiplier.
            </span>
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <Pillar
              key={pillar.title}
              {...pillar}
              delay={index * 150}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Integration Callout */}
        <div 
          className={`
            relative p-8 rounded-2xl overflow-hidden
            transition-all duration-700 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-alert/10" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-xl font-display font-bold text-white">
                  Integration = 10× Results
                </div>
                <div className="text-text-secondary">
                  When all three pillars work together, transformations stick.
                </div>
              </div>
            </div>
            
            <a
              href="#process"
              className="btn-primary shrink-0 text-background"
            >
              See the Process
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
