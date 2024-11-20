import GHSWebsite from "../../public/GSHSWebsite.png";
import SchoolVotingSystem from "../../public/SchoolVotingSystem.png";
import CodeProScreenshot from "../../public/CodeProSreenshot.png";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <div className="w-full h-full p-2 md:p-20 flex justify-center items-center">
      <div className="md:w-4/5 w-full h-full flex flex-col justify-center items-center gap-6">
        <div className="border-2 border-blue-500 p-2 w-fit font-extrabold text-3xl">
          Projects
        </div>
        <div className="w-full h-full" id="section1">
          <div className="slide w-full h-full rounded">
            <div className="w-full h-full relative rounded">
              <Image
                src={GHSWebsite}
                alt="Ghana Senior High School Website"
                className="rounded object-cover w-full h-full"
              />
              <div className="absolute w-full h-full left-0 top-0 bg-slate-950 opacity-55"></div>
              <div className="absolute w-full h-full z-20 left-0 top-0 flex justify-end items-end p-2">
                <Link
                  href="https://github.com/Ohene-Nyanteh/Ghana-Senior-high-School"
                  target="_blank" className="w-fit hover:text-blue-500 text-white text-center bg-slate-900 p-4 rounded text-2xl font-extrabold"
                >
                  GHANA SENIOR HIGH SCHOOL WEBSITE
                </Link>
              </div>
            </div>
          </div>
          <div className="slide w-full h-full rounded">
            <div className="w-full h-full relative rounded">
              <Image
                src={CodeProScreenshot}
                alt="Ghana Senior High School Website"
                className="rounded object-cover w-full h-full"
              />
              <div className="absolute w-full h-full left-0 top-0 bg-slate-950 opacity-55"></div>
              <div className="absolute w-full h-full z-20 left-0 top-0 flex justify-end items-end p-2">
                <Link
                  href="https://github.com/Ohene-Nyanteh/CodePro"
                  target="_blank" className="w-fit hover:text-blue-500 text-white text-center bg-slate-900 rounded text-3xl p-4 font-extrabold"
                >
                  CODEPRO
                </Link>
              </div>
            </div>
          </div>
          <div className="slide w-full h-full bg-yellow-500 rounded">
            <div className="w-full h-full relative rounded">
              <Image
                src={SchoolVotingSystem}
                alt="Ghana Senior High School Website"
                className="rounded object-cover w-full h-full"
              />
              <div className="absolute w-full h-full left-0 top-0 bg-slate-950 opacity-55"></div>
              <div className="absolute w-full h-full z-20 left-0 top-0 flex justify-end items-end p-2">
                <Link
                  href="https://github.com/Ohene-Nyanteh/School-Voting-System"
                  target="_blank" className="w-fit hover:text-blue-500 text-white text-center bg-slate-900 rounded text-3xl p-4 font-extrabold"
                >
                  School Voting System
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Link href="https://github.com/Ohene-Nyanteh" target="_blank" className="border-2 border-blue-500 px-10 hover:bg-blue-500 py-2 rounded-full w-fit text-2xl">See More</Link>
      </div>
    </div>
  );
}
