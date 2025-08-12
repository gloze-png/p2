import NavBar from "./components/NavBar"
import Experience from "./sections/Experience"
import FeatureCards from "./sections/FeatureCards"
import Footer from "./sections/footer"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"

const App = () => {
  return (
   <>
   <NavBar/>
   <Hero />
   <ShowcaseSection/>
   <FeatureCards/>
   <Experience />
   <TechStack />
   <Footer />
   </>
  )
}

export default App
