import { useEffect, useRef, useState } from 'react';
import { publicVideos } from 'virtual:public-videos';


const StudioVideo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoSrc = publicVideos[0];

  // The source video is large, so don't start a network request until the
  // visitor is approaching this section.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '800px 0px' },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc || !shouldLoad) return;

    video.playbackRate = 1;
    video.muted = true;
    video.loop = true;

    const playVideo = () => {
      video.playbackRate = 1;
      void video.play().catch(() => {
        // Autoplay may be blocked until user interacts with the page
      });
    };

    playVideo();
    video.addEventListener('canplay', playVideo);

    return () => {
      video.removeEventListener('canplay', playVideo);
    };
  }, [shouldLoad, videoSrc]);

  if (!videoSrc) return null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black"
      aria-label="Studio showcase video"
    >
      <div className="mx-auto aspect-[16/9] w-full max-w-[950px]">
        <video
          key={videoSrc}
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          {shouldLoad && <source src={videoSrc} type="video/mp4" />}
        </video>
      </div>
    </section>
  );
};

export default StudioVideo;
