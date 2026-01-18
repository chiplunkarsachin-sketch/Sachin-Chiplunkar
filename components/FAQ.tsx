import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay: number;
  isVisible: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
  delay,
  isVisible,
}) => {
  return (
    <div
      className={`
        border-b border-white/5 last:border-b-0
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between gap-4 text-left
          group hover:text-primary transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-white group-hover:text-primary transition-colors">
          {question}
        </span>
        <ChevronDown 
          className={`
            w-5 h-5 text-text-tertiary shrink-0
            transition-transform duration-300
            ${isOpen ? 'rotate-180 text-primary' : ''}
          `}
        />
      </button>
      
      <div 
        className={`
          overflow-hidden transition-all duration-300 ease-out
          ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}
        `}
      >
        <p className="text-text-secondary leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
};

const faqItems = [
  {
    question: 'Do I need all three pillars, or can I just focus on operations?',
    answer: 'You can absolutely start with operations—that\'s usually why people reach out. However, if you\'ve already tried operational improvements that didn\'t stick, the reason is almost always connected to the other pillars. The discovery call helps us identify where your specific bottleneck is. Many clients are surprised to find their "operations problem" is actually a leadership burnout issue.',
  },
  {
    question: 'How long does a typical transformation take?',
    answer: 'The core program runs 90 days, with an additional 90-day monitoring period. However, the actual timeline depends on your starting point and goals. Some transformations wrap up in 90 days; others require 180 days for full implementation. We\'ll determine the right scope during the discovery assessment.',
  },
  {
    question: 'What ROI can I expect from this investment?',
    answer: 'Clients typically see 3-10× performance improvements. The exact ROI depends on your baseline and the specific metrics we target. During the discovery assessment, we\'ll identify your key performance indicators and set realistic, measurable goals. I don\'t promise specific numbers without understanding your situation first.',
  },
  {
    question: 'What if my team resists the changes?',
    answer: 'Resistance is usually a symptom, not the problem. It often indicates burned-out leaders, past failed initiatives, or poor change communication. That\'s exactly why we address human performance alongside operations. The Bio-Operational approach is designed to reduce resistance by acknowledging and addressing its root causes.',
  },
  {
    question: 'How is this different from hiring a lean consultant?',
    answer: 'Most lean consultants deliver excellent processes—that then get abandoned. They focus on operations in isolation. I integrate operations with leadership health and AI tools because that\'s where transformations actually sustain. It\'s not that lean doesn\'t work; it\'s that lean alone isn\'t enough.',
  },
  {
    question: 'What\'s the investment for the 90-Day Transformation?',
    answer: 'The program investment ranges from $75,000 to $125,000, depending on scope and complexity. This includes the full 90-day implementation plus 90 days of post-program monitoring. We can discuss a paid discovery assessment ($5,000-$8,000) if you want to start smaller and validate the approach before committing to the full program.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="section-lg relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30
        pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div 
              className={`
                inline-flex items-center gap-2 text-sm font-medium text-primary 
                tracking-wide uppercase mb-4
                transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              <MessageCircle className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            
            <h2 
              id="faq-heading"
              className={`
                text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6
                transition-all duration-700 delay-100
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
            >
              Common Questions
            </h2>
            
            <p 
              className={`
                text-lg text-text-secondary
                transition-all duration-700 delay-200
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
            >
              Answers to what most manufacturing leaders ask before we work together.
            </p>
          </div>

          {/* FAQ Items */}
          <div 
            className={`
              glass-panel rounded-2xl px-6 sm:px-8
              transition-all duration-700 delay-300
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => toggleItem(index)}
                delay={300 + index * 50}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <p 
            className={`
              text-center text-text-secondary mt-8
              transition-all duration-700 delay-500
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            Have a question not listed here?{' '}
            <a 
              href="#assessment" 
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              Ask during your discovery call
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
