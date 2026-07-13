import { useEffect, useRef } from 'react';
import { publicVideos } from 'virtual:public-videos';

const STUDIO_VIDEO_POSTER = '/Hero.webp';

const StudioVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = publicVideos[0];

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;

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
    video.addEventListener('loadeddata', playVideo);

    return () => {
      video.removeEventListener('loadeddata', playVideo);
    };
  }, [videoSrc]);

  if (!videoSrc) return null;

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      aria-label="Studio showcase video"
    >
      <div className="mx-auto aspect-[16/9] w-full max-w-[950px]">
        <video
          key={videoSrc}
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center"
          poster={STUDIO_VIDEO_POSTER}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src={videoSrc} />
        </video>
      </div>
    </section>
  );
};

export default StudioVideo;
