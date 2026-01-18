import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { About } from './components/About';
import { Method } from './components/Method';
import { Process } from './components/Process';
import { Qualification } from './components/Qualification';
import { Insights } from './components/Insights';
import { FAQ } from './components/FAQ';
import { Assessment } from './components/Assessment';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Terms } from './components/Terms';

// Simple router component
const useRouter = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return currentPath;
};

// Home page component
const HomePage: React.FC = () => {
  return (
    <div className="bg-background text-white selection:bg-primary/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero - Grab attention, state value prop */}
        <Hero />

        {/* Problem - Validate their experience with data */}
        <Problem />

        {/* About - Establish credibility */}
        <About />

        {/* Method - Explain three-pillar integration */}
        <Method />

        {/* Process - Show how engagement works */}
        <Process />

        {/* Qualification - Help visitors self-select */}
        <Qualification />

        {/* Insights - LinkedIn posts feed */}
        <Insights />

        {/* FAQ - Address objections */}
        <FAQ />

        {/* Assessment - Final CTA */}
        <Assessment />
      </main>

      {/* Utilities */}
      <ScrollToTop />

      {/* Footer */}
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const currentPath = useRouter();

  // Route based on path
  switch (currentPath) {
    case '/privacy':
      return <PrivacyPolicy />;
    case '/terms':
      return <Terms />;
    default:
      return <HomePage />;
  }
};

export default App;
