import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// Trust indicators data
const trustIndicators = [
  '90-Day Transformation',
  'Proven ROI',
  '20+ Years Operations',
];

// Characters used for scramble effect
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

// Generate random scrambled text
const getScrambledText = (text: string): string => {
  return text
    .split('')
    .map((char) => {
      if (char === ' ') return ' ';
      return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
    })
    .join('');
};

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
  onComplete?: () => void;
  start?: boolean;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = '',
  duration = 1500,
  onComplete,
  start = false,
}) => {
  // Start with scrambled text
  const [displayText, setDisplayText] = useState(() => getScrambledText(text));
  const [hasCompleted, setHasCompleted] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    // Keep scrambling while waiting
    if (!start && !hasCompleted) {
      const scrambleInterval = window.setInterval(() => {
        setDisplayText(getScrambledText(text));
      }, 50);
      return () => window.clearInterval(scrambleInterval);
    }
  }, [start, hasCompleted, text]);

  useEffect(() => {
    // Only run reveal animation once when start becomes true
    if (start && !hasStartedRef.current && !hasCompleted) {
      hasStartedRef.current = true;

      const textLength = text.length;
      let iteration = 0;
      const totalIterations = textLength * 3;
      const intervalTime = duration / totalIterations;

      // Clear any existing interval
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }

      intervalRef.current = window.setInterval(() => {
        const newText = text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            // Reveal characters progressively from left to right
            if (index < Math.floor(iteration / 3)) {
              return text[index];
            }
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join('');

        setDisplayText(newText);
        iteration++;

        if (iteration >= totalIterations) {
          if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
          }
          setDisplayText(text);
          setHasCompleted(true);
          if (onComplete) {
            onComplete();
          }
        }
      }, intervalTime);
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [start, hasCompleted, text, duration, onComplete]);

  return <span className={className}>{displayText}</span>;
};

export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [startFirstScramble, setStartFirstScramble] = useState(false);
  const [startSecondScramble, setStartSecondScramble] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger initial load animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Start first scramble after headline fades in
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setStartFirstScramble(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  const handleFirstScrambleComplete = () => {
    setTimeout(() => {
      setStartSecondScramble(true);
    }, 200);
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      aria-label="Hero section"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orb behind photo */}
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px]
            bg-primary/5 rounded-full blur-[120px]
            animate-pulse-slow"
        />
        {/* Secondary accent glow */}
        <div
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px]
            bg-accent/5 rounded-full blur-[100px]
            animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column - Photo */}
          <div
            className={`
              order-2 lg:order-1 flex justify-center lg:justify-start
              transition-all duration-1000 ease-out
              ${isLoaded
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
              }
            `}
          >
            <div className="relative group">
              {/* Photo Container */}
              <div
                className="relative w-[320px] sm:w-[400px] lg:w-[480px]
                  aspect-[3/4] rounded-2xl overflow-hidden
                  shadow-2xl shadow-black/50"
              >
                {/* Gradient overlay for depth */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none
                    bg-gradient-to-t from-background/40 via-transparent to-transparent"
                />

                {/* Cyan tint overlay */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none
                    bg-primary/5 mix-blend-color"
                />

                {/* Image */}
                <img
                  src="/assets/sachin.png"
                  alt="Sachin Chiplunkar - Bio-Operational Transformation Expert"
                  className="w-full h-full object-cover object-top
                    filter grayscale-[30%] contrast-[1.05]
                    transition-transform duration-700 ease-out
                    group-hover:scale-[1.02]"
                  loading="eager"
                />

                {/* Border glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl z-20
                    border border-white/5 group-hover:border-primary/20
                    transition-colors duration-500"
                />
              </div>

              {/* Floating accent elements */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24
                  bg-gradient-to-br from-primary/20 to-accent/20
                  rounded-full blur-xl opacity-60
                  group-hover:opacity-80 transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 flex flex-col">
            {/* Badge */}
            <div
              className={`
                inline-flex self-start mb-6
                transition-all duration-700 delay-200
                ${isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
                }
              `}
            >
              <span className="badge">
                Operations × Biology × AI
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`
                font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
                font-extrabold leading-[1.05] tracking-tight
                mb-6
                transition-all duration-700 delay-300
                ${isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
                }
              `}
            >
              <span className="text-white">Stop </span>
              <ScrambleText
                text="Wasting Money"
                className="text-alert"
                start={startFirstScramble}
                duration={1200}
                onComplete={handleFirstScrambleComplete}
              />
              <span className="text-white"> on Transformations That </span>
              <ScrambleText
                text="Don't Stick"
                className="text-gradient-animated"
                start={startSecondScramble}
                duration={1000}
              />
            </h1>

            {/* Subheadline */}
            <p
              className={`
                text-lg sm:text-xl text-text-secondary leading-relaxed
                max-w-xl mb-8
                transition-all duration-700 delay-400
                ${isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
                }
              `}
            >
              I help manufacturing executives achieve{' '}
              <strong className="text-white font-semibold">10× operational performance</strong>{' '}
              by fixing the three reasons most initiatives fail: broken processes,
              burned-out leaders, and disconnected AI systems.
            </p>

            {/* CTA Container */}
            <div
              className={`
                flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10
                transition-all duration-700 delay-500
                ${isLoaded
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-6 scale-95'
                }
              `}
            >
              {/* Primary CTA */}
              <div className="relative group">

                <a
                  href="#assessment"
                  className="btn-primary text-lg px-8 py-4 text-background
                    group-hover:shadow-xl group-hover:shadow-white/10"
                >
                  See Why Transformations Fail
                  <ArrowRight className="w-5 h-5 transition-transform duration-300
                    group-hover:translate-x-1" />
                </a>
              </div>

              {/* Secondary CTA */}
              <a
                href="#method"
                className="btn-secondary px-6 py-3 text-sm"
              >
                Learn the Method
              </a>
            </div>

            {/* Trust Indicators */}
            <div
              className={`
                flex flex-wrap items-center gap-x-6 gap-y-2
                transition-all duration-700 delay-600
                ${isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
                }
              `}
            >
              {trustIndicators.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-text-secondary"
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`
          absolute bottom-8 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-2
          transition-all duration-700 delay-[800ms]
          ${isLoaded
            ? 'opacity-60 translate-y-0'
            : 'opacity-0 translate-y-4'
          }
        `}
      >
        <span className="text-xs text-text-tertiary tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
