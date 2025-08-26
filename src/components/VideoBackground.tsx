interface VideoBackgroundProps {
  src: string;
  className?: string;
}

const VideoBackground = ({ src, className = "" }: VideoBackgroundProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
    </div>
  );
};

export default VideoBackground;