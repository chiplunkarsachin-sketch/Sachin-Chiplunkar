import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, ArrowRight, ExternalLink, BookOpen } from 'lucide-react';

// This interface matches what n8n will provide
interface LinkedInPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  engagement?: {
    likes: number;
    comments: number;
  };
}

// Placeholder posts - will be replaced by n8n feed
const placeholderPosts: LinkedInPost[] = [
  {
    id: '1',
    title: 'Why Your Lean Initiatives Keep Failing',
    excerpt: 'Most manufacturing leaders think their operations problems are about processes. They\'re not. After 20 years, here\'s what I\'ve learned about why transformations stall...',
    date: '2026-01-15',
    url: 'https://www.linkedin.com/in/sachinchiplunkar/',
    engagement: { likes: 127, comments: 23 },
  },
  {
    id: '2',
    title: 'The Hidden Cost of Executive Burnout',
    excerpt: 'We track every operational metric except the one that matters most: the biological systems running our businesses. Here\'s why that\'s costing you millions...',
    date: '2026-01-10',
    url: 'https://www.linkedin.com/in/sachinchiplunkar/',
    engagement: { likes: 89, comments: 15 },
  },
  {
    id: '3',
    title: '80% of AI Projects Fail. Here\'s How to Be in the 20%',
    excerpt: 'AI isn\'t failing because of technology. It\'s failing because we\'re implementing it wrong. The integration problem nobody talks about...',
    date: '2026-01-05',
    url: 'https://www.linkedin.com/in/sachinchiplunkar/',
    engagement: { likes: 156, comments: 31 },
  },
];

interface PostCardProps {
  post: LinkedInPost;
  delay: number;
  isVisible: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, delay, isVisible }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group block p-6 rounded-2xl
        bg-gradient-to-b from-white/[0.03] to-transparent
        border border-white/5 hover:border-white/10
        transition-all duration-700 ease-out
        hover:shadow-xl hover:shadow-primary/5
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
        }
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Date */}
      <div className="flex items-center gap-2 text-xs text-text-tertiary mb-3">
        <BookOpen className="w-3 h-3" />
        {formattedDate}
      </div>

      {/* Title */}
      <h3 className="text-lg font-display font-semibold text-white mb-3
        group-hover:text-gradient transition-all duration-300">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {post.engagement && (
          <div className="flex items-center gap-3 text-xs text-text-tertiary">
            <span>{post.engagement.likes} likes</span>
            <span>•</span>
            <span>{post.engagement.comments} comments</span>
          </div>
        )}
        
        <span className="flex items-center gap-1 text-sm text-primary font-medium
          opacity-0 group-hover:opacity-100 transition-opacity">
          Read more
          <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </a>
  );
};

export const Insights: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [posts, setPosts] = useState<LinkedInPost[]>(placeholderPosts);
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

  // Fetch posts from n8n endpoint (when available)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // This URL will be your n8n webhook endpoint
        // const response = await fetch('/api/linkedin-posts');
        // const data = await response.json();
        // setPosts(data);
      } catch (error) {
        console.log('Using placeholder posts');
      }
    };

    fetchPosts();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="insights"
      className="section-lg relative overflow-hidden"
      aria-labelledby="insights-heading"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div 
              className={`
                flex items-center gap-2 text-sm font-medium text-primary 
                tracking-wide uppercase mb-4
                transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              <Linkedin className="w-4 h-4" />
              Latest Insights
            </div>
            
            <h2 
              id="insights-heading"
              className={`
                text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white
                transition-all duration-700 delay-100
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
            >
              From My LinkedIn
            </h2>
          </div>

          <a
            href="https://www.linkedin.com/in/sachinchiplunkar/"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              inline-flex items-center gap-2 text-primary font-medium
              hover:text-accent transition-colors shrink-0
              ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}
            style={{ transitionDelay: '200ms' }}
          >
            Follow on LinkedIn
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <PostCard
              key={post.id}
              post={post}
              delay={index * 100}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`
            text-center mt-12
            transition-all duration-700 delay-400
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <p className="text-text-secondary mb-4">
            Get weekly insights on operations, leadership, and AI delivered to your feed.
          </p>
          <a
            href="https://www.linkedin.com/in/sachinchiplunkar/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Insights;
