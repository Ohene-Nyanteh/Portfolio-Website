import DoubleBorderBox from "@/Widgets/DoubleBorderBox";
import { animated, useSpring } from "@react-spring/web";
import Link from "next/link";
import { DiDjango, DiGit } from "react-icons/di";
import { FaPhp, FaReact } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

export default function TechStackSection() {
  // Set up the intersection observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Define spring animation
  const springs = useSpring({
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1 },
    delay: 1000,
    config: { duration: 1000, mass: 6 },
    pause: !inView, // Pause animation until in view
  });
  const springs4 = useSpring({
    from: { x: 100, opacity: 0 },
    to: { x: 0, opacity: 1 },
    delay: 1000,
    config: { duration: 1000, mass: 6 },
    pause: !inView, // Pause animation until in view
  });
  const springs2 = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 1000,
    config: { duration: 1000, mass: 6 },
    pause: !inView, // Pause animation until in view
  });
  const springs3 = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 1000,
    config: { duration: 1000, mass: 6 },
    pause: !inView, // Pause animation until in view
  });

  return (
    <div className="flex flex-col gap-11 p-2 md:p-10 justify-center items-center">
      <div className="text-5xl font-extrabold text-center">TECH STACK</div>
      <div className="w-full flex-col md:w-5/6 rounded-2xl relative p-1">
        <div className="w-full h-full bg-gradient-to-tr rounded-2xl from-blue-500 to-green-700 filter hidden md:block  opacity-65 absolute top-0 left-0 blur "></div>
        <div className="w-full h-full md:border md:border-blue-500  md:bg-slate-700 relative md:p-16 rounded-2xl p-4">
          <div className="flex flex-col gap-5 md:gap-10">
            <div className="flex justify-between md:flex-row flex-col items-center gap-6">
              <animated.div style={springs} ref={ref}>
                <div className="w-auto flex flex-col gap-6">
                  <DoubleBorderBox>
                    <FaReact size={200} />
                  </DoubleBorderBox>
                  <div className="text-xl font-bold text-center w-full">
                    React
                  </div>
                </div>
              </animated.div>
              <animated.div style={springs2} ref={ref}>
                <div className="w-auto flex flex-col gap-6">
                  <DoubleBorderBox>
                    <FaPhp size={200} />
                  </DoubleBorderBox>
                  <div className="text-xl font-bold text-center w-full">
                    PHP
                  </div>
                </div>
              </animated.div>
              <animated.div style={springs3} ref={ref}>
                <div className="w-auto md:flex flex-col gap-6 hidden md:w-auto">
                  <DoubleBorderBox>
                    <DiGit size={200} />
                  </DoubleBorderBox>
                  <div className="text-xl font-bold text-center w-full">
                    Git
                  </div>
                </div>
              </animated.div>
              <animated.div style={springs4} ref={ref}>
                <div className="w-auto md:flex flex-col gap-6 hidden md:w-auto ">
                  <DoubleBorderBox>
                    <DiDjango size={200} />
                  </DoubleBorderBox>
                  <div className="text-xl font-bold text-center w-full">
                    Django
                  </div>
                </div>
              </animated.div>
            </div>

            <div className="flex justify-center items-center p-1 md:p-4">
              <Link
                href={"/TechStack"}
                className="hover:bg-blue-600 bg-slate-950 px-6 py-4 border-4 border-slate-500 w-full md:w-2/6 text-center font-bold text-xl rounded-full"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
