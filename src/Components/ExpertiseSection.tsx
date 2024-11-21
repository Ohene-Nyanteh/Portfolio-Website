import Image from "next/image";
import BackgroundImage2 from "./../../public/Background1.webp";
import { animated, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

export default function ExpertiseSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Define spring animation
  const springs = useSpring({
    from: { y: -50, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 500,
    config: { duration: 1000, mass: 6 },
    pause: !inView, // Pause animation until in view
  });
  const springs2 = useSpring({
    from: { y: -50, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 1000,
    config: { duration: 1000, mass: 6 },
    pause: !inView, // Pause animation until in view
  });
  const springs3 = useSpring({
    from: { y: -50, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 1500,
    config: { duration: 1000, mass: 6 },
    pause: !inView, // Pause animation until in view
  });
  const springs4 = useSpring({
    from: { y: -50, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 2000,
    config: { duration: 1000, mass: 6 },
    pause: !inView, // Pause animation until in view
  });

  return (
    <div className="w-full h-full relative">
      <div className="relative w-full h-full">
        <Image
          src={BackgroundImage2}
          alt="Background Image 2"
          className="object-cover w-full h-full"
        />
        <div className="absolute w-full h-full left-0 top-0 bg-slate-950 opacity-95"></div>
      </div>

      <div className="absolute top-0 left-0 p-5 w-full h-full flex flex-col  md:gap-6 justify-evenly md:p-10">
        <animated.div ref={ref} style={springs}>
          <div
            className="w-full text-center md:text-6xl italic text-3xl"
            ref={ref}
          >
            Where
          </div>
        </animated.div>
        <animated.div ref={ref} style={springs2}>
          <div className=" md:text-[8rem] text-center bg-transparent text-3xl md:w-fit w-full md:ml-20 font-extrabold bg-gradient-to-r animate-bounce border-2 border-blue-500 md:leading-none from-blue-500 to-green-500 text-transparent bg-clip-text">
            EXPERTATIONS
          </div>
        </animated.div>
        <animated.div ref={ref} style={springs3}>
          <div className="md:text-6xl text-3xl ml-0 text-center italic">
            Turns into
          </div>
        </animated.div>
        <animated.div ref={ref} style={springs4}>
          <div className="md:text-[10rem] animate-bounce md:leading-none text-4xl border-2 border-green-500 md:ml-80 text-center font-extrabold bg-gradient-to-r from-green-500 to-yellow-500 text-transparent bg-clip-text">
            INNOVATION
          </div>
        </animated.div>
      </div>
    </div>
  );
}
