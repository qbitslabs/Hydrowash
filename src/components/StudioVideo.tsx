import { useEffect, useRef } from 'react';
import { publicVideos } from 'virtual:public-videos';

const STUDIO_VIDEO_POSTER = '/Hero.png';

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
      className="relative w-full h-[8cm] overflow-hidden"
      aria-label="Studio showcase video"
    >
      <video
        key={videoSrc}
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        poster={STUDIO_VIDEO_POSTER}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} />
      </video>
    </section>
  );
};

export default StudioVideo;
