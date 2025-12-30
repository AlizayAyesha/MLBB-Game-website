import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: "0%",
      ease: "power1.inOut",
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to MLBB
        </h2>

        <AnimatedTitle
          title="Into the <b>Meta</b>game <br />where <b>strategy</b> wins"
          containerClass="mt:5 !text-black text-center"
        />

        <div className="about-subtext text-center max-w-2xl">
          <p>
            This is where real competition begins—analyzing the game,
            adapting to the meta, and outplaying your opponents.
          </p>
          <p>
            Mobile Legends: Bang Bang stands among the world’s largest
            mobile esports titles, played and watched across global
            tournaments, iconic venues, and massive competitive stages.
          </p>
        </div>
      </div>

      {/* Animated section */}
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
