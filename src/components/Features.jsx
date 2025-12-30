import React, { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState();
  const itemRef = useRef();
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    setTransformStyle({
      transform: `perspective(1000px) rotateX(${
        (e.clientY -
          itemRef.current.getBoundingClientRect().top -
          itemRef.current.clientHeight / 2) /
        20
      }deg) rotateY(${
        (e.clientX -
          itemRef.current.getBoundingClientRect().left -
          itemRef.current.clientWidth / 2) /
        20
      }deg)`,
      transition: "transform 0.1s ease-out",
    });
  };
  const handleMouseLeave = () => {
    setTransformStyle(undefined);
  };
  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
    >
      <div className="absolute inset-0 transform transition-transform duration-500 hover:scale  105">
        {children}
      </div>
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');
  
  if (isYouTube) {
    // Extract video ID from YouTube URL
    let videoId = '';
    if (src.includes('youtu.be')) {
      videoId = src.split('youtu.be/')[1]?.split('?')[0];
    } else if (src.includes('v=')) {
      videoId = src.split('v=')[1]?.split('&')[0];
    } else if (src.includes('/shorts/')) {
      videoId = src.split('/shorts/')[1]?.split('?')[0];
    }
    
    return (
      <div className="relative size-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
          <div>
            <h1 className="bento-title special-font">{title}</h1>
            {description && (
              <p className="mt-2 max-w-64 text-xs md:text-base opacity-80">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-2 max-w-64 text-xs md:text-base opacity-80">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="flex flex-col md:flex-row items-start gap-8 px-5 py-32">
          <div className="flex-1">
            <h1 className="special-font hero-heading text-blue-100">
              About</h1>
            <p className="font-circular-web text-lg text-blue-50">
              Into the Metagame Layer</p>
            <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
              
Step into the metagame layer—where true mastery begins. This is the space where players don't just play the game, but study it, adapt to evolving strategies, and outthink the competition. The metagame goes beyond mechanics or heroes; it's about understanding trends, reading opponents, and making smart decisions within the ever-changing competitive environment.

Rather than a single "world's largest gaming arena," esports thrives across massive global stages. Mobile Legends: Bang Bang (MLBB) stands out as one of the largest mobile esports titles in the world, with an enormous competitive ecosystem—especially across Southeast Asia. Its flagship tournaments, including the M World Championship and MSC, bring together elite teams, millions of viewers, and multi-million-dollar prize pools, cementing MLBB's position as a leader in mobile esports.

On a broader scale, esports' biggest moments happen in iconic venues and global events—from stadiums like Arthur Ashe Stadium, which has hosted world-class esports finals, to massive industry gatherings like Gamescom, the world's largest gaming trade fair. These platforms collectively form the shared arena where competition, strategy, and innovation collide.

In this global landscape, the metagame is what connects every player, team, and tournament—turning competition into a shared strategic adventure played on the world's biggest stages.
             </p>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-4">
            <img 
              src="https://digital-trans.asia/storage/app/uploads/public/664/2b2/dda/6642b2ddaa9ed511100738.jpg"
              alt="MLBB Champions"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
            <img 
              src="https://contents.spin.ph/image/resize/image/2024/12/21/mlbb-rising-1734778079.webp"
              alt="MLBB Champions"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
             <img 
                src="https://i.redd.it/4szhxh980h771.jpg"
                alt="Mobile Legends Bang Bang"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
            <div className="flex flex-row gap-2 w-full">
              <img 
                src="https://i.ytimg.com/vi/Ri76piR9ueg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAs0M-x5g9QmPXQxeCpUNBFZhlsaA"
                alt="MLBB Gameplay"
                className=" w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                Free<b>-Skin</b>'s
              </>
            }
            description="Download the App now and earn the pack of skins free."
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
             src="videos/feature-2.mp4"
                  title={
                <>
                  suy<b>o</b>u
                </>
              }
              description="A legend who fight with the darkness nobody sees."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  S<b>O</b>RA
                </>
              }
              description="The Warrior and saviour from the desert holds the power of clouds and thunder."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  I<b>X</b>IA
                </>
              }
              description="The ultimate Out Law legend."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re c<b>o</b>ming s<b>o</b>on
              </h1>
              <TiLocationArrow className="m-2 scale=[5] self-end text-black " />
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="relative size-full">
              <video
                src="videos/feature-5.mp4"
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
              />
              <div className="relative z-10 flex size-full flex-col justify-end p-5 text-blue-50">
                <h1 className="bento-title special-font">
                  C<b>LIN</b>T
                </h1>
                <p className="mt-2 max-w-64 text-xs md:text-base opacity-80">
                  The unbeateable sheriff.
                </p>
              </div>
            </div>
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;

