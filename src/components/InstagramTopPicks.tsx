import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';
import { Instagram, Heart, MessageCircle, Play } from 'lucide-react';

interface InstagramPost {
  id: number;
  type: 'post' | 'reel';
  thumbnail: string;
  likes: number;
  comments: number;
  caption: string;
}

const InstagramTopPicks = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const posts: InstagramPost[] = [
    {
      id: 1,
      type: 'reel',
      thumbnail: '/instagram-placeholder-1.jpg',
      likes: 234,
      comments: 45,
      caption: 'Premium ceramic coating transformation ✨',
    },
    {
      id: 2,
      type: 'post',
      thumbnail: '/instagram-placeholder-2.jpg',
      likes: 189,
      comments: 32,
      caption: 'Before & After: Deep interior detailing',
    },
    {
      id: 3,
      type: 'reel',
      thumbnail: '/instagram-placeholder-3.jpg',
      likes: 312,
      comments: 67,
      caption: 'Paint correction magic 🎨',
    },
    {
      id: 4,
      type: 'post',
      thumbnail: '/instagram-placeholder-4.jpg',
      likes: 156,
      comments: 28,
      caption: 'Engine bay detailing excellence',
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-background via-card/10 to-background">
      <div className="section-container">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-12 sm:mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Instagram className="w-5 h-5 text-gold" />
            <span className="micro-label">Top Picks</span>
          </div>
          <h2 className="headline-lg mb-3">
            Follow Our <span className="text-gold-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Check out our latest work and transformations on Instagram
          </p>
          <a
            href="https://www.instagram.com/hydrowash__"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-full bg-gold text-background font-semibold hover:bg-gold/90 transition-colors duration-300"
          >
            <Instagram className="w-4 h-4" />
            Follow @hydrowash__
          </a>
        </div>

        {/* Instagram Grid */}
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {posts.map((post, index) => (
            <a
              key={post.id}
              href="https://www.instagram.com/hydrowash__"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative aspect-square rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-gold/50",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Thumbnail Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card/80 to-gold/20 flex items-center justify-center">
                <Instagram className="w-12 h-12 text-gold/30 group-hover:text-gold/50 transition-colors duration-300" />
              </div>

              {/* Type Badge */}
              {post.type === 'reel' && (
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs sm:text-sm font-medium line-clamp-2 mb-2">
                  {post.caption}
                </p>
                <div className="flex items-center gap-4 text-white/80 text-xs">
                  <div className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramTopPicks;
