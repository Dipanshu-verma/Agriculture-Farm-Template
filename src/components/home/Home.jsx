import About from "../About/About";
import Service from "../Services/Service";
import "./home.css"
import HeroSection from '../Herosection/HeroSection'
import Testimonial from "../Testimonial/Testimonial";
import Team from "../TeamMambers/OurTeam";
const Home = () => {
  return (
    <div>
        <HeroSection/>
        <About />
        <Testimonial/>
        <Team/>
      <Service />
    </div>
  )
}

export default Home