import Image from "next/image";
import ProfileImage from "../../public/ImageForU.jpg";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "@react-spring/web";
export default function AboutMeSection() {

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


      const springs2 = useSpring({
        from: { x: 100, opacity: 0 },
        to: { x: 0, opacity: 1 },
        delay: 1000,
        config: { duration: 1000, mass: 6 },
        pause: !inView, // Pause animation until in view
      });

      
  return (
    <div className="flex flex-col gap-4 w-full h-full justify-center md:p-20 p-2 items-center">
      <div className="text-3xl font-extrabold border border-blue-500 p-4">
        ABOUT ME
      </div>
      <div className="w-full h-full flex flex-col md:flex-row gap-4 md:gap-0">
        <animated.div ref={ref} style={springs2} className='w-full h-full'>
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={ProfileImage}
            alt="Profile Image"
            className="w-full h-full md:w-[30rem] md:h-[30rem] border-[10px] border-slate-600 rounded md:rounded-full"
          />
        </div>
        </animated.div>

        <animated.div ref={ref} style={springs} className='w-full h-full'>
        <div className="w-full h-full flex flex-col gap-4 md:p-10 items-center justify-center">
          <div className="text-2xl hidden md:block md:text-3xl w-full text-center  border border-blue-500 p-2 italic">
            A little About Me
          </div>
          <div className="w-full h-full shadow-md md:bg-slate-800 md:p-4 rounded-lg flex items-center justify-center font-sans text-sm md:text-lg text-center">
            My name is Ohene Nyanteh, and I began my coding journey about half a
            decade ago when I discovered a deep passion for programming. What
            started as curiosity quickly became a drive to learn and master
            various technologies. Over the years, I&apos;ve become proficient in
            languages like PHP, JavaScript, and Python, and frameworks such as
            React and Vue.js. This experience has allowed me to build websites,
            mobile apps using React Native, and backend solutions. I am
            constantly seeking to expand my skills, as I find joy in solving
            problems and creating impactful digital experiences that push the
            boundaries of what's possible.
          </div>
        </div>
        </animated.div>

      </div>
    </div>
  );
}
