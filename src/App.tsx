import { About, Contact, Footer, Header, Projects, Stats } from './content'
import { BackToTop, SparkleLayer } from './components'
import './App.css'

function App() {
  return (
  <>
    <SparkleLayer />
    <Header />
    <Stats />
    <About />
    <Projects />
    <Contact />
    <Footer />
    <BackToTop />
  </>
  );
}

export default App
