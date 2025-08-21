import {ThemeToggle} from "@/components/ThemeToggle.jsx";
import Navbar from "@/components/Navbar.jsx";
import Background from "@/components/Background.jsx";
import Footer from "@/components/Footer.jsx";
import HeroSection from "@/components/HeroSection.jsx";

export const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden '>
      <Background />
      <Navbar />
      {/*Main Content*/}
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  )
}