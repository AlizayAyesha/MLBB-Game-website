import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorner from "./RoundedCorner";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef(null);
  const handleMouseLeave = () => {
    gsap.to(frameRef.current, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power2.out",
    });
  };
  const handleMouseMove = (e) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Adjust sensitivity
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(frameRef.current, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power2.out",
    });
  };
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          The Multiversal ip world
        </p>
        <div className="relative size-full ">
          <AnimatedTitle
            title="Disc<b>o</b>ver the world's <br />l<b>a</b>rgest shared adventure"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 text-center"
            sectionId="#story"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  src="img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                  style={{ willChange: "transform" }}
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                />
              </div>
            </div>
            <RoundedCorner />
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web md:items-start text-violet-50 md:text-start">
              The Game of Games begins—your life, now an epic adventure of
              discovery.
            </p>
            <Button
              id="realm-button"
              title="discover prologue"
              containerClass="mt-5 bg-white text-black px-4 py-2 rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
