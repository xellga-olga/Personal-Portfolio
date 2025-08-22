import Navbar from "@/components/Navbar.jsx";
import Background from "@/components/Background.jsx";
import Footer from "@/components/Footer.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import AboutMeSection from "@/components/AboutMeSection.jsx";
import SkillsSection from "@/components/SkillsSection.jsx";

export const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden '>
      <Background />
      <Navbar />
      <main>
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  )
}