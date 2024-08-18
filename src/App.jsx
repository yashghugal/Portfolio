
import Education from './Components/Education'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Social from './Components/Social'
import Techskills from './Components/Techskills'
import Workexp from './Components/Workexp'

function App() {
 

  return (
    <>
      <div className="overflow-x-hidden absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className='px-8 relative'>
          <Navbar />
          <Hero />
          <Techskills />
          <Workexp/>
          <Projects />
          <Education/>
          <Social/>
        </div>
      </div>
    </>
  )
}

export default App
