import Image from "next/image";
import Background1 from "../../public/Background1.webp";
import Header from "./Header";
import { MdArrowDownward } from "react-icons/md";
import { useSpring, animated } from "@react-spring/web";
import { fullpageApi } from "@fullpage/react-fullpage";

export default function HeroSection({fullpage_api}:{fullpage_api: fullpageApi}) {
  const springs = useSpring({
    from: { x: -2000 },
    to: { x: 0 },
    config: { duration: 2000, mass: 10 }, // Slows down the animation (2 seconds)
  });
  const springs_Intro = useSpring({
    from: { x: 2000 },
    to: { x: 0 },
    config: { duration: 2000, mass: 10 }, // Slows down the animation (2 seconds)
  });

  return (
    <div
      className="w-full h-full relative flex overflow-hidden"
      style={{ position: "relative" }}
    >
      <div className="w-full h-full">
        <Image
          src={Background1}
          alt="BackgroundImage"
          className="object-cover w-full h-full"
        />
      </div>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-950 z-10 opacity-[0.95]">
      <div className="relative h-full w-full bg-slate-950">
       <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
       <div className="w-full h-full flex flex-col z-20 relative">
          <Header fullpage_api={fullpage_api}/>
          <div className="w-full h-full py-6 flex flex-col gap-16">
            <div className="w-full flex justify-center">
              <div className="px-6 py-2 border-2 border-blue-600 text-2xl w-fit hover:bg-blue-500">
                HELLO
              </div>
            </div>
            <div className="w-full flex justify-center flex-col gap-16">
              <animated.div className={"w-full h-full"} style={springs_Intro}>
                <div className="text-xl md:text-4xl italic text-center translate-x-0">
                  I am Ohene,
                </div>
              </animated.div>
              <animated.div className="w-full h-full" style={springs}>
                <div className="md:text-8xl text-4xl font-extrabold text-center flex flex-col gap-4">
                  <div>
                    A{" "}
                    <span className="hover:border-2 text-transparent p-2 hover:border-blue-500 bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">
                      FULL-STACK
                    </span>
                  </div>
                  <div>SOFTWARE DEVELOPER</div>
                </div>
              </animated.div>
            </div>
          </div>
          <div className="flex w-full justify-center p-4">
            <MdArrowDownward size={30} className="animate-bounce" />
          </div>
        </div>
     </div>
 
      </div>
    </div>
  );
}
