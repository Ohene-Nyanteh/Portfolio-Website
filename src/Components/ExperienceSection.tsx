import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

export default function ExperienceSection() {
  // Set up the intersection observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3, // Start animation when 30% of the element is visible
  });

  // Define spring animation
  const spring = useSpring({
    from: { y: -200, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 100,
    config: { tension: 150, friction: 20 },
    pause: !inView, // Pause animation until in view
  });

  return (
    <div className="w-full relative h-full bg-slate-950 p-6 md:p-20 flex flex-col gap-10 justify-center items-center">
      <div className="absolute top-0 h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:50px_50px]"></div>
      <div className="w-full md:4/6 h-auto md:p-6 flex items-center justify-center flex-col gap-6 relative">
      <div className="w-full md:4/6 h-auto md:p-6">
        {/* Animated text with intersection observer */}
        <animated.div ref={ref} style={spring} className="italic font-sans font-semibold text-base md:text-3xl text-center">
          &#34;I have half a decade of experience in web development, during which
          I’ve built numerous websites using technologies like React, PHP, React
          Native, HTML, and CSS. My proficiency in both Python and JavaScript
          allows me to excel in building robust backend services using Python
          while leveraging JavaScript for dynamic, responsive frontend
          experiences.&#34;
        </animated.div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:w-fit text-center md:flex-row md:rounded-full rounded w-full p-6 gap-6 bg-slate-800">
        <div className="md:px-10 md:py-6 px-5 py-2 rounded-full bg-slate-950 border-2 hover:border-blue-400">Learn More</div>
        <div className="md:px-10 md:py-6 px-5 py-2 rounded-full bg-slate-950 border-2 hover:border-blue-400">View My Works</div>
        <div className="md:px-10 md:py-6 px-5 py-2 rounded-full bg-slate-950 border-2 hover:border-blue-400">Contact Me</div>
      </div>
      </div>
    </div>
  );
}
