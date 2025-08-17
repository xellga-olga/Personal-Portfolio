import {ThemeToggle} from "@/components/ThemeToggle.jsx";
import Navbar from "@/components/Navbar.jsx";
import Background from "@/components/Background.jsx";
import Footer from "@/components/Footer.jsx";

export const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden '>
      Home
      {/*Theme Toggle*/}
      <ThemeToggle />
      {/*Background Effects*/}
      <Background />

      {/*Navbar*/}
      <Navbar />
      {/*Main Content*/}

      {/*Footer*/}
      <Footer />
    </div>
  )
}