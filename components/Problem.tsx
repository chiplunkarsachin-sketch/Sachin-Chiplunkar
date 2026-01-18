import React, { useEffect, useRef, useState } from 'react';
import { TrendingDown, Brain, Cpu, AlertTriangle } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  stat: string;
  label: string;
  citation: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, stat, label, citation, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`
        glass-panel p-6 sm:p-8 rounded-2xl
        transition-all duration-700 ease-out
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
        }
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-alert/10 text-alert shrink-0">
          {icon}
        </div>
        <div>
          <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">
            {stat}
          </div>
          <div className="text-text-secondary mb-2">{label}</div>
          <div className="text-xs text-text-tertiary">{citation}</div>
        </div>
      </div>
    </div>
  );
};

const stats = [
  {
    icon: <Cpu className="w-6 h-6" />,
    stat: '80-95%',
    label: 'of AI initiatives fail to deliver ROI',
    citation: 'MIT Sloan Management Review, 2024',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    stat: '70%',
    label: 'of leaders report unprecedented burnout',
    citation: 'Deloitte Executive Survey, 2024',
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    stat: '60%',
    label: 'of lean initiatives fail to sustain results',
    citation: 'McKinsey Operations Report, 2023',
  },
];

export const Problem: React.FC = () => {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeadingVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="problem" 
      className="section-lg relative overflow-hidden"
      aria-labelledby="problem-heading"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full 
        bg-gradient-to-l from-alert/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div 
          ref={headingRef}
          className={`
            max-w-3xl mb-16
            transition-all duration-700
            ${isHeadingVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
            }
          `}
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-alert" />
            <span className="text-sm font-medium text-alert tracking-wide uppercase">
              The Real Problem
            </span>
          </div>
          
          <h2 id="problem-heading" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Your Transformations Keep Failing.{' '}
            <span className="text-text-secondary">Here's Why.</span>
          </h2>
          
          <p className="text-lg text-text-secondary leading-relaxed">
            It's not because of bad strategy. It's because you're treating{' '}
            <strong className="text-white">three connected problems</strong> as separate issues. 
            Operations, human performance, and technology are one integrated system—
            fix them together or watch your initiatives stall again.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              stat={stat.stat}
              label={stat.label}
              citation={stat.citation}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Bottom callout */}
        <div 
          className={`
            mt-12 p-6 rounded-2xl border border-white/5
            bg-gradient-to-r from-background to-secondary/50
            transition-all duration-700 delay-500
            ${isHeadingVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
            }
          `}
        >
          <p className="text-center text-text-secondary">
            <span className="text-white font-medium">The pattern is clear:</span>{' '}
            Consultants address operations OR health OR AI. 
            None address all three simultaneously.{' '}
            <span className="text-primary">That's exactly why transformations don't stick.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
