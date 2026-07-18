import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { useInstagramPosts, type InstagramPost } from '@/hooks/useInstagramPosts';
import { cn } from '@/lib/utils';
import { Instagram, Play } from 'lucide-react';

const INSTAGRAM_PROFILE_URL = 'https://instagram.com/hydrowash__';
const SKELETON_COUNT = 8;
const DISPLAY_COUNT = 8;

const SkeletonCard = memo(() => (
  <div
    className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-500 hover:scale-[1.03] hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10"
    aria-hidden="true"
  >
    <div className="h-full w-full bg-gradient-to-br from-card via-muted/20 to-card" />
  </div>
));

SkeletonCard.displayName = 'SkeletonCard';

const LuxuryEmptyState = memo(() => (
  <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 py-16 text-center shadow-lg">
    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
      <Instagram className="h-6 w-6 text-gold" aria-hidden="true" />
    </div>
    <p className="mb-6 max-w-sm text-sm text-muted-foreground sm:text-base">
      Unable to load latest Instagram posts.
    </p>
    <a
      href={INSTAGRAM_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Hydrowash on Instagram"
      className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-background transition-colors duration-300 hover:bg-gold/90"
    >
      <Instagram className="h-4 w-4" aria-hidden="true" />
      Visit Instagram
    </a>
  </div>
));

LuxuryEmptyState.displayName = 'LuxuryEmptyState';

interface InstagramCardProps {
  post: InstagramPost;
  index: number;
  isVisible: boolean;
}

const InstagramCard = memo(({ post, index, isVisible }: InstagramCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isVideo = post.mediaType === 'VIDEO';
  const isImage = post.mediaType === 'IMAGE' || post.mediaType === 'CAROUSEL_ALBUM';
  const altText = post.caption
    ? `Hydrowash Instagram: ${post.caption}`
    : 'Hydrowash Instagram post';

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }, []);

  const handleFocus = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsHovered(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }, []);

  useEffect(() => {
    if (!isHovered || !isVideo) return;

    const video = videoRef.current;
    if (!video) return;

    void video.play().catch(() => {
      /* autoplay may be blocked; thumbnail remains visible */
    });
  }, [isHovered, isVideo]);

  return (
    <a
      href={post.permalink || INSTAGRAM_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View Hydrowash Instagram post on Instagram${post.caption ? `: ${post.caption}` : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={cn(
        'group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-500 hover:scale-[1.03] hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {isImage && (
        <img
          src={post.mediaUrl}
          alt={altText}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {isVideo && (
        <>
          <img
            src={post.thumbnail}
            alt={altText}
            loading="lazy"
            decoding="async"
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
              isHovered ? 'opacity-0' : 'opacity-100'
            )}
          />
          {isHovered && (
            <video
              ref={videoRef}
              src={post.mediaUrl}
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            />
          )}
        </>
      )}

      {isVideo && (
        <div
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm"
          aria-hidden="true"
        >
          <Play className="h-4 w-4 fill-white text-white" />
        </div>
      )}

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        <div className="mb-2 flex items-center gap-2 text-gold">
          <Instagram className="h-4 w-4" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-wider sm:text-sm">
            View on Instagram
          </span>
        </div>
        {post.caption && (
          <p className="line-clamp-2 text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
            {post.caption}
          </p>
        )}
      </div>
    </a>
  );
});

InstagramCard.displayName = 'InstagramCard';

const InstagramTopPicks = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const { posts, loading, error } = useInstagramPosts();

  const displayPosts = posts.slice(0, DISPLAY_COUNT);
  const showEmptyState = !loading && (Boolean(error) || displayPosts.length === 0);

  return (
    <section
  ref={ref}
  className="bg-gradient-to-b from-background via-card/10 to-background py-16 sm:py-20 md:py-28"
>
  <div className="section-container">
    <div
      className={cn(
        "mb-12 text-center transition-all duration-700 sm:mb-16",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      )}
    >
      <div className="mb-3 flex items-center justify-center gap-2">
        <Instagram className="h-5 w-5 text-gold" aria-hidden="true" />
        <span className="micro-label">Top Picks</span>
      </div>

      <h2 className="mb-3 headline-lg">
        Follow Our <span className="text-gold-gradient">Journey</span>
      </h2>

      <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
        Check out our latest work and transformations on Instagram.
      </p>

      <a
        href={INSTAGRAM_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Hydrowash on Instagram"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 font-semibold text-background transition-colors duration-300 hover:bg-gold/90"
      >
        <Instagram className="h-4 w-4" aria-hidden="true" />
        Follow @hydrowash__
      </a>
    </div>

    <div
      className={cn(
        "grid grid-cols-2 gap-4 transition-all duration-700 sm:gap-6 lg:grid-cols-4",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      {loading &&
        Array.from({ length: DISPLAY_COUNT }, (_, index) => (
          <SkeletonCard key={`skeleton-${index}`} />
        ))}

      {showEmptyState && <LuxuryEmptyState />}

      {!loading &&
        !showEmptyState &&
        displayPosts.map((post, index) => (
          <InstagramCard
            key={post.id}
            post={post}
            index={index}
            isVisible={isVisible}
          />
        ))}
    </div>
  </div>
</section>
  );
};

export default InstagramTopPicks;
