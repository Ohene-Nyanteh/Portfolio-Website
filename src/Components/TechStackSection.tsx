import DoubleBorderBox from "@/Widgets/DoubleBorderBox";
import { animated, useSpring } from "@react-spring/web";
import Link from "next/link";
import { DiCss3, DiDjango, DiGit, DiGo, DiPython } from "react-icons/di";
import { FaPhp, FaReact } from "react-icons/fa6";
import { MdCss } from "react-icons/md";
import { TbSql } from "react-icons/tb";
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
    <div className="flex flex-col gap-5 p-4 md:p-5 justify-center items-center">
      <div className="text-3xl p-2 border border-blue-500 font-extrabold text-center">TECH STACK</div>
      <div className="w-full flex-col md:w-5/6 rounded-2xl relative p-1">
        <div className="w-full h-full bg-gradient-to-tr rounded-2xl from-blue-500 to-green-700 filter hidden md:block  opacity-65 absolute top-0 left-0 blur "></div>
        <div className="w-full h-full md:border md:border-blue-500  md:bg-slate-700 relative md:p-10 rounded-2xl p-4">
          <div className="flex flex-col gap-5 md:gap-2">
            <div className="grid grid-cols-2 place-items-center  md:grid md:place-items-center md:grid-cols-4 md:grid-rows-2 md:gap-10 flex-col flex-wrap items-center gap-6">
              <animated.div style={springs} ref={ref}>
                <div className="w-auto flex flex-col gap-3">
                  <DoubleBorderBox>
                    <FaReact  className="size-28 md:size-32" />
                  </DoubleBorderBox>
                  <div className="text-xl font-bold text-center w-full">
                    React
                  </div>
                </div>
              </animated.div>
              <animated.div style={springs2} ref={ref}>
                <div className="w-auto flex flex-col gap-3">
                  <DoubleBorderBox>
                    <FaPhp className="size-28" />
                  </DoubleBorderBox>
                  <div className="text-xl font-bold text-center w-full">
                    PHP
                  </div>
                </div>
              </animated.div>
              <animated.div style={springs3} ref={ref}>
                <div className="w-auto flex md:flex flex-col gap-3  md:w-auto">
                  <DoubleBorderBox>
                    <DiGit className="size-28 md:size-32" />
                  </DoubleBorderBox>
                  <div className="text-xl font-bold text-center w-full">
                    Git
                  </div>
                </div>
              </animated.div>
              <animated.div style={springs4} ref={ref}>
                <div className="w-auto flex md:flex flex-col gap-3  md:w-auto ">
                  <DoubleBorderBox>
                    <DiDjango className="size-28 md:size-32" />
                  </DoubleBorderBox>
                  <div className="text-xl font-bold text-center w-full">
                    Django
                  </div>
                </div>
              </animated.div>
              <animated.div style={springs} ref={ref}>
                <div className="w-auto flex md:flex flex-col gap-3  md:w-auto ">
                  <DoubleBorderBox>
                    <DiPython className="size-28 md:size-32" />
                  </DoubleBorderBox>
                  <div className="text-xl font-bold text-center w-full">
                    Python
                  </div>
                </div>
              </animated.div>
              <animated.div style={springs2} ref={ref}>
                <div className="w-auto flex md:flex flex-col gap-3  md:w-auto ">
                  <DoubleBorderBox>
                    <TbSql className="size-28 md:size-32" />
                  </DoubleBorderBox>
                  <div className="text-xl font-bold text-center w-full">
                    SQL
                  </div>
                </div>
              </animated.div>
              <animated.div style={springs3} ref={ref}>
                <div className="w-auto md:flex flex-col hidden gap-3  md:w-auto ">
                  <DoubleBorderBox>
                    <DiCss3 className="size-28 md:size-32" />
                  </DoubleBorderBox>
                  <div className="text-xl font-bold text-center w-full">
                    CSS
                  </div>
                </div>
              </animated.div>
              <animated.div style={springs4} ref={ref}>
                <div className="w-auto md:flex flex-col hidden gap-3  md:w-auto ">
                  <DoubleBorderBox>
                    <DiGo className="size-28 md:size-32" />
                  </DoubleBorderBox>
                  <div className="text-xl font-bold text-center w-full">
                    Go
                  </div>
                </div>
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
