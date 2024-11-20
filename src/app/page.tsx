// For Next.js App Router
"use client";;
import ReactFullpage from "@fullpage/react-fullpage";
import HeroSection from "@/Components/HeroSection";
import ExperienceSection from "@/Components/ExperienceSection";
import TechStackSection from "@/Components/TechStackSection";
import ExpertiseSection from "@/Components/ExpertiseSection";
import ProjectsSection from "@/Components/ProjectsSection";
import AboutMeSection from "@/Components/AboutMeSection";
import ContactMe from "@/Components/ContactMe";

export default function Home() {
  return (
    <ReactFullpage
      credits={{ enabled: true }}
      licenseKey="XXXXXXXXXXXX"
      debug
      controlArrows
      controlArrowColor=" rgb(59 130 246)"
      scrollingSpeed={1000} // Adjust scrolling speed if needed
      navigation={true} // Show navigation dots
      render={({ fullpageApi }) => (
        <div className="w-full h-full">
          <div className="w-full section h-full">
          <HeroSection />
          </div>
              
          <div className="section h-full w-full">
            <ExperienceSection />
          </div>
          <div className="section bg-slate-950 w-full flex items-center justify-center h-screen">
            <TechStackSection />
          </div>
          <div className="section bg-slate-950 w-full flex items-center justify-center h-screen">
            <ExpertiseSection />
          </div>
          <div className="section bg-slate-950 w-full flex items-center justify-center h-screen">
            <ProjectsSection />
          </div>
          <div className="section bg-slate-950 w-full flex items-center justify-center h-screen">
            <AboutMeSection />
          </div>
          <div className="section bg-slate-950 w-full flex items-center justify-center h-screen">
            <ContactMe />
          </div>
        </div>
      )}
    />
  );
}
